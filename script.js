const data = ctkLoadData();
const $ = id => document.getElementById(id);
$('year').textContent = new Date().getFullYear();
$('siteTagline').textContent = data.settings.tagline;
$('followersStat').textContent = data.settings.followers;
$('followingStat').textContent = data.settings.following;
$('heroBadges').innerHTML = data.settings.heroBadges.map(x=>`<span>${x}</span>`).join('');
document.querySelectorAll('a[href*="wa.me/"]').forEach(a=>a.href=`https://wa.me/${data.settings.whatsappNumber}`);
const contactNumber=$('contactNumber'); if(contactNumber) contactNumber.textContent=data.settings.whatsapp;

$('serviceGrid').innerHTML = data.services.filter(s=>s.active).map(s=>`<article class="service-card"><div class="icon ${s.color}">${s.icon}</div><h3>${esc(s.title)}</h3><p>${esc(s.description)}</p><a href="#contact" class="service-link">Get a Quote →</a></article>`).join('');
$('platformMenu').innerHTML = '<button class="platform-tab active" data-platform="all"><span class="p-icon">✦</span> All Platforms</button>' + data.platforms.filter(p=>p.active).map(p=>`<button class="platform-tab" data-platform="${p.id}"><span class="p-icon">${p.icon}</span>${esc(p.name)}</button>`).join('');
$('platformServices').innerHTML = data.platforms.filter(p=>p.active).map(p=>`<article class="platform-service" data-platform-card="${p.id}"><div class="platform-service-top"><span class="platform-logo ${p.logoClass}">${p.icon}</span><div><h3>${esc(p.name)}</h3><small>${esc(p.subtitle)}</small></div></div><div class="service-pills">${p.services.map(x=>`<span>${esc(x)}</span>`).join('')}</div><a href="#contact" class="service-link">Order ${esc(p.name)} Service →</a></article>`).join('');

document.querySelectorAll('.platform-tab').forEach(tab=>tab.addEventListener('click',()=>{document.querySelectorAll('.platform-tab').forEach(t=>t.classList.remove('active'));tab.classList.add('active');const selected=tab.dataset.platform;document.querySelectorAll('[data-platform-card]').forEach(card=>card.classList.toggle('hidden',selected!=='all'&&card.dataset.platformCard!==selected));}));
$('copyBtn')?.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(data.settings.whatsapp);showToast('Number copied!')}catch(e){showToast(data.settings.whatsapp)}});
$('mobileMenu')?.addEventListener('click',()=>$('navLinks').classList.toggle('open'));
document.querySelectorAll('#navLinks a').forEach(a=>a.addEventListener('click',()=>$('navLinks').classList.remove('open')));
function showToast(msg){const t=$('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1800)}
function esc(s){return String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}
