$(".menu").click(function() {
  $(".nav").slideDown();
  $(".letter-x").fadeToggle();
  $(".menu").fadeToggle();
});

$(".letter-x").click(function(){
  $(".nav").slideUp();
  $(".letter-x").fadeToggle();
  $(".menu").fadeToggle();
});

$("#about").waypoint(function() {
  $(".menu").css("color", "black");
});

$("#small-white").waypoint(function() {
  $(".menu").css("color", "white");
});