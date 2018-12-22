$(document).ready(function(){

var width = $(window).width();
console.log(width);
if(width>1100){
$('.gal_wrapper').magnificPopup({
    type: 'image',
    gallery :{
        enabled: true
    },
    removalDelay: 300,
     // Class that is added to popup wrapper and background
  // make it unique to apply your CSS animations just to this exact popup
  mainClass: 'mfp-fade'
  });
  
}else if(width<1100){
    var audio = document.querySelector('audio');
    audio.autoplay=false;
    audio.style.display='none';
    $('.gal_wrapper').magnificPopup({
        type: 'image'    
});
}
});
