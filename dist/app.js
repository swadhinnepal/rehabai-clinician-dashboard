const patients=[
{id:'PT-1048',name:'Maya Chen',age:29,plan:'ACL reconstruction',area:'Right knee',week:'Week 8 of 16',last:'Today, 9:42 AM',adherence:93,status:'ontrack',label:'On track',score:86,change:'+11%',rom:'112°',symmetry:'93%'},
{id:'PT-1031',name:'Marcus Williams',age:46,plan:'Rotator cuff repair',area:'Left shoulder',week:'Week 5 of 12',last:'Yesterday, 4:18 PM',adherence:71,status:'review',label:'Needs review',score:68,change:'−3%',rom:'128°',symmetry:'81%'},
{id:'PT-1027',name:'Elena Rodriguez',age:62,plan:'Hip replacement',area:'Left hip',week:'Week 10 of 14',last:'Yesterday, 8:05 AM',adherence:88,status:'ontrack',label:'On track',score:82,change:'+8%',rom:'101°',symmetry:'91%'},
{id:'PT-1056',name:'Noah Thompson',age:17,plan:'Ankle sprain',area:'Right ankle',week:'Week 3 of 6',last:'Sep 18, 7:31 PM',adherence:64,status:'review',label:'Needs review',score:72,change:'+2%',rom:'34°',symmetry:'84%'},
{id:'PT-1019',name:'Priya Shah',age:38,plan:'Low back pain',area:'Lumbar',week:'Week 6 of 10',last:'Sep 17, 6:50 AM',adherence:79,status:'review',label:'Needs review',score:76,change:'+5%',rom:'—',symmetry:'88%'},
{id:'PT-1044',name:'Daniel Kim',age:54,plan:'Meniscus repair',area:'Left knee',week:'Week 7 of 12',last:'Sep 16, 5:14 PM',adherence:58,status:'review',label:'Needs review',score:65,change:'−6%',rom:'98°',symmetry:'78%'}];
const exerciseLibrary=['Bodyweight Squat','Forward Lunge','Side Bend','Child Pose','Arm Circles','Butterfly Stretch','Cobra Stretch','Hamstring Curl','Forward March','Shoulder Raise'];
const exerciseImages={
'Bodyweight Squat':'./assets/bodyweight-squat.png',
'Forward Lunge':'./assets/forward-lunge.png',
'Side Bend':'./assets/side-bend.jpg',
'Child Pose':'./assets/child-pose.png',
'Arm Circles':'./assets/arm-circles.png',
'Butterfly Stretch':'./assets/butterfly-stretch.png',
'Cobra Stretch':'./assets/cobra-stretch.png',
'Hamstring Curl':'./assets/hamstring-curl.png',
'Forward March':'./assets/forward-march.png',
'Shoulder Raise':'./assets/shoulder-raise.png'
};
const plansByPatient={
'PT-1048':[{name:'Bodyweight Squat',detail:'3 × 20 reps · 3 days/week'},{name:'Forward Lunge',detail:'3 × 10 reps · 3 days/week'},{name:'Hamstring Curl',detail:'2 × 15 reps · Daily'}],
'PT-1031':[{name:'Shoulder Raise',detail:'3 × 12 reps · 3 days/week'},{name:'Arm Circles',detail:'2 × 30 seconds · Daily'},{name:'Side Bend',detail:'3 × 10 reps · 3 days/week'}],
'PT-1027':[{name:'Forward March',detail:'3 × 45 seconds · Daily'},{name:'Butterfly Stretch',detail:'3 × 30 seconds · Daily'},{name:'Cobra Stretch',detail:'3 × 20 seconds · 3 days/week'}],
'PT-1056':[{name:'Hamstring Curl',detail:'2 × 15 reps · Daily'},{name:'Forward March',detail:'3 × 30 seconds · Daily'},{name:'Bodyweight Squat',detail:'2 × 12 reps · 3 days/week'}],
'PT-1019':[{name:'Child Pose',detail:'5 minutes · Daily'},{name:'Cobra Stretch',detail:'3 × 20 seconds · Daily'},{name:'Side Bend',detail:'3 × 12 reps · 3 days/week'}],
'PT-1044':[{name:'Forward Lunge',detail:'3 × 10 reps · 3 days/week'},{name:'Bodyweight Squat',detail:'3 × 15 reps · 3 days/week'},{name:'Hamstring Curl',detail:'2 × 12 reps · Daily'}]
};
const exerciseInsights={
'Bodyweight Squat':{measure:'Knee flexion ROM',value:'112°',target:'110–125°',flag:'Intermittent knee valgus',note:'4 repetitions moved inside the target knee line during the final set.'},
'Forward Lunge':{measure:'Front knee flexion',value:'104°',target:'95–115°',flag:'Forward trunk lean',note:'Trunk angle exceeded the preferred range in 3 late-set repetitions.'},
'Side Bend':{measure:'Lateral trunk ROM',value:'38°',target:'35–45°',flag:'Uneven return speed',note:'Return speed was slower on the left in 2 of 12 repetitions.'},
'Child Pose':{measure:'Shoulder flexion ROM',value:'154°',target:'150–170°',flag:'Limited hip shift',note:'Hip position moved forward during the final 40 seconds.'},
'Arm Circles':{measure:'Shoulder elevation ROM',value:'168°',target:'160–180°',flag:'Left-side range gap',note:'Left arm elevation averaged 9° below the right side.'},
'Butterfly Stretch':{measure:'Hip external rotation',value:'46°',target:'40–55°',flag:'Asymmetric knee height',note:'Right knee remained 4 cm higher during the final hold.'},
'Cobra Stretch':{measure:'Spinal extension ROM',value:'34°',target:'30–40°',flag:'Shoulder elevation',note:'Shoulders elevated during 18% of usable frames.'},
'Hamstring Curl':{measure:'Knee flexion ROM',value:'118°',target:'110–130°',flag:'Hip extension compensation',note:'Hip drift appeared in 3 of 15 repetitions.'},
'Forward March':{measure:'Peak hip flexion',value:'92°',target:'85–100°',flag:'Reduced stance stability',note:'Stance sway exceeded the reference range in 2 repetitions.'},
'Shoulder Raise':{measure:'Shoulder elevation ROM',value:'151°',target:'145–170°',flag:'Scapular hiking',note:'Early shoulder elevation appeared in 3 repetitions.'}
};
const assignments=[
{id:1,patientId:'PT-1048',exercise:'Bodyweight Squat',dose:'3 × 20 reps',due:'Today',status:'due'},
{id:2,patientId:'PT-1031',exercise:'Shoulder Raise',dose:'3 × 12 reps',due:'Yesterday',status:'overdue'},
{id:3,patientId:'PT-1027',exercise:'Forward March',dose:'3 × 45 sec',due:'Today',status:'due'},
{id:4,patientId:'PT-1056',exercise:'Hamstring Curl',dose:'2 × 15 reps',due:'Yesterday',status:'overdue'},
{id:5,patientId:'PT-1019',exercise:'Child Pose',dose:'5 minutes',due:'Completed 8:10 AM',status:'complete'},
{id:6,patientId:'PT-1044',exercise:'Forward Lunge',dose:'3 × 10 reps',due:'Sep 18',status:'overdue'}];
const notes={};
let activeFilter='all',assignmentFilter='all',adherenceThreshold=0,sortMode='name',selectedPatient=patients[0];
const rows=document.getElementById('patientRows'),toast=document.getElementById('toast');

