$(function(){

// background image--------
$("[data-background]").each(function (){
  $(this).css("background-image","url(" + $(this).attr("data-background") + ")")
})


//sticky menu============
var wind = $(window)
var sticky = $("#header-sticky");
wind.on('scroll', function () {
   var scroll = $(wind).scrollTop();
   if (scroll < 100) {
	 sticky.removeClass("sticky-menu");
   } else {
	 $("#header-sticky").addClass("sticky-menu");
   }
}); 


//scroll top function------
$(window).on('scroll', function() {
  var windowscroll = $(window).scrollTop();
  if (windowscroll > 350) {
      $('.top').fadeIn(650);
  } else {
      $('.top').fadeOut(650);
  }
});
$('.top').on('click', function() {

  $('html,body').animate({
      scrollTop: 0,
  }, 400);
});






});




