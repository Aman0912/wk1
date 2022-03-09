$(document).ready(function(){

  new WOW({
    "boxClass":"animated",
    "mobile":true,
  }).init()


$(".rest-list").owlCarousel({
"items":3,
"autoPlay":true,
"itemsTablet":[768,1],
"itemsMobile":[479,1],
"itemsDesktopSmall":[979,2],

});


$(".main-articles").owlCarousel({
"items":3,
"autoPlay":true,
"itemsTablet":[768,1],
"itemsMobile":[479,1],
"itemsDesktopSmall":[979,2],

});

});