function showToast(message){toast.textContent=message;toast.classList.add('show');clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>toast.classList.remove('show'),2200)}
function initials(name){return name.split(' ').map(word=>word[0]).join('').slice(0,2).toUpperCase()}
function exerciseVisual(name){return `<img class="exercise-image" src="${exerciseImages[name]}" alt="${name} demonstration" />`}
function patientAvatar(name,size=''){return `<span class="patient-avatar ${size}" aria-hidden="true">${initials(name)}</span>`}
function patientById(id){return patients.find(patient=>patient.id===id)}
function getPlans(patientId=selectedPatient.id){return plansByPatient[patientId]||(plansByPatient[patientId]=[])}
function renderDetailTabs(activeTab='overview'){
  const exerciseTabs=getPlans().map((plan,index)=>`<button data-detail-tab="exercise-${index}" title="${plan.name}">${plan.name}</button>`).join('');
  document.getElementById('detailTabs').innerHTML=`<button data-detail-tab="overview">Overview</button>${exerciseTabs}<button data-detail-tab="sessions">All sessions</button><button data-detail-tab="plan">Care plan</button><button data-detail-tab="notes">Notes</button>`;
  document.querySelectorAll('[data-detail-tab]').forEach(button=>button.classList.toggle('active',button.dataset.detailTab===activeTab));
}

