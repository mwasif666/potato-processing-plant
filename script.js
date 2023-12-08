$(document).ready(function () {
  $(".navigation-list").clone().appendTo(".mobile-menu-body");

  $(".hamburger").on("click", function () {
    $(".mobile-menu").toggleClass("mobile-view");
  });

  $("#menu-close").on("click", function () {
    $(".mobile-menu").removeClass("mobile-view");
    $(".nav-item.dropdown").removeClass("open");
    $(".dropdown-menu").slideUp(200);
    $(".mobile-menu .nav-item.dropdown > a i")
      .removeClass("fa-angle-down")
      .addClass("fa-angle-right");
  });

  $(".mobile-menu .nav-item.dropdown > a").append(
    '<i class="fa fa-angle-right"></i>'
  );

  $(".mobile-menu .nav-item.dropdown > a").click(function (e) {
    e.preventDefault();
    const parent = $(this).parent(".nav-item.dropdown");
    const dropdownMenu = parent.find(".dropdown-menu");
    const icon = $(this).find("i");

    if (!parent.hasClass("open")) {
      $(".nav-item.dropdown.open > .dropdown-menu").slideUp(200);
      $(".nav-item.dropdown.open").removeClass("open");
      $(".mobile-menu .nav-item.dropdown > a i")
        .removeClass("fa-angle-down")
        .addClass("fa-angle-right");

      parent.addClass("open");
      dropdownMenu.slideDown(200);
      icon.removeClass("fa-angle-right").addClass("fa-angle-down");
    } else {
      parent.removeClass("open");
      dropdownMenu.slideUp(200);
      icon.removeClass("fa-angle-down").addClass("fa-angle-right");
    }
  });
});
