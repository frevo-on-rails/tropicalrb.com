//= require jquery

//= require vendors/bootstrap

//= require_tree .

$(document).ready( function() {

  $('.navbar-toggle').bind('click', function() {
    if( !$('.navbar-collapse').hasClass('in') ) {
      $('.navbar-brand').addClass('active');
    } else {
      $('.navbar-brand').removeClass('active');
    }
  });

});

document.addEventListener("touchstart", function() {},false);