function setRoute(route){
  document.querySelectorAll('.view').forEach(view=>view.classList.remove('active'));
  const view=document.getElementById(`${route}View`)||document.getElementById('patientsView');view.classList.add('active');
  document.querySelectorAll('[data-route]').forEach(button=>button.classList.toggle('active',button.dataset.route===route));
  document.getElementById('sidebar').classList.remove('open');
  if(route==='assignments')renderAssignments();
  window.scrollTo({top:0,behavior:'auto'});
}

function renderPatients(){
  const query=document.getElementById('patientSearch').value.trim().toLowerCase();
  let visible=patients.filter(p=>(activeFilter==='all'||p.status===activeFilter)&&p.adherence>=adherenceThreshold&&(p.name.toLowerCase().includes(query)||p.plan.toLowerCase().includes(query)||p.id.toLowerCase().includes(query)));
  visible=[...visible].sort((a,b)=>sortMode==='adherence'?a.adherence-b.adherence:a.name.localeCompare(b.name));
  rows.innerHTML=visible.map(p=>`<button class="patient-row" data-patient="${p.id}" role="row"><span class="patient-cell" role="cell">${patientAvatar(p.name)}<span><strong>${p.name}</strong><small>${p.id} · ${p.age} years</small></span></span><span role="cell">${p.plan}<small>${p.area} · ${p.week}</small></span><span role="cell">${p.last}<small>${p.score} movement score</small></span><span class="adherence" role="cell"><span class="mini-progress"><i style="width:${p.adherence}%"></i></span>${p.adherence}%</span><em class="status-badge ${p.status}" role="cell">${p.label}</em><span class="row-action">Open report →</span></button>`).join('');
  document.getElementById('emptyState').hidden=visible.length>0;
}

function renderAssignments(){
  const query=document.getElementById('assignmentSearch').value.trim().toLowerCase();
  const visible=assignments.filter(item=>(assignmentFilter==='all'||item.status===assignmentFilter)&&(`${patientById(item.patientId)?.name} ${item.exercise}`.toLowerCase().includes(query)));
  document.getElementById('assignmentRows').innerHTML=visible.map(item=>{const patient=patientById(item.patientId);return `<div class="assignment-row"><span class="assignment-person">${patientAvatar(patient.name)}<span><strong>${patient.name}</strong><small>${patient.id}</small></span></span><span class="assignment-exercise">${exerciseVisual(item.exercise)}<span><strong>${item.exercise}</strong><small>${item.dose}</small></span></span><span>${item.due}<small>${item.status==='overdue'?'Follow-up recommended':'Care plan schedule'}</small></span><em class="status-badge ${item.status==='complete'?'ontrack':'review'}">${item.status==='complete'?'Complete':item.status==='overdue'?'Overdue':'Due today'}</em><span class="assignment-actions"><button data-patient="${item.patientId}">Open report</button>${item.status!=='complete'?`<button data-complete-assignment="${item.id}">Complete</button>`:''}</span></div>`}).join('')||'<div class="empty-state"><h2>No assignments found</h2><p>Try another filter.</p></div>';
}

function renderPlan(){const plans=getPlans();document.getElementById('planCount').textContent=`${plans.length} exercise${plans.length===1?'':'s'}`;document.getElementById('activePlan').innerHTML=plans.map((p,index)=>`<button class="plan-item" data-detail-tab="exercise-${index}">${exerciseVisual(p.name)}<div><strong>${p.name}</strong><small>${p.detail}</small></div><span>View →</span></button>`).join('')}

