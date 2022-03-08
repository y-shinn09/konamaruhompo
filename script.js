//アコーディオンメニュー
$(function () {
    $('.menu__link').on('click', function () {
        var index = $('.menu__link').index(this);
    $('.menu__ex2').eq(index).slideToggle();
    $('.menu__link').toggleClass('active');
  });
});

var lastInnerWidth = document.documentElement.clientWidth; //window.innerWidthで現在の画面幅を取得
var nav = document.getElementById("nav");
if (lastInnerWidth <= 480) {
  // 画面幅480px以下の場合
  nav.classList.add("hamburger"); // クラス「hamburger」を追加
}
// 横幅が変わったとき実行される関数
window.addEventListener("resize", function () {
  // 現在と前回の横幅が違う場合だけ実行
  if (lastInnerWidth != document.documentElement.clientWidth) {
    // 横幅を記録しておく
    lastInnerWidth = document.documentElement.clientWidth;
    if (lastInnerWidth <= 480) {
      // 画面幅480px以下の場合
      if (!nav.classList.contains("hamburger")) {
        //クラス「hamburger」がない場合
        nav.classList.add("hamburger"); // クラス「hamburger」を追加
      }
    } else {
      // 画面幅481px以上の場合
      nav.classList.remove("hamburger"); //クラス「hamburger」を削除
    }
  }
});

//ハンバーガーメニューボタンをクリックしたときに実行される関数
document
  .getElementById("hamburger__btn")
  .addEventListener("click", function () {
    //ナビ一覧とモーダルを表示
    nav.style.display = "block";
    document.getElementById("hamburger__modal").style.display = "block";
  });
//ハンバーガーメニューが表示されてるときに、モーダルがクリックされると実行される関数
document
  .getElementById("hamburger__modal")
  .addEventListener("click", function () {
    //ナビ一覧とモーダルを非表示
    nav.style.display = "none";
    document.getElementById("hamburger__modal").style.display = "none";
  });

//ハンバーガーメニューが表示されてるときに、メニューをクリックした時に実行される関数
var item = document.getElementsByClassName("nav__item");
for (let i = 0; i < 5; i++) {
  if (lastInnerWidth <= 480) {
    item[i].addEventListener("click", function () {
      //ナビ一覧とモーダルを非表示
      nav.style.display = "none";
    });
  }
}
