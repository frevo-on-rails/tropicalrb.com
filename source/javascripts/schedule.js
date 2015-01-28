$('.schedule-events .expander').click(function(e) {
  e.preventDefault();

  var $this = $(this),
    $event = $this.parents('.event'),
    currentLabel = $this.text(),
    alternativeLabel = $this.data('alternative-label');

  $event.toggleClass('expanded');
  $event.find('.last-words').toggle();

  $this.text(alternativeLabel);
  $this.data('alternative-label', currentLabel);
});