function openPatient(id){
  selectedPatient=patientById(id)||patients[0];
  document.getElementById('detailPatientAvatar').textContent=initials(selectedPatient.name);
  document.getElementById('patientName').textContent=selectedPatient.name;document.getElementById('patientStatus').textContent=selectedPatient.label;document.getElementById('patientStatus').className=`status-badge ${selectedPatient.status}`;document.getElementById('patientMeta').textContent=`${selectedPatient.plan} · ${selectedPatient.area} · ${selectedPatient.week}`;document.getElementById('patientId').textContent=selectedPatient.id;document.getElementById('lastUpdated').textContent=selectedPatient.last;
  document.getElementById('nextStepTitle').textContent=selectedPatient.status==='review'?'Review exercise-level findings':'Confirm progress and continue the plan';
  document.getElementById('nextStepCopy').textContent=selectedPatient.status==='review'?'Open the assigned exercise tabs to see which movements need attention.':'Overall progress is on track. Exercise-specific details remain in the assigned exercise tabs.';
  const plans=getPlans(),weeklyCompleted=Math.max(1,Math.round(selectedPatient.adherence/100*9));
  const metrics=[['Overall movement score',`${selectedPatient.score}/100`,selectedPatient.change,'Across all exercises'],['Plan adherence',`${selectedPatient.adherence}%`,'+6%','Completed vs prescribed'],['Active exercises',plans.length,'Current','In the care plan'],['Sessions this week',weeklyCompleted,'of 9','Across the full plan']];
  document.getElementById('metricGrid').innerHTML=metrics.map((m,i)=>`<article class="metric-card ${i===0&&selectedPatient.status==='review'?'warning':''}"><span>${m[0]}</span><strong>${m[1]}</strong><small><b>${m[2]}</b> · ${m[3]}</small></article>`).join('');
  document.getElementById('overviewSummary').innerHTML=`<div><span>Program</span><strong>${selectedPatient.plan}</strong></div><div><span>Current stage</span><strong>${selectedPatient.week}</strong></div><div><span>Primary focus</span><strong>${selectedPatient.area}</strong></div><div><span>Latest activity</span><strong>${selectedPatient.last}</strong></div>`;
  document.getElementById('overviewStatusTitle').textContent=selectedPatient.status==='review'?'Review recommended':'Progressing as expected';
  document.getElementById('overviewStatusBadge').textContent=selectedPatient.label;document.getElementById('overviewStatusBadge').className=`status-badge ${selectedPatient.status}`;
  document.getElementById('overviewStatusCopy').textContent=selectedPatient.status==='review'?'One or more exercises have items that need clinician review. Open the exercise tabs for the exact pose findings.':'The patient is completing the plan consistently. Open an exercise tab for pose measurements and form details.';
  document.getElementById('overviewChecklist').innerHTML=`<div><span>✓</span><p><strong>${plans.length} exercises assigned</strong><small>Open each exercise tab for details.</small></p></div><div><span>✓</span><p><strong>${weeklyCompleted} of 9 sessions completed</strong><small>Current weekly schedule.</small></p></div><div class="${selectedPatient.status==='review'?'attention':''}"><span>${selectedPatient.status==='review'?'!':'✓'}</span><p><strong>${selectedPatient.status==='review'?'Exercise review pending':'No urgent review items'}</strong><small>${selectedPatient.status==='review'?'See the exercise tabs with flagged data.':'Continue the current care plan.'}</small></p></div>`;
  renderPlan();renderDetailTabs();document.querySelectorAll('.view').forEach(view=>view.classList.remove('active'));document.getElementById('detailView').classList.add('active');showDetailTab('overview');window.scrollTo({top:0,behavior:'auto'});
}

