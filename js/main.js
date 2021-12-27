$(function () {
  $(".popup__link").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false,
  });
  $(".gallery__slider").slick({
    prevArrow:
      '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-left.svg"></button>',
    nextArrow:
      '<button type="button" class="slick-btn slick-next"><img src="images/arrow-right.svg"></button>',
  });
  $(".gallery__slider-mobile").slick({
    prevArrow:
      '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-left.svg"></button>',
    nextArrow:
      '<button type="button" class="slick-btn slick-next"><img src="images/arrow-right.svg"></button>',
  });
  $(".gallery__item-inner").magnificPopup({
    delegate: "a",
    type: "image",
    tLoading: "Loading image #%curr%...",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
    },
  });
  $(".menu__btn").on("click", function () {
    $(".menu__list").toggleClass("menu__list--active");
  });
  $("#direction").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 700);
  });
});

// function cot() {
//   var star = 1;
//   var count = 1;
//   while (count <= 100) {
//     console.log(star);
//     star = star + 1;
//     count++;
//     if (star % 3 == 0 && star % 5 == 0) {
//       console.log("FizzBuzz");
//     }
//   }
// }
// cot();

// function cot2() {
//   var fence = "#";
//   var space = " ";
//   fSpace = fence + space;
//   sFence = space + fence;
//   var row = "";
//   var countr = 0;
//   while (countr <= 7) {
//     console.log(row);
//     row = fSpace.repeat(4) + "\n" + sFence.repeat(4);
//     countr = countr + 1;
//   }
// }
// cot2();

// function cot3() {
//   var star = "#";
//   var count = 0;
//   while (count <= 6) {
//     console.log(star);
//     star = star + "#";
//     count++;
//   }
// }
// cot3();

// function isEven(n) {
//   if (0 % 2 == 0) {
//     return true;
//   }
//   if (1 % 2 !== 0) {
//     return false;
//   }
//   if ((n % 2 == (n - 2) % 2) == 0) return true;
// }
// console.log(isEven(53));

// function isEven(n) {
//   if (n == 0) return true;
//   else if (n == 1) return false;
//   else if (n < 0) return isEven(-n);
//   else return isEven(n - 2);
// }
// console.log(isEven(-1));

// function inf(v) {
//   if (s + 5 == v) {
//     return s;
//   }
//   if (s * 3 == v) {
//     return s;
//   }
// }
// console.log(inf(10));

// function triangle() {
//   let fences = "#";
//   let tri;
//   for (count = 0; count < 7; count++) {
//     tri = fences + fences;
//     console.log(tri());
//   }

// }
// triangle();

// function jeremy(){
//   let var1 = 0 % 0 == 0;
//   let var2 = 1 % 2 !== 0;
//   let var3 = (n == (n % 2 == 0));

// }
// jeremy();
// function isEven(p) {
//   if (p % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isEven(6));

// function jeremy(n, v) {
//   if (v < n) {
//     return v;
//   } else {
//     return n;
//   }

// }
// jeremy(5, 8);
// console.log(jeremy(5, 8));

// function countBs(stroks){

//   if (stroks.charAt(а)){
//     console.log(stroks.charAt(3));
//   }
// }
var drawCats = function (howManyTimes) {
  for (var i = 0; i < howManyTimes; i++)(
  console.log(i + '"=^_^="')
  )
};
drawCats(10);
