const questions = [
  {id:'aller',q:'Hier, nous ___ au cinéma.',t:'Ayer fuimos al cine.',a:['avons allé','sommes allés','sommes allé'],correct:1,why:'Aller se conjuga con être en passé composé. Con nous (grupo masculino o mixto), el participio concuerda: allés.'},
  {id:'ecrire',q:'Marie ___ une lettre.',t:'Marie ha escrito una carta.',a:['a écrit','est écrite','a écrite'],correct:0,why:'Écrire utiliza avoir. Como el complemento directo une lettre va detrás del verbo, el participio no concuerda.'},
  {id:'sortir',q:'Elles ___ à huit heures.',t:'Ellas salieron a las ocho.',a:['ont sorti','sont sorties','sont sorti'],correct:1,why:'Sortir, cuando significa salir, utiliza être. Con elles, el participio femenino plural lleva -es.'},
  {id:'faire',q:'Nous ___ nos devoirs.',t:'Hemos hecho nuestros deberes.',a:['sommes fait','avons fait','avons fais'],correct:1,why:'Faire utiliza avoir. El participio pasado es fait, invariable aquí porque el complemento va detrás.'},
  {id:'arriver',q:'Paul et Luc ___ hier soir.',t:'Paul y Luc llegaron ayer por la noche.',a:['sont arrivés','ont arrivé','sont arrivé'],correct:0,why:'Arriver utiliza être. Para un grupo masculino o mixto, la forma es arrivés.'}
];
const STORAGE_KEY = 'french-lab-state-v2';
const $ = (selector) => document.querySelector(selector);
const safeParse = (raw, fallback) => { try { return raw ? JSON.parse(raw) : fallback; } catch { return fallback; } };
function loadState() {
  const saved = safeParse(localStorage.getItem(STORAGE_KEY), null);
  if (saved && typeof saved === 'object') return {total:0,correct:0,errors:[],...saved};
  // Migrate the first prototype's locally stored counters and mistakes.
  const oldErrors = safeParse(localStorage.getItem('fl-errors'), []);
  return {
    total: Number(localStorage.getItem('fl-done') || 0) * questions.length, correct: 0,
    errors: Array.isArray(oldErrors) ? oldErrors.map((e,i)=>({id:`legacy-${i}`,question:e.question,wrongAnswer:e.answer,correctAnswer:e.correct,why:e.why,wrongCount:1,lastWrong:e.date||new Date().toISOString()})) : []
  };
}
let state = loadState();
let index = 0, selected = null, checked = false, currentMode = 'lesson';
function saveState(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); updateStats(); }
function updateStats(){
  $('#stat-done').textContent = state.total;
  $('#stat-errors').textContent = state.errors.length;
  $('#stat-correct').textContent = state.correct;
  const pct = state.total ? Math.round(state.correct/state.total*100) : 0;
  $('#accuracy-value').textContent = `${pct}%`;
  $('#accuracy-bar').style.width = `${pct}%`;
  $('#progress-count').textContent = `${state.total} respuestas registradas`;
  $('#daily-progress').style.width = `${Math.min(100,(state.total%5)*20)}%`;
  $('#daily-progress-caption').textContent = `${state.total%5} / 5 ejercicios`;
}
function toast(message){ const el=$('#toast'); el.textContent=message; el.classList.add('show'); window.clearTimeout(toast.timer); toast.timer=window.setTimeout(()=>el.classList.remove('show'),2400); }
function renderQuestion(){
  const q=questions[index]; selected=null; checked=false;
  $('#step-count').textContent=`${index+1} / ${questions.length}`;
  $('#question').textContent=q.q; $('#translation').textContent=q.t;
  $('#feedback').textContent=''; $('#feedback').className='feedback';
  $('#next-question').disabled=true; $('#next-question').textContent='Comprobar respuesta';
  $('#answers').replaceChildren();
  q.a.forEach((answer,i)=>{
    const button=document.createElement('button'); button.type='button'; button.className='answer'; button.textContent=answer;
    button.setAttribute('aria-pressed','false');
    button.addEventListener('click',()=>{
      if(checked)return; selected=i;
      document.querySelectorAll('.answer').forEach(b=>{b.classList.remove('selected');b.setAttribute('aria-pressed','false');});
      button.classList.add('selected'); button.setAttribute('aria-pressed','true'); $('#next-question').disabled=false;
    });
    $('#answers').appendChild(button);
  });
}
function openLesson(questionIndex=0, mode='lesson'){
  index=questionIndex; currentMode=mode; renderQuestion(); $('#lesson-dialog').showModal();
}
function recordAnswer(q, correct, chosen){
  state.total++;
  if(correct){
    state.correct++;
    state.errors=state.errors.filter(error=>error.id!==q.id);
  } else {
    const existing=state.errors.find(error=>error.id===q.id);
    if(existing){existing.wrongAnswer=q.a[chosen];existing.wrongCount=(existing.wrongCount||1)+1;existing.lastWrong=new Date().toISOString();}
    else state.errors.unshift({id:q.id,question:q.q,wrongAnswer:q.a[chosen],correctAnswer:q.a[q.correct],why:q.why,wrongCount:1,lastWrong:new Date().toISOString()});
  }
  saveState();
}
$('#next-question').addEventListener('click',()=>{
  if(!checked){
    checked=true; const q=questions[index], correct=selected===q.correct;
    document.querySelectorAll('.answer').forEach((button,i)=>{button.disabled=true;if(i===q.correct)button.classList.add('correct');else if(i===selected)button.classList.add('wrong');});
    recordAnswer(q,correct,selected);
    $('#feedback').textContent=(correct?'¡Muy bien! ':'No exactamente. ')+q.why;
    $('#feedback').className='feedback '+(correct?'good':'bad');
    $('#next-question').textContent=index===questions.length-1?'Terminar sesión':'Siguiente ejercicio';
    return;
  }
  if(index<questions.length-1){index++;renderQuestion();}
  else {$('#lesson-dialog').close();toast('Sesión terminada. Tus resultados ya están guardados.');}
});
$('#close-lesson').addEventListener('click',()=>$('#lesson-dialog').close());
function renderErrors(){
  const list=$('#errors-list'); list.replaceChildren();
  $('#errors-empty').hidden=state.errors.length>0;
  $('#errors-summary').textContent=state.errors.length ? `${state.errors.length} tema${state.errors.length===1?'':'s'} pendiente${state.errors.length===1?'':'s'} de repaso` : '¡No tienes errores pendientes!';
  state.errors.forEach(error=>{
    const card=document.createElement('article'); card.className='error-card';
    const title=document.createElement('h3'); title.textContent=error.question;
    const wrong=document.createElement('p'); wrong.className='error-wrong'; wrong.textContent=`Tu última respuesta: ${error.wrongAnswer}`;
    const correct=document.createElement('p'); correct.className='error-correct'; correct.textContent=`Respuesta correcta: ${error.correctAnswer}`;
    const why=document.createElement('p'); why.className='error-why'; why.textContent=error.why;
    const meta=document.createElement('small'); meta.textContent=`Fallos registrados: ${error.wrongCount||1}`;
    const practice=document.createElement('button'); practice.type='button'; practice.className='secondary-action'; practice.textContent='Practicar este punto';
    const qIndex=questions.findIndex(q=>q.id===error.id);
    practice.addEventListener('click',()=>{ $('#errors-dialog').close(); openLesson(qIndex>=0?qIndex:0,'review'); });
    card.append(title,wrong,correct,why,meta,practice); list.appendChild(card);
  });
}
function openErrors(){renderErrors();$('#errors-dialog').showModal();}
function openProgress(){
  $('#progress-total').textContent=state.total;
  $('#progress-correct').textContent=state.correct;
  $('#progress-pending').textContent=state.errors.length;
  const accuracy=state.total?Math.round(state.correct/state.total*100):0;
  $('#progress-accuracy').textContent=`${accuracy}%`;
  $('#progress-dialog').showModal();
}
document.querySelectorAll('[data-go]').forEach(button=>button.addEventListener('click',()=>{
  const destination=button.dataset.go;
  if(destination==='lesson')openLesson();
  else if(destination==='home')window.scrollTo({top:0,behavior:'smooth'});
  else if(destination==='errors')openErrors();
  else if(destination==='progress')openProgress();
  else if(destination==='topics')toast('Los módulos de gramática se incorporarán en la siguiente versión.');
  else if(destination==='chat')toast('El profesor IA llegará cuando conectemos un servicio seguro.');
  else if(destination==='vocab')toast('El módulo de vocabulario está en la hoja de ruta.');
}));
$('#close-errors').addEventListener('click',()=>$('#errors-dialog').close());
$('#close-progress').addEventListener('click',()=>$('#progress-dialog').close());
updateStats();
if('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('./sw.js').catch(()=>{});
