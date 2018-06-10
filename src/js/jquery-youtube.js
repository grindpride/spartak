console.log('wtf');
let debug = false;
if(window.location.host === 'localhost:1234'){
    debug = true;
}

var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/player_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var tv,
    playerDefaults = {autoplay: 1,
        autohide: 1,
        modestbranding: 1,
        rel: 0,
        showinfo: 0,
        controls: 0,
        disablekb: 1,
        enablejsapi: 0,
        iv_load_policy: 3};
var vid = [
        {'videoId': 'AzR_QYX1eEM', 'suggestedQuality': 'hd720'}
    ],
    randomVid = Math.floor(Math.random() * vid.length),
    currVid = randomVid;
var stopPlayAt = 27;
var stopPlayTimer;
$('.hi em:last-of-type').html(vid.length);

window.onYouTubePlayerAPIReady = function(){
    tv = new YT.Player('tv', {events: {'onReady': onPlayerReady, 'onStateChange': onPlayerStateChange}, playerVars: playerDefaults});
}

function onPlayerReady(){
    if(!debug) tv.loadVideoById(vid[currVid]);
    // tv.mute();
}

function onPlayerStateChange(event) {
    var time, rate, remainingTime;
    $('#tv').addClass('active');
    clearTimeout(stopPlayTimer);
    if (event.data == YT.PlayerState.PLAYING) {
        time = tv.getCurrentTime();
        // Add .4 of a second to the time in case it's close to the current time
        // (The API kept returning ~9.7 when hitting play after stopping at 10s)
        if (time + .4 < stopPlayAt) {
            rate = tv.getPlaybackRate();
            remainingTime = (stopPlayAt - time) / rate;
            stopPlayTimer = setTimeout(pauseVideo, remainingTime * 1000);
        }
    }
}
function pauseVideo() {
    tv.pauseVideo();
}

// function onPlayerStateChange(e) {
//     if (e.data === 1){
//         $('#tv').addClass('active');
//         $('.hi em:nth-of-type(2)').html(currVid + 1);
//     } else if (e.data === 2){
//         $('#tv').removeClass('active');
//         if(currVid === vid.length - 1){
//             currVid = 0;
//         } else {
//             currVid++;
//         }
//         // tv.loadVideoById(vid[currVid]);
//         // tv.seekTo(vid[currVid].startSeconds);
//     }
// }

function vidRescale(){

    var w = $(window).width()+200,
        h = $(window).height()+200;

    // if (w/h > 16/9){
        tv.setSize(w, w/16*9);
        $('.tv .screen').css({'left': '0px'});
    // } else {
    //     tv.setSize(h/9*16, h);
    //     $('.tv .screen').css({'left': -($('.tv .screen').outerWidth()-w)/2});
    // }
}

$(window).on('load resize', function(){
    vidRescale();
});


$('#skipIntro').click(function () {
    $('section.section-intro').slideUp(300);
    pauseVideo();
});
if(debug){
    $('#skipIntro').click();
}