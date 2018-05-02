console.log('Hit and run!')

$('.player, .player-profile__close').click(function(){
	console.log('click')
	$('.player-profile').toggleClass('visible');

});
$('.burger').click(function(){
	console.log('toggle');
	$(this).toggleClass('active');
	$('.menu').toggleClass('active');

});
$("ul.tabs__caption").on("click", "li:not(.active)", function() {
  $(this)
    .addClass("active")
    .siblings()
    .removeClass("active")
    .closest("div.tabs")
    .find("div.tabs__content")
    .removeClass("active")
    .eq($(this).index())
    .addClass("active");
});