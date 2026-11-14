/* French Lab 0.4.1 · utilidades puras y verificables. Sin dependencias externas. */
(function(root){
  'use strict';
  function normalizeFrench(value) {
    return String(value ?? '').normalize('NFC').trim().toLocaleLowerCase('fr')
      .replace(/[’‘`´]/g,"'").replace(/\s+/g,' ').replace(/[.!?]+\s*$/,'').trim();
  }
  function withoutDiacritics(value) {
    return normalizeFrench(value).normalize('NFD').replace(/[\u0300-\u036f]/g,'');
  }
  function accentChanges(input, expected) {
    const a = Array.from(normalizeFrench(input));
    const b = Array.from(normalizeFrench(expected));
    if (a.length !== b.length || withoutDiacritics(input) !== withoutDiacritics(expected)) return [];
    const differences=[];
    for (let i=0;i<b.length;i++) if(a[i]!==b[i]){
      // The accent-only equivalence was checked above. A changed glyph is an accent/cedilla.
      const start=expectedWordAt(b,i);
      differences.push({position:i,typed:a[i],correct:b[i],word:start});
    }
    return differences;
  }
  function expectedWordAt(chars,index){
    let first=index, last=index;
    while(first>0 && !/\s|['-]/.test(chars[first-1]))first--;
    while(last<chars.length && !/\s|['-]/.test(chars[last]))last++;
    return chars.slice(first,last).join('');
  }
  function evaluateAnswer(response,acceptedAnswers){
    const accepted=(Array.isArray(acceptedAnswers)?acceptedAnswers:[acceptedAnswers]).filter(x=>typeof x==='string'&&x.trim());
    if(!accepted.length) throw new Error('Faltan respuestas correctas definidas.');
    const entered=normalizeFrench(response);
    if(!entered)return {ok:false,kind:'empty',expected:accepted[0],changes:[]};
    const exact=accepted.find(a=>normalizeFrench(a)===entered);
    if(exact)return {ok:true,kind:'correct',expected:exact,changes:[]};
    const accent=accepted.find(a=>withoutDiacritics(a)===withoutDiacritics(entered));
    if(accent)return {ok:false,kind:'accent',expected:accent,changes:accentChanges(response,accent)};
    return {ok:false,kind:'other',expected:accepted[0],changes:[]};
  }
  function shuffle(items,random=Math.random){
    const a=[...items];
    for(let i=a.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}
    return a;
  }
  /** Unit-balanced then topic-balanced sampler: avoids over-representing large banks.
   * mode: 'unit' or 'course'. Questions without unit (v0.4) belong to unit 1.
   */
  function selectMixedQuestions(questions,statuses,mode,currentUnit,count=10,random=Math.random){
    if(!['unit','course'].includes(mode))throw new Error('Modo de selección desconocido');
    const ids=new Set(), byUnit=new Map();
    for(const q of questions){
      const unit=Number(q.unit??1),topic=q.cat??q.topic;
      if(!q.id || !topic || ids.has(q.id) || !['current','studied'].includes(statuses[unit]||'pending'))continue;
      if(mode==='unit' && unit!==Number(currentUnit))continue;
      ids.add(q.id);
      if(!byUnit.has(unit))byUnit.set(unit,new Map());
      const topics=byUnit.get(unit); if(!topics.has(topic))topics.set(topic,[]);
      topics.get(topic).push(q);
    }
    let units=shuffle([...byUnit.keys()],random);
    const queues=new Map();
    for(const unit of units){
      const groups=byUnit.get(unit);
      queues.set(unit,{topics:shuffle([...groups.keys()],random), groups:new Map([...groups.entries()].map(([k,v])=>[k,shuffle(v,random)]))});
    }
    const out=[];
    while(units.length && out.length<count){
      const activeUnits=[];
      for(const unit of units){
        if(out.length>=count)break;
        const q=queues.get(unit);
        while(q.topics.length && !q.groups.get(q.topics[0]).length)q.topics.shift();
        if(!q.topics.length)continue;
        const name=q.topics.shift();
        out.push(q.groups.get(name).pop());
        if(q.groups.get(name).length)q.topics.push(name);
        if(q.topics.length)activeUnits.push(unit);
      }
      units=shuffle(activeUnits,random);
    }
    return out;
  }
  function summarize(attempts,questions){
    const byId=new Map(questions.map(q=>[q.id,q]));
    const last=new Map(), byTopic=new Map(), accents=new Map();
    let correct=0,accent=0,other=0;
    for(const attempt of attempts){
      if(!attempt||typeof attempt.id!=='string')continue;
      const q=byId.get(attempt.id);
      if(!q)continue;
      const kind=attempt.kind|| (attempt.ok?'correct':'other');
      last.set(attempt.id,attempt);
      const group=q.cat, row=byTopic.get(group)||{total:0,correct:0,accent:0,other:0};
      row.total++;
      if(attempt.ok){correct++;row.correct++;}
      else if(kind==='accent'){
        accent++;row.accent++;
        const expected=attempt.expected||q.answer;
        const changes=accentChanges(attempt.entered||'',expected);
        for(const ch of changes)accents.set(ch.word,(accents.get(ch.word)||0)+1);
      } else {other++;row.other++;}
      byTopic.set(group,row);
    }
    const pending=[...last.entries()].filter(([id,a])=>!a.ok).map(([id])=>byId.get(id));
    return {total:correct+accent+other,correct,accent,other,pending,byTopic,accentWords:[...accents.entries()].sort((a,b)=>b[1]-a[1])};
  }
  const core={normalizeFrench,withoutDiacritics,accentChanges,evaluateAnswer,shuffle,selectMixedQuestions,summarize};
  root.FrenchLabCore=core;
  if(typeof module!=='undefined'&&module.exports)module.exports=core;
})(typeof globalThis!=='undefined'?globalThis:this);