function renderExerciseReport(plan,index){
  const insight=exerciseInsights[plan.name],baseScore=Number(selectedPatient.score)||72,score=Math.max(58,Math.min(96,baseScore-index*2+2)),completion=Math.max(52,selectedPatient.adherence-index*3),usable=97-index,sessions=Math.max(4,9-index);
  const bars=[score-11,score-8,score-9,score-5,score-3,score].map((value,barIndex)=>`<span style="height:${Math.max(28,value-25)}%"><b>${value}</b><small>S${barIndex+1}</small></span>`).join('');
  return `<div class="exercise-detail-page">
    <section class="panel exercise-detail-hero">
      <div class="exercise-detail-image">${exerciseVisual(plan.name)}</div>
      <div><p class="eyebrow">Assigned exercise ${index+1} of ${getPlans().length}</p><h2>${plan.name}</h2><p>${plan.detail}</p><span class="status-badge ontrack">Active assignment</span></div>
      <div class="exercise-detail-actions"><button class="secondary-button" data-edit-exercise="${plan.name}">Edit assignment</button><button class="primary-button" data-review-exercise="${plan.name}">Review latest session</button></div>
    </section>
    <section class="metric-grid exercise-metrics">
      <article class="metric-card"><span>Movement score</span><strong>${score}/100</strong><small><b>↑ 6%</b> · Latest session</small></article>
      <article class="metric-card"><span>Completion</span><strong>${completion}%</strong><small><b>↑ 4%</b> · Prescribed volume</small></article>
      <article class="metric-card"><span>Usable pose frames</span><strong>${usable}%</strong><small><b>Good</b> · Tracking confidence</small></article>
      <article class="metric-card"><span>Sessions completed</span><strong>${sessions}</strong><small><b>3 this week</b> · Since assigned</small></article>
    </section>
    <div class="exercise-detail-grid">
      <section class="panel analytics-card"><div class="panel-title"><div><p class="eyebrow">Exercise trend</p><h2>Movement score by session</h2></div><span class="quality-chip"><i></i>Improving</span></div><div class="bar-chart exercise-chart">${bars}</div></section>
      <section class="panel exercise-observation"><div class="panel-title"><div><p class="eyebrow">Latest pose observation</p><h2>${insight.flag}</h2></div><span class="count-badge">1</span></div><p>${insight.note}</p><button data-review-exercise="${plan.name}">Review flagged frames →</button><p class="clinical-note">Pose estimates support review; they are not a diagnosis or substitute for clinical assessment.</p></section>
    </div>
    <section class="panel movement-panel exercise-measures"><div class="panel-title padded"><div><p class="eyebrow">Pose-derived measures</p><h2>${plan.name} movement details</h2></div><span class="quality-chip"><i></i>${usable}% usable frames</span></div><div class="movement-table"><div class="movement-header"><span>Measure</span><span>Latest</span><span>30-day change</span><span>Reference target</span></div><div><span><b>${insight.measure}</b><small>Primary exercise-specific angle</small></span><strong>${insight.value}</strong><em class="positive">↑ 8°</em><span>${insight.target}</span></div><div><span><b>Tempo consistency</b><small>Rep duration variability</small></span><strong>${88-index}%</strong><em class="positive">↑ 5%</em><span>≥ 85%</span></div><div><span><b>Left–right symmetry</b><small>Pose landmark comparison</small></span><strong>${91-index}%</strong><em class="positive">↑ 4%</em><span>≥ 90%</span></div><div><span><b>Compensated repetitions</b><small>Reps exceeding the review threshold</small></span><strong>${2+index}</strong><em class="positive">↓ 2</em><span>≤ 3</span></div></div></section>
    <section class="panel exercise-session-list"><div class="panel-title"><div><p class="eyebrow">History</p><h2>Recent ${plan.name} sessions</h2></div></div><div class="session-table"><div class="session-row"><span><strong>Latest session</strong><small>Today, 9:42 AM</small></span><span>Completed</span><span>${score} score</span><span>${usable}% frames</span><button data-review-exercise="${plan.name}">Review</button></div><div class="session-row"><span><strong>Previous session</strong><small>Sep 17, 5:30 PM</small></span><span>Completed</span><span>${score-3} score</span><span>${usable-1}% frames</span><button data-review-exercise="${plan.name}">Review</button></div></div></section>
  </div>`;
}

function showDetailTab(tab){
  document.querySelectorAll('[data-detail-tab]').forEach(button=>button.classList.toggle('active',button.dataset.detailTab===tab));
  const overview=document.getElementById('overviewReport'),content=document.getElementById('detailTabContent');overview.hidden=tab!=='overview';content.hidden=tab==='overview';
  if(tab==='overview'){content.innerHTML='';return}
  if(tab.startsWith('exercise-')){const index=Number(tab.split('-')[1]),plan=getPlans()[index];content.innerHTML=plan?renderExerciseReport(plan,index):'<div class="empty-state"><h2>Exercise not found</h2></div>';return}
  if(tab==='sessions')content.innerHTML=`<div class="detail-tab-panel"><section class="panel"><div class="panel-title"><div><p class="eyebrow">Recorded activity</p><h2>Recent sessions</h2></div></div><div class="session-table"><div class="session-row"><span><strong>Bodyweight Squat</strong><small>Today, 9:42 AM</small></span><span>56 / 60 reps</span><span>86 score</span><span>97% frames</span><button data-session-detail="Bodyweight Squat">Review</button></div><div class="session-row"><span><strong>Side Bend</strong><small>Sep 17, 5:30 PM</small></span><span>3 / 3 sets</span><span>82 score</span><span>95% frames</span><button data-session-detail="Side Bend">Review</button></div><div class="session-row"><span><strong>Child Pose</strong><small>Sep 15, 8:12 AM</small></span><span>5 minutes</span><span>79 score</span><span>94% frames</span><button data-session-detail="Child Pose">Review</button></div></div></section></div>`;
  if(tab==='plan'){const plans=getPlans();content.innerHTML=`<div class="detail-tab-panel"><section class="panel"><div class="panel-title"><div><p class="eyebrow">Current care plan</p><h2>${plans.length} active exercises</h2></div><button class="primary-button" data-open-assignment>＋ Add exercise</button></div><div class="large-plan-list">${plans.map((p,index)=>`<button class="large-plan-item" data-detail-tab="exercise-${index}">${exerciseVisual(p.name)}<div><strong>${p.name}</strong><small>${p.detail}</small><em>View exercise details →</em></div></button>`).join('')}</div></section></div>`}
  if(tab==='notes')content.innerHTML=`<div class="detail-tab-panel"><section class="panel"><div class="panel-title"><div><p class="eyebrow">Clinician record</p><h2>Private notes</h2></div><span class="quality-chip"><i></i>Saved locally</span></div><textarea class="notes-area" id="notesArea" placeholder="Add observations, follow-up items, or plan changes…">${notes[selectedPatient.id]||''}</textarea><div class="notes-actions"><button class="primary-button" id="saveNotes">Save note</button></div></section></div>`;
}

