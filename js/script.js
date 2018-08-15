
$(document).ready(function(){
  $('.sl').slick({
    // autoplay: true,    
    autoplaySpeed: 1000,    
    dots: true,
    responsive: [
    {
      breakpoint: 1140,
      settings: {
        arrows: false,        
        slidesToShow: 1
      }
    }
    ]
})
  });

