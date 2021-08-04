$(document).ready(function () {
  let panelLeft = 1;
  let panelRight = 2;
  let currentSlide;
  let nav;
  $(".slideShow__list-navigation>.dot").click(function () {
    if ($(this).attr("dot") > panelRight) {
      currentSlide = $(this).attr("dot") - 1;
      panelRight = $(this).attr("dot");
      panelLeft = panelRight - 1;
    } else {
      currentSlide = $(this).attr("dot");
      panelLeft = $(this).attr("dot");
      panelRight = panelLeft + 1;
    }

    nav = "1s panel" + currentSlide + " forwards";
    $(".slideShow__list-navigation>.panel").css("animation", nav);
    nav = "1s slide" + currentSlide + " forwards";
    $(".slideShow__list").css("animation", nav);
    setTimeout(() => {
      if (currentSlide == 1) {
        $(".slideShow__list").css("transform", "translate(0, 0)");
        $(".slideShow__list-navigation>.panel").css(
          "transform",
          "translate(-1.2rem, 0)"
        );
      }
      if (currentSlide == 2) {
        $(".slideShow__list").css("transform", "translate(-144rem, 0)");
        $(".slideShow__list-navigation>.panel").css(
          "transform",
          " translate(0, 0)"
        );
      }
      if (currentSlide == 3) {
        $(".slideShow__list").css("transform", "translate(-288rem, 0)");
        $(".slideShow__list-navigation>.panel").css(
          "transform",
          "translate(1.2rem, 0)"
        );
      }
    }, 1000);
  });
});