function openAssignmentModal(patientId=selectedPatient.id){document.getElementById('assignmentModal').hidden=false;document.getElementById('assignmentPatientSelect').value=patientId;document.getElementById('exerciseSelect').focus()}
function updateExercisePreview(){const name=document.getElementById('exerciseSelect').value;document.getElementById('exercisePreviewImage').src=exerciseImages[name];document.getElementById('exercisePreviewImage').alt=`${name} demonstration`;document.getElementById('exercisePreviewName').textContent=name}
function closeAssignmentModal(){document.getElementById('assignmentModal').hidden=true}
function openUtility(title,eyebrow,body){document.getElementById('utilityTitle').textContent=title;document.getElementById('utilityEyebrow').textContent=eyebrow;document.getElementById('utilityBody').innerHTML=body;document.getElementById('utilityModal').hidden=false}
function closeUtility(){document.getElementById('utilityModal').hidden=true}

function openAddPatient(){openUtility('Add a patient','Patient roster',`<form class="utility-form" id="addPatientForm"><label>Full name<input id="newPatientName" required placeholder="Patient name" /></label><div class="form-grid"><label>Age<input id="newPatientAge" required type="number" min="1" max="110" value="42" /></label><label>Body area<input id="newPatientArea" required placeholder="e.g. Right knee" /></label></div><label>Care plan<input id="newPatientPlan" required placeholder="e.g. ACL rehabilitation" /></label><div class="modal-actions"><button type="button" class="secondary-button" data-close-utility>Cancel</button><button class="primary-button">Add patient</button></div></form>`)}
function openFilter(){openUtility('Filter patients','Patient roster',`<form class="utility-form" id="filterForm"><label>Minimum adherence<select id="minAdherence"><option value="0">Any adherence</option><option value="60">60% or higher</option><option value="75">75% or higher</option><option value="90">90% or higher</option></select></label><label>Sort by<select id="patientSort"><option value="name">Patient name</option><option value="adherence">Lowest adherence first</option></select></label><div class="modal-actions"><button type="button" class="secondary-button" id="resetFilters">Reset</button><button class="primary-button">Apply filters</button></div></form>`);document.getElementById('minAdherence').value=String(adherenceThreshold);document.getElementById('patientSort').value=sortMode}
function openNotifications(){openUtility('Notifications','Inbox',`<div class="utility-list"><article><strong>Daniel Kim needs review</strong><small>Adherence fell below 60% after two missed sessions.</small></article><article><strong>Marcus Williams completed a session</strong><small>Three shoulder-elevation repetitions were flagged for review.</small></article><article><strong>Maya Chen reached a milestone</strong><small>Movement symmetry exceeded 90% for the first time.</small></article></div><div class="modal-actions"><button class="primary-button" id="markRead">Mark all read</button></div>`)}
function openProfile(){openUtility('Clinician profile','Account',`<form class="utility-form" id="profileForm"><label>Display name<input value="Dr. A. Patel" /></label><label>Role<input value="Physical Therapist" /></label><label>Clinic<input value="Northlake Rehabilitation" /></label><div class="modal-actions"><button class="primary-button">Save profile</button></div></form>`)}
function openHelp(){openUtility('Help & support','RehabAI',`<div class="utility-list"><article><strong>Reviewing pose observations</strong><small>Open a patient and use Sessions to inspect flagged movement patterns alongside frame quality.</small></article><article><strong>Managing care plans</strong><small>Use Assignments or the patient Care plan tab to add exercises and dosage.</small></article><article><strong>Prototype boundaries</strong><small>All patients and clinical values are fictional; no real patient information is stored.</small></article></div>`)}
function openMessage(){openUtility(`Message ${selectedPatient.name}`,'Patient communication',`<form class="utility-form" id="messageForm"><label>Message<textarea rows="5" required placeholder="Write a short check-in…">Hi ${selectedPatient.name.split(' ')[0]}, I reviewed your latest session. Please continue your current plan and focus on controlled, comfortable movement.</textarea></label><div class="modal-actions"><button type="button" class="secondary-button" data-close-utility>Cancel</button><button class="primary-button">Send message</button></div></form>`)}
function openSessionDetail(exercise='Bodyweight Squat'){const insight=exerciseInsights[exercise]||exerciseInsights['Bodyweight Squat'];openUtility(`${exercise} session`,'Pose review',`<div class="session-modal-exercise">${exerciseVisual(exercise)}<div><strong>${exercise}</strong><small>Latest completed session</small></div></div><div class="summary-grid compact-summary"><article class="summary-card"><strong>86</strong><p>Movement score</p></article><article class="summary-card"><strong>97%</strong><p>Usable frames</p></article><article class="summary-card"><strong>4</strong><p>Flagged reps</p></article></div><div class="utility-list"><article><strong>${insight.flag}</strong><small>${insight.note} Review the pattern alongside fatigue and patient-reported symptoms.</small></article><article><strong>Positive trend</strong><small>${insight.measure} and movement consistency both improved from the prior session.</small></article></div>`)}

