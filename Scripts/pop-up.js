window.addEventListener('load', function(e){
   let lastPopupDisplay = localStorage.getItem('lastPopupDisplay');
   let oneWeek = 7 * 24 * 60 * 60 * 1000; // jeden týden v milisekundách

   if (!lastPopupDisplay || (Date.now() - lastPopupDisplay) > oneWeek) {
       setTimeout(function() {
           document.querySelector('.pop-up-event').style.display = 'block';
           document.getElementById('overlay').style.display = 'block';
           localStorage.setItem('lastPopupDisplay', Date.now());
       }, 5000);
   }
});

document.querySelector('#close-pop').addEventListener('click', function(e){
   document.querySelector('.pop-up-event').style.display = 'none';
   document.getElementById('overlay').style.display = 'none'; 
});

document.getElementById('overlay').addEventListener('click', function(e){
   document.querySelector('.pop-up-event').style.display = 'none';
   this.style.display = 'none'; 
});