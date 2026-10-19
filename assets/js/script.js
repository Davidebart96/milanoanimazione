document.addEventListener('DOMContentLoaded',()=>{
 const toggle=document.querySelector('.menu-toggle');
 const nav=document.querySelector('.mobile-nav');
 if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));}
 const form=document.querySelector('.form');
 if(form) form.addEventListener('submit',e=>{if(form.action.endsWith('#')){e.preventDefault();alert('Il modulo è pronto per essere collegato al sistema di invio richieste.');}});
});
