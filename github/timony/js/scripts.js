

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
  })



  $('.navbar-toggle').on('click', function() {
   $('.after-nav').css('margin-top','200px');
 });

  $(".navbar-toggle").on("click", function () {
      $(this).toggleClass("active");
  });


  //set a waypoint for all the page parts on the page
  var animate1 = $('.animate1').waypoint(function(direction) {
    //check the direction
    if(direction == 'down') {
      //add the class to start the animation
      $(this.element).addClass('fadeInDown', 'show1');
      //then destroy this waypoint, we don't need it anymore
      this.destroy();
    }
  }, {
    //Set the offset
    offset: '70%'
  });


  var animate4 = $('.animate4').waypoint(function(direction) {
    //check the direction
    if(direction == 'down') {
      //add the class to start the animation
      $(this.element).addClass('fadeInDown','show4');
      //then destroy this waypoint, we don't need it anymore
      this.destroy();
    }
  }, {
    //Set the offset
    offset: '50%'
  });



  var animate7 = $('.animate7').waypoint(function(direction) {
    //check the direction
    if(direction == 'down') {
      //add the class to start the animation
      $(this.element).addClass('fadeIn','show7');
      //then destroy this waypoint, we don't need it anymore
      this.destroy();
    }
  }, {
    //Set the offset
    offset: '90%'
  });



//   $('#contact-form').bootstrapValidator({
// //        live: 'disabled',
//         message: 'This value is not valid',
//         feedbackIcons: {
//             valid: 'glyphicon glyphicon-ok',
//             invalid: 'glyphicon glyphicon-remove',
//             validating: 'glyphicon glyphicon-refresh'
//         },
//         fields: {
//             Name: {
//                 validators: {
//                     notEmpty: {
//                         message: 'The Name is required and cannot be empty'
//                     }
//                 }
//             },
//             email: {
//                 validators: {
//                     notEmpty: {
//                         message: 'The email address is required'
//                     },
//                     emailAddress: {
//                         message: 'The email address is not valid'
//                     }
//                 }
//             },
//             Message: {
//                 validators: {
//                     notEmpty: {
//                         message: 'The Message is required and cannot be empty'
//                     }
//                 }
//             }
//         }
//     });
});


//   var animate1 = $('.animate1');
//
//   $('.animate1').waypoint(function () {
//     $('.animate1').addClass('fadeInDown', 'show1')
//   },{offset: '50%'});
//
// var animate2 = $('.animate2');
//
// $('.animate2').waypoint(function () {
//   $('.animate2').addClass('fadeInDown', 'show2')
// },{offset: '50%'});
//
// var animate3 = $('.animate3');
//
// $('.animate3').waypoint(function () {
// $('.animate3').addClass('fadeInDown', 'show3')
// },{offset: '50%'});

// });
