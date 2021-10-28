$(function() {
	var headNav = $("header");
	//scrollだけだと読み込み時困るのでloadも追加
	$(window).on('load scroll', function () {
		//現在の位置が500px以上かつ、クラスfixedが付与されていない時
		if($(this).scrollTop() > 500 && headNav.hasClass('fixed') == false) {
			//headerの高さ分上に設定
			headNav.css({"top": '-100px'});
			//クラスfixedを付与
			headNav.addClass('fixed');
			//位置を0に設定し、アニメーションのスピードを指定
			headNav.animate({"top": 0},600);
		}
		//現在の位置が300px以下かつ、クラスfixedが付与されている時にfixedを外す
		else if($(this).scrollTop() < 300 && headNav.hasClass('fixed') == true) {
			headNav.removeClass('fixed') ;
		}
	});

  // $("header").hide()
  // $("header").toggle()
  
  // slickでのスライダー01
  $('.slider01').slick({
    dots:true,
    arrows:true,
  });

 // slickでのスライダー02
  $('.slider02').slick({
    arrows:true,
    centerMode: true,
    // centerPadding: '25%',
  });

  /*Dropdown Menu*/
$('.dropdown').click(function () {
  $(this).attr('tabindex', 1).focus();
  $(this).toggleClass('active');
  $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
  $(this).removeClass('active');
  $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function () {
  $(this).parents('.dropdown').find('span').text($(this).text());
  $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});
/*End Dropdown Menu*/


$('.dropdown-menu li').click(function () {
var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
msg = '<span class="msg">Hidden input value: ';
$('.msg').html(msg + input + '</span>');
}); 

});

