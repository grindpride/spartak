console.log('wtf2');

$('#fullpage').fullpage({
		//Navigation
		menu: '#menu',
		lockAnchors: true,
		anchors:['field', 'translation'],
		navigation: false,
		navigationPosition: 'right',
		navigationTooltips: ['firstSlide', 'secondSlide'],
		showActiveTooltip: false,
		slidesNavigation: false,
		slidesNavPosition: 'bottom',

		//Scrolling
		css3: true,
		scrollingSpeed: 700,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 1000,
		scrollBar: false,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		loopBottom: false,
		loopTop: false,
		loopHorizontal: true,
		continuousVertical: false,
		continuousHorizontal: false,
		scrollHorizontally: false,
		interlockedSlides: false,
		dragAndMove: false,
		offsetSections: false,
		resetSliders: false,
		fadingEffect: false,
		normalScrollElements: '.section-intro',
		scrollOverflow: false,
		scrollOverflowReset: false,
		scrollOverflowOptions: null,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,
		bigSectionsDestination: null,

		//Accessibility
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,

		//Design
		controlArrows: true,
		verticalCentered: true,
		// sectionsColor : ['#ccc', '#fff'],
		// paddingTop: '87px',
		// paddingBottom: '30px',
		// fixedElements: '#header, .footer',
		responsiveWidth: 768,
		responsiveHeight: 0,
		responsiveSlides: false,
		parallax: false,
		parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

		//Custom selectors
		sectionSelector: '.section',
		slideSelector: '.slide',

		lazyLoading: true,

		//events
		onLeave: function(index, nextIndex, direction){
			if(nextIndex!=3){
                $('.aside-field').addClass('hidden');

			}else{
                $('.aside-field').removeClass('hidden');
			}


		},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
		afterResize: function(){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	});

// $.fn.fullpage.setMouseWheelScrolling(false);
// $.fn.fullpage.setAllowScrolling(false);

const ps1 = new PerfectScrollbar('#psEventLine', {
  wheelSpeed: 1,
  wheelPropagation: false,
  minScrollbarLength: 20
});

const ps2 = new PerfectScrollbar('#psTranslation', {
  wheelSpeed: 1,
  wheelPropagation: false,
  minScrollbarLength: 20
});


let menu = $('.menu__list');
let panels = $('.panel');
$('.player, .player-profile__close').click(function(){

	console.log('click')
	$('.player-profile').toggleClass('visible');

});

$(document).keyup(function(e) {
  if (e.keyCode === 27){
  	// console.log(e);

  	$('.player-profile.visible').removeClass('visible');
  }
});

$('.burger').click(function(){
	console.log('toggle');
	$(this).toggleClass('active');
	panels.toggleClass('hidden');
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


$('.content').on("click", ".content__title:not(.active)", function() {
  $(this)
    .addClass("active")
    .siblings()
    .removeClass("active");
    let hidden = $('.content__tab.hidden');
    let open = $('.content__tab:not(.hidden)')
    hidden.removeClass("hidden");
    open.addClass("hidden");
    
});


// $('.fotorama').on('fotorama:fullscreenexit', function() {
// 	console.log('fotorama:fullscreenexit');
// 	console.log($(this).data('fotorama'))
//     $(this).data('fotorama').setOptions({'data-width': "100%"});
//     console.log($(this).data('fotorama').options)
// });

// $('.fotorama').on('fotorama:ready ', function() {
//     console.log('fotorama:ready');
//     $(this).data('fotorama').setOptions({'data-width': "300px"});
// });
