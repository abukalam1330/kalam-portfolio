document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('section').forEach((x,i)=>{
    x.style.opacity=0;x.style.transform='translateY(10px)';x.style.transition='opacity .45s ease,transform .45s ease';
    setTimeout(()=>{x.style.opacity=1;x.style.transform='translateY(0)'},60*i+80)
  });
});
function showWhatsAppHelp(){alert('WhatsApp is ready to be connected. Replace the WhatsApp link in index.html with your number in international format (example: 8801XXXXXXXXX).');}
