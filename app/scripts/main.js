$(document).ready(() => {
  $('.slider[data-name="home-main-slider"]').owlCarousel({
    items: 1,
    nav: true,
    navContainer: '.navigations[data-name="home-main-slider"]',
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ]
  });
  $('.slider[data-name="footer"]').owlCarousel({
    items: 4,
    nav: true,
    navContainer: '.navs[data-name="footer"]',
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ]
  });
});
