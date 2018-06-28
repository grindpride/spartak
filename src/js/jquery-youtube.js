// console.log('intro init');
var debug = false;
var skiped = false;
if(window.location.host === 'localhost:1234'){
    // debug = true;
}

var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/player_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
let vidos;

let origin = window.location.href;
// console.log(origin);
var playerDefaults = {autoplay: 1,
                      autohide: 1,
                      modestbranding: 1,
                      rel: 0,
                      showinfo: 0,
                      controls: 0,
                      disablekb: 1,
                      enablejsapi: 1,
                      iv_load_policy: 3};
var vid = {videoId: 'AzR_QYX1eEM',
            suggestedQuality: 'hd720',
            host: 'https://www.youtube.com',
            origin: origin};
var stopPlayAt = 27;
var stopPlayTimer;

// // console.log(currVid);

window.onYouTubePlayerAPIReady = function(){
    // console.log('YouTubePlayerAPIReady');
    if(!skiped) {
        vidos = new YT.Player('tv', {
            events: {'onReady': onPlayerReady, 'onStateChange': onPlayerStateChange},
            playerVars: playerDefaults
        });
        window.VideoControl = vidos;
    }
}

function onPlayerReady(event){
    // console.log('PLAYER IS READY')
    if(!debug && !skiped){
        event.target.loadVideoById(vid);
        event.target.playVideo();

    }
}



function onPlayerStateChange(event) {
    // console.log("onPlayerStateChange")
    // event.target.playVideo();
    // console.log(event.data)
    var time, rate, remainingTime;
    $('#tv').addClass('active');
    clearTimeout(stopPlayTimer);
    if (event.data == -1){
        // console.log("play -1")
        event.target.playVideo();
    }
    if (event.data == YT.PlayerState.PLAYING) {
        time = vidos.getCurrentTime();
        // Add .4 of a second to the time in case it's close to the current time
        // (The API kept returning ~9.7 when hitting play after stopping at 10s)
        if (time + .4 < stopPlayAt) {
            rate = vidos.getPlaybackRate();
            remainingTime = (stopPlayAt - time) / rate;
            stopPlayTimer = setTimeout(pauseVideo, remainingTime * 1000);
        }
    }
}

function pauseVideo() {
    vidos.pauseVideo();
}


function vidRescale(){

    var w = $(window).width()+200,
        h = $(window).height()+200;


    vidos.setSize(w, w/16*9);
        $('.screen').css({'left': '0px'});

}

$(window).on('load resize', function(){
    if(vidos) vidRescale();
});

$('#playIntro').click(function () {
    if(vidos){
        vidos.stopVideo()
        vidos.playVideo()
    }
});

$('#skipIntro').click(function () {
    skiped = true;
    $('section.section-intro').slideUp(300);
    if(vidos){
        pauseVideo();
    }
});

if(debug){
    $('#skipIntro').click();
}