$(document).ready(function(){

  $(".navbar-toggler").on("click", function(){
    $("#navbar-main").toggleClass("bg-light");
    $("#navbar-main").toggleClass("float-up");
    $(".navbar-brand").toggleClass("invible");
  });

  $(".nav-link").on("click", function () {
    $(".navbar-toggler").click();
    var target = $(this).attr('data-target');
    $(".content").removeClass("show");
    $(target).addClass("show");
  });

  $(".btn-int-link").on("click", function () {
    var target = $(this).attr('data-target');
    $(".content").removeClass("show");
    $(target).addClass("show");
  });

  $(".btn-show").on("click", function(){
    var target = $(this).attr('data-target');
    $(this).addClass("hide");
    $(target).addClass("show-flex");
  });


});