document.addEventListener('click',event=>{
  const patient=event.target.closest('[data-patient]');if(patient){openPatient(patient.dataset.patient);return}
  const route=event.target.closest('[data-route]');if(route){setRoute(route.dataset.route);return}
  const tab=event.target.closest('[data-detail-tab]');if(tab){showDetailTab(tab.dataset.detailTab);return}
  const complete=event.target.closest('[data-complete-assignment]');if(complete){const item=assignments.find(a=>a.id===Number(complete.dataset.completeAssignment));item.status='complete';item.due='Completed just now';renderAssignments();showToast('Assignment marked complete');return}
  const reviewExercise=event.target.closest('[data-review-exercise]');if(reviewExercise){openSessionDetail(reviewExercise.dataset.reviewExercise);return}
  const editExercise=event.target.closest('[data-edit-exercise]');if(editExercise){document.getElementById('exerciseSelect').value=editExercise.dataset.editExercise;updateExercisePreview();openAssignmentModal();return}
  if(event.target.closest('[data-open-assignment]')){openAssignmentModal();return}
  if(event.target.closest('[data-session-detail]')){openSessionDetail(event.target.closest('[data-session-detail]').dataset.sessionDetail);return}
  if(event.target.closest('[data-session-jump]')){openSessionDetail();return}
  if(event.target.closest('[data-close-utility]')){closeUtility();return}
  if(event.target.closest('#saveNotes')){notes[selectedPatient.id]=document.getElementById('notesArea').value;showToast('Clinical note saved in this demo');return}
});

document.getElementById('patientSearch').addEventListener('input',renderPatients);
document.getElementById('assignmentSearch').addEventListener('input',renderAssignments);
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{activeFilter=button.dataset.filter;document.querySelectorAll('[data-filter]').forEach(b=>b.classList.toggle('active',b===button));renderPatients()}));
document.querySelectorAll('[data-assignment-filter]').forEach(button=>button.addEventListener('click',()=>{assignmentFilter=button.dataset.assignmentFilter;document.querySelectorAll('[data-assignment-filter]').forEach(b=>b.classList.toggle('active',b===button));renderAssignments()}));
document.getElementById('backButton').addEventListener('click',()=>setRoute('patients'));
document.getElementById('reviewFlaggedButton').addEventListener('click',()=>{activeFilter='review';document.querySelectorAll('[data-filter]').forEach(button=>button.classList.toggle('active',button.dataset.filter==='review'));renderPatients();document.querySelector('.patient-panel').scrollIntoView({behavior:'smooth',block:'start'})});
document.getElementById('reviewLatestButton').addEventListener('click',()=>{if(getPlans().length)showDetailTab('exercise-0');else openAssignmentModal()});document.getElementById('quickAssignButton').addEventListener('click',()=>openAssignmentModal());
document.getElementById('openFirstExercise').addEventListener('click',()=>{if(getPlans().length)showDetailTab('exercise-0');else openAssignmentModal()});
document.getElementById('assignButton').addEventListener('click',()=>openAssignmentModal());document.getElementById('editPlanButton').addEventListener('click',()=>openAssignmentModal());document.getElementById('newAssignmentButton').addEventListener('click',()=>openAssignmentModal(patients[0].id));
document.getElementById('closeModal').addEventListener('click',closeAssignmentModal);document.getElementById('cancelAssign').addEventListener('click',closeAssignmentModal);document.getElementById('assignmentModal').addEventListener('click',event=>{if(event.target.id==='assignmentModal')closeAssignmentModal()});
document.getElementById('closeUtility').addEventListener('click',closeUtility);document.getElementById('utilityModal').addEventListener('click',event=>{if(event.target.id==='utilityModal')closeUtility()});
document.addEventListener('keydown',event=>{if(event.key==='Escape'){closeAssignmentModal();closeUtility()}});

