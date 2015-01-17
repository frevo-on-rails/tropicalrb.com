//= require jquery

//= require vendors/bootstrap

//= require_tree .

$(document).ready( function() {

  $('.navbar-toggle').bind('click', function() {
    if( !$('.navbar-collapse').hasClass('in') ) {
      $('.navbar-brand').fadeIn(200);
    } else {
      $('.navbar-brand').fadeOut(300);
    }
  });

});
