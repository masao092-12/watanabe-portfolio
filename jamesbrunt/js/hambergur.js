$(function () {
  var $body = $('body');

  //メニューボタンクリックでクラスを追加
  $('#btn-menu').on('click', function () {
    $body.toggleClass('open-menu');
  });

  //メニュー以外の部分をクリックで閉じる
  $('.col').on('click', function () {
    $body.removeClass('open-menu');
  });
  $('#sp-menu').on('click', function () {
    $body.removeClass('open-menu');
  });
});
