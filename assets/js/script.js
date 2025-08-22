$(document).ready(function () {
  var con = {
    init: function () {
      this.gnbAction();
    },
    gnbAction: function () {
      $(document).on("mouseenter", ".gnb-menu .depth01", function () {
        $(".depth02").stop().slideDown(300);
        $("header").addClass("on");
      });
      $(document).on("mouseleave", ".gnb-menu .depth01", function () {
        $(".depth02").stop().slideUp(0);
        $("header").removeClass("on");
      });
      $(document).on("mouseenter", ".gnb-menu .depth01 > li", function () {
        $(this).addClass("on");
      });
      $(document).on("mouseleave", ".gnb-menu .depth01  > li", function () {
        $(this).removeClass("on");
      });
      $(document).on("click", ".gnb-menu .more", function (e) {
        e.preventDefault();
        $(".depth02").css("height", "auto");
        $(".depth03").slideUp(300);
        $(this).parent().siblings().removeClass("on");
        $(this).parent().toggleClass("on");
        $(this).parent().find(".depth03").stop().slideToggle(300);
      });
    },
  };

  con.init();

  visualArr = ["For a Safer, Healthier World", "In Pursuit of Excellence"];
  var visSwiper = new Swiper(".visual .swiper", {
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: ".pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<span class="' + className + '">' + visualArr[index] + "</span>"
        );
      },
    },
  });

  $(".visual .controls .slide-btn").on("click", function () {
    if ($(this).hasClass("pause")) {
      $(this).removeClass("pause");
      $(this).addClass("play");
      visSwiper.autoplay.stop();
    } else if ($(this).hasClass("play")) {
      $(this).removeClass("play");
      $(this).addClass("pause");
      visSwiper.autoplay.start();
    }
  });

  producArr = [
    "Mycoplasma",
    "Host Cell DNA",
    "Replication Competent Virus",
    "PCR/qPCR/RT-PCR",
  ];
  var proSwiper = new Swiper(".product .swiper", {
    pagination: {
      el: ".product .slide-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<span class="' + className + '">' + producArr[index] + "</span>"
        );
      },
    },
  });
});
