/* Robert Francis Flor, own script. Written fresh, not the demo's. */
(function ($) {
  "use strict";

  $(window).on("load", function () {
    $(".loader").fadeOut(500);
    $(".side_menu").removeClass("opacity-0");
    if ($(window).width() > 767) {
      $(".side_nav").addClass("expand_nav");
      $(".body_wrapper").addClass("shrink_body");
    }
  });

  // desktop side nav toggle
  $(document).on("click", "#rf_tog", function () {
    var open = $(".side_nav").hasClass("expand_nav");
    $(".side_nav").toggleClass("expand_nav", !open);
    $(".body_wrapper").toggleClass("shrink_body", !open);
    $(this).attr("aria-expanded", String(!open));
  });

  // mobile off canvas nav
  $(document).on("click", ".my_nav_tog", function () {
    $(".broad").addClass("broad-nav").css({ opacity: "1" });
    $("body").addClass("show-modal");
  });
  function closeBroad() {
    $(".broad").css({ opacity: "0" });
    $("body").removeClass("show-modal");
    setTimeout(function () { $(".broad").removeClass("broad-nav"); }, 120);
  }
  $(document).on("click", ".btn-close, .broad ul li a", closeBroad);

  // smooth scroll for in page links
  $(document).on("click", 'a.slide[href^="#"]', function (e) {
    var t = $(this.getAttribute("href"));
    if (!t.length) { return; }
    e.preventDefault();
    $("html,body").animate({ scrollTop: t.offset().top }, 700);
  });

  // mobile sticky header
  $(window).on("scroll", function () {
    var s = $(this).scrollTop();
    if ($(window).width() <= 767 && s > 300) { $("#home").addClass("fixed-top fix-top"); }
    else { $("#home").removeClass("fixed-top fix-top"); }
    $(".go-top").toggleClass("active", s > 600);
  });
  $(document).on("click", ".go-top", function () {
    $("html, body").animate({ scrollTop: 0 }, 450);
  });

  // works carousel
  if ($.fn.owlCarousel) {
    var owl = $(".projects").owlCarousel({
      loop: true, margin: 0, nav: false, dots: false,
      autoplay: true, autoplayTimeout: 9000, autoplayHoverPause: true,
      responsive: { 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 1 } }
    });
    $(".customNextBtn").on("click", function () { owl.trigger("next.owl.carousel"); });
    $(".customPrevBtn").on("click", function () { owl.trigger("prev.owl.carousel", [300]); });
  }

  // scroll in animations
  if (window.WOW && $(window).width() >= 780) {
    new window.WOW({ live: false }).init();
  } else {
    $(".wow").removeClass("wow").css({ visibility: "visible" });
  }

  // current year
  $("#rf-year, .rf-nav-year").text(new Date().getFullYear());
})(jQuery);
