console.log('Hit and run!')

$('.player, .player-profile__close').click(function(){
	console.log('click')
	$('.player-profile').toggleClass('visible');

});

$('.tab').click(function(){
	$('.tab').removeClass('active');
	$(this).toggleClass('active');
})