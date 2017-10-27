

jQuery(document).ready(function () {
  jQuery('#timony-home').slippry({
    slippryWrapper: '<div class="sy-box pictures-slider"/>',
    adaptiveHeight: false,
    captions: false,
    pager: false,
    // controls
    controls: false,
    autoHover: false,

    // transitions
    transition: 'horizontal', // fade, horizontal, kenburns, false
    kenZoom: 140,
    speed: 20, // time the transition takes (ms)
  });
