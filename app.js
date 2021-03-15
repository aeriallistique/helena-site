const elements = {
    about: document.querySelector('.about_link'),
    wte: document.querySelector('.what_to_expect_link'),
    coaches: document.querySelector('.coaches_link'),
    faq: document.querySelector('.faq_link')
}

window.addEventListener('load', ()=>{
    let width = window.innerWidth;
        if(width > 600){
            elements.about.classList.add('spinning-animation');
            setTimeout(()=>{elements.about.classList.remove('spinning-animation')}, 1100);
            setTimeout(()=>{elements.wte.classList.add('spinning-animation')},1100);
            setTimeout(()=>{elements.wte.classList.remove('spinning-animation')},2100);
            setTimeout(()=>{elements.faq.classList.add('spinning-animation')},2100);
            setTimeout(()=>{elements.faq.classList.remove('spinning-animation')},3000);
            setTimeout(()=>{elements.coaches.classList.add('spinning-animation')},3000);
            setTimeout(()=>{elements.coaches.classList.remove('spinning-animation')},4000)
}
        if(width <= 600){
            elements.about.classList.add('spinning-animation');
            setTimeout(()=>{elements.about.classList.remove('spinning-animation')}, 1100);
            setTimeout(()=>{elements.wte.classList.add('spinning-animation')},1000);
            setTimeout(()=>{elements.wte.classList.remove('spinning-animation')},1500);
            setTimeout(()=>{elements.coaches.classList.add('spinning-animation')},1500);
            setTimeout(()=>{elements.coaches.classList.remove('spinning-animation')},2500);
            setTimeout(()=>{elements.faq.classList.add('spinning-animation')},2500);
            setTimeout(()=>{elements.faq.classList.remove('spinning-animation')},3500);
}
    
})
window.onbeforeunload = ()=> {
    window.scrollTo(0, 0);
  }
  

  if (window.innerWidth <= 768) {
      document.addEventListener('scroll', ()=>{
          document.body.style.backgroundPosition = `0 + ${document.scrollTop()}px`;
          alert(`nothing happened`)
      })
    //$(document).scroll(function() {
      //  $('#background').css('background-position', '0px ' + $(document).scrollTop() + 'px');
    //});
}