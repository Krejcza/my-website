const smallNavItems = document.querySelectorAll('.small-nav .one-piece-of-nav');

smallNavItems.forEach(item => {
   const labelOfNav = item.querySelector('.label-of-nav');
   item.addEventListener('click', function(e){
      this.classList.toggle('active');
      labelOfNav.classList.toggle('openedList');
   });
});

