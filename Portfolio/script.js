$(document).ready(function () {
  // Cache frequently used selectors
  var $navbar = $(".navbar");
  var $scrollUpBtn = $(".scroll-up-btn");
  var $html = $("html");

  // Sticky navbar on scroll script
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $navbar.addClass("sticky");
    } else {
      $navbar.removeClass("sticky");
    }

    // Scroll-up button show/hide script
    if (this.scrollY > 500) {
      $scrollUpBtn.addClass("show");
    } else {
      $scrollUpBtn.removeClass("show");
    }
  });

  // Slide-up script
  $scrollUpBtn.click(function () {
    $html.animate({ scrollTop: 0 });
    // Removing smooth scroll on slide-up button click
    $html.css("scrollBehavior", "auto");
  });

  // Applying smooth scroll on menu items click
  $(".navbar .menu li a").click(function () {
    $html.css("scrollBehavior", "smooth");
  });

  // Toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("show");
    $(".menu-btn i").toggleClass("show");
  });

  // Typing text animation script
  var typedOptions = {
    strings: ["Developer", "Freelancer", "Student IT ENGINEERING"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  };

  new Typed(".typing", typedOptions);
  new Typed(".typing-2", typedOptions);

  // Owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: false,
    autoplay: false,
    autoplayTimeOut: 2000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
