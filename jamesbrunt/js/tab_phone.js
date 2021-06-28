$(function(){
	$('.tab_label').click(function(){
		$('.is-active').removeClass('is-active');
		$(this).addClass('is-active');
		$('.is-show').removeClass('is-show');
        // クリックしたタブからインデックス番号を取得
		const index = $(this).index();
        // クリックしたタブと同じインデックス番号をもつコンテンツを表示
		$('.tab_panel').eq(index).addClass('is-show');
	});
    
//    $(this).find('.contents').fadeIn(400).animate({
//      'top': '70px'
//    },{
//      duration: 500,
//      queue: false //←★ココがqueue
//    });
    
//    $('.tab_label').animate({
//         fadeIn: 0
//    }, 20000); //0.5秒かけてトップへ移動
//      return false;
  
});
