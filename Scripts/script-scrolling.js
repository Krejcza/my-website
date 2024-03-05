//MOBILE NAVIGATION//

window.onload = function(){
   
const menu_btn = document.querySelector('.hamburger')
const mobile_menu = document.querySelector('.mobile-nav')
const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

menu_btn.addEventListener('click', function(){
   menu_btn.classList.toggle('is-active')
   mobile_menu.classList.toggle('is-active')
   document.body.classList.toggle('no-scroll')
   })

   mobileNavLinks.forEach(link => {
      link.addEventListener('click', function() {
          
          mobile_menu.classList.remove('is-active')
          document.body.classList.remove('no-scroll')
          menu_btn.classList.remove('is-active')
      });
  })

}

// SCROLL TO TOP//



const toTop = document.querySelector('.scroll-to-top-style')

window.addEventListener('scroll', function(){
    if(window.scrollY>window.innerHeight * 1.5){
        toTop.classList.add('active-to-top')
    } else{
        toTop.classList.remove("active-to-top")
    }
})