document.getElementById('assignmentForm').addEventListener('submit',event=>{event.preventDefault();const patientId=document.getElementById('assignmentPatientSelect').value,name=document.getElementById('exerciseSelect').value,sets=document.getElementById('setsInput').value,reps=document.getElementById('repsInput').value,schedule=document.getElementById('scheduleSelect').value,targetPlans=getPlans(patientId),existing=targetPlans.find(plan=>plan.name===name),detail=`${sets} × ${reps} reps · ${schedule}`;if(existing)existing.detail=detail;else targetPlans.unshift({name,detail});assignments.unshift({id:Date.now(),patientId,exercise:name,dose:`${sets} × ${reps} reps`,due:'Today',status:'due'});if(patientId===selectedPatient.id){renderPlan();renderDetailTabs('plan');showDetailTab('plan')}renderAssignments();closeAssignmentModal();showToast(`${name} assigned to ${patientById(patientId).name}`)});

document.getElementById('utilityBody').addEventListener('submit',event=>{
  event.preventDefault();
  if(event.target.id==='addPatientForm'){const id=`PT-${1060+patients.length}`;patients.push({id,name:document.getElementById('newPatientName').value,age:Number(document.getElementById('newPatientAge').value),plan:document.getElementById('newPatientPlan').value,area:document.getElementById('newPatientArea').value,week:'Week 1',last:'No sessions yet',adherence:0,status:'ontrack',label:'On track',score:'—',change:'—',rom:'—',symmetry:'—'});plansByPatient[id]=[];renderPatients();populatePatientSelect();closeUtility();showToast('Patient added to the roster')}
  if(event.target.id==='filterForm'){adherenceThreshold=Number(document.getElementById('minAdherence').value);sortMode=document.getElementById('patientSort').value;renderPatients();closeUtility();showToast('Patient filters applied')}
  if(event.target.id==='messageForm'){closeUtility();showToast(`Message saved for ${selectedPatient.name}`)}
  if(event.target.id==='profileForm'){closeUtility();showToast('Profile preferences saved')}
});
document.getElementById('utilityBody').addEventListener('click',event=>{if(event.target.id==='resetFilters'){adherenceThreshold=0;sortMode='name';activeFilter='all';document.querySelectorAll('[data-filter]').forEach(b=>b.classList.toggle('active',b.dataset.filter==='all'));renderPatients();closeUtility();showToast('Filters reset')}if(event.target.id==='markRead'){document.querySelector('.notification-dot').hidden=true;closeUtility();showToast('Notifications marked as read')}});

document.getElementById('menuButton').addEventListener('click',()=>document.getElementById('sidebar').classList.toggle('open'));
document.getElementById('addPatientButton').addEventListener('click',openAddPatient);document.getElementById('filterButton').addEventListener('click',openFilter);document.getElementById('notificationButton').addEventListener('click',openNotifications);document.getElementById('profileMenu').addEventListener('click',openProfile);document.getElementById('avatarButton').addEventListener('click',openProfile);document.getElementById('helpButton').addEventListener('click',openHelp);document.getElementById('messageButton').addEventListener('click',openMessage);
document.getElementById('rangeButton').addEventListener('click',event=>{event.currentTarget.textContent=event.currentTarget.textContent.includes('30')?'Last 90 days⌄':'Last 30 days⌄';showToast('Patient report range updated')});
document.getElementById('analyticsRange').addEventListener('click',event=>{const ninety=event.currentTarget.textContent.includes('30');event.currentTarget.textContent=ninety?'Last 90 days⌄':'Last 30 days⌄';document.querySelectorAll('.bar-chart>span').forEach((bar,index)=>bar.style.height=`${(ninety?38:44)+index*(ninety?7:8)}%`);showToast('Clinic analytics range updated')});

function populatePatientSelect(){document.getElementById('assignmentPatientSelect').innerHTML=patients.map(patient=>`<option value="${patient.id}">${patient.name}</option>`).join('')}
document.getElementById('exerciseSelect').innerHTML=exerciseLibrary.map(name=>`<option>${name}</option>`).join('');document.getElementById('exerciseSelect').addEventListener('change',updateExercisePreview);updateExercisePreview();populatePatientSelect();renderPatients();renderAssignments();renderPlan();
