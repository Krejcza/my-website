ScrollReveal({ 
   reset: false, 
   distance: '60px',
   duration:2500,
   delay:400
   });

ScrollReveal().reveal('.welcome-text h1', {delay: 100, origin:'left'});
ScrollReveal().reveal('.about-us-text', {delay:100, origin:'left', interval:100, distance:'250px'});
ScrollReveal().reveal('#title-blue-part1, #title-blue-part2, #title-blue-part3', {delay:100, origin:'left'});
ScrollReveal().reveal('.weather', {delay:100, origin:'bottom'});
ScrollReveal().reveal('.threed-model p', {delay:100, origin:'right',distance:'50px'});
ScrollReveal().reveal('.photo-of-airport p', {delay:100, origin:'left',distance:'50px'});
ScrollReveal().reveal('.photogallery-ind .card', {delay:100, origin:'left',distance:'500px', interval:200});
ScrollReveal().reveal('.details-area input, .message-area', {delay:50, origin:'bottom', distance:'50px', interval:100});
ScrollReveal().reveal('.social-media p', {delay:100, origin:'top', distance:'50px'});
ScrollReveal().reveal('.social-media a', {delay:100, origin:'top', distance:'50px'});
ScrollReveal().reveal('.subs-odometer', {delay:100, origin:'top',});

