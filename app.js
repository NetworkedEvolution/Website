// SCROLL ICON PERCENTAGE
window.onscroll = function () {
  myFunction()
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

if ($(window).width() < 860) {
  window.onscroll = function () {
    myFunction2()
  };
  
  function myFunction2() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("mobileBar").style.width = scrolled + "%";
  }
}



// FADES OUT SCROLL ICON
var myElement = $('#scroll-icon');

$(window).on('scroll', function () {
  var st = $(this).scrollTop();
  myElement.css({
    'opacity': 1 - st / 500
  });
});

// FADES IN ENTIRE APP
$(document).ready(function () {
  $('body').fadeIn(1500);
});



// MENU CONTROLS --------------------------------------------------

let heightFromTop = 100;

$(document).ready(function () {
  $('#mobile-button').on('click', function () {
    $('#mobile-nav').fadeToggle(500);
  });
});


$("#scroll-icon").click(function () {
  $('html, body').animate({
    scrollTop: $("#bio").offset().top - heightFromTop
  }, 500);
});


$("#home-button , #home-button-mobile").click(function () {
  $('html, body').animate({
    scrollTop: '0px'
  }, 300);
});

$("#bio-button , #bio-button-mobile").click(function (e) {
  $('html, body').animate({
    scrollTop: $("#bio").offset().top - heightFromTop
  }, 500);
});

$("#apps-button , #apps-button-mobile").click(function () {
  $('html, body').animate({
    scrollTop: $("#apps").offset().top - heightFromTop
  }, 500);
});

$("#about-button , #about-button-mobile").click(function () {
  $('html, body').animate({
    scrollTop: $("#about").offset().top - heightFromTop
  }, 500);
});


// END MENU CONTROLS -------------------------------------------------



$("#home-button-mobile , #bio-button-mobile , #apps-button-mobile , #about-button-mobile").click(function () {
  $('#mobile-nav').fadeOut();
});

// MENU FADE CONTROLS --------------------------------------------------


$(".weather-card").click(function () {
  window.location.href = "http://weather.networkedevolution.com";
});

$(".lyrics-card").click(function () {
  window.location.href = "http://lyrics.networkedevolution.com";
});








// NEON SIGN JQUERY CALL

$('.neon').novacancy({
  'reblinkProbability': (1/3),
  'blinkMin': 0.01,
  'blinkMax': 0.5,
  'loopMin': 0.5,
  'loopMax': 2,
  'color': 'yellow',
  'glow': ['0 0 80px Orange', '0 0 10px white', '0 0 6px red'],
  'off': 1, // amount of off chars
  'blink': 8, // amount of blink chars
  'classOn': 'on',
  'classOff': 'off',
  'element': 'data', // split content by elemen
  'autoOn': true,

});
$('.neon').novacancy({
      'color': 'red'
    });




    // SCROLL REVEAL PLUGIN

    ScrollReveal().reveal('.reveal' , { 
      
        delay: 200,
        distance: '500px',
        duration: 800,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        interval: 0,
        opacity: 0,
        origin: 'bottom',
        rotate: {
            x: 60,
            y: 90,
            z: 0,
        },
        scale: 1,
        cleanup: false,
        container: document.documentElement,
        desktop: true,
        mobile: true,
        reset: true,
        useDelay: 'always',
        viewFactor: 0.0,
        viewOffset: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        },
       
    }
    );


    ScrollReveal().reveal('.reveal2' , { 
      
      delay: 300,
      distance: '500px',
      duration: 800,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      interval: 0,
      opacity: 0,
      origin: 'bottom',
      rotate: {
          x: 60,
          y: 90,
          z: 0,
      },
      scale: 1,
      cleanup: false,
      container: document.documentElement,
      desktop: true,
      mobile: true,
      reset: true,
      useDelay: 'always',
      viewFactor: 0.0,
      viewOffset: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
      },
     
  }
  );



  ScrollReveal().reveal('.reveal3' , { 
      
    delay: 400,
    distance: '500px',
    duration: 800,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    interval: 0,
    opacity: 0,
    origin: 'bottom',
    rotate: {
        x: 60,
        y: 90,
        z: 0,
    },
    scale: 1,
    cleanup: false,
    container: document.documentElement,
    desktop: true,
    mobile: true,
    reset: true,
    useDelay: 'always',
    viewFactor: 0.0,
    viewOffset: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    },
   
}
);



ScrollReveal().reveal('.reveal4' , { 
      
  delay: 500,
  distance: '500px',
  duration: 800,
  easing: 'cubic-bezier(0.5, 0, 0, 1)',
  interval: 0,
  opacity: 0,
  origin: 'bottom',
  rotate: {
      x: 60,
      y: 90,
      z: 0,
  },
  scale: 1,
  cleanup: false,
  container: document.documentElement,
  desktop: true,
  mobile: true,
  reset: true,
  useDelay: 'always',
  viewFactor: 0.0,
  viewOffset: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
  },
 
}
);


