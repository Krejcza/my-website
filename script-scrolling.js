window.onload = function(){
   
const menu_btn = document.querySelector('.hamburger')
const mobile_menu = document.querySelector('.mobile-nav')
const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

menu_btn.addEventListener('click', function(){
   menu_btn.classList.toggle('is-active')
   mobile_menu.classList.toggle('is-active')
   })

   mobileNavLinks.forEach(link => {
      link.addEventListener('click', function() {
          
          mobile_menu.classList.remove('is-active');
      });
  })

}





