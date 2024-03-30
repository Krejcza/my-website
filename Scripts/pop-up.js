window.addEventListener('load', function(e){
   setTimeout(function open(e){
       document.querySelector('.pop-up-event').style.display = 'block';
       document.getElementById('overlay').style.display = 'block'; 
   }, 5000);
});

document.querySelector('#close-pop').addEventListener('click', function(e){
   document.querySelector('.pop-up-event').style.display = 'none';
   document.getElementById('overlay').style.display = 'none'; 
});

document.getElementById('overlay').addEventListener('click', function(e){
   document.querySelector('.pop-up-event').style.display = 'none';
   this.style.display = 'none'; 
});