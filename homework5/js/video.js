// Add js here. 

//Page load,Initialize the video variable and turn off autoplay and turn off looping.

var vid = document.getElementById("videoplayer");
vid.autoplay = false;
vid.loop=false;
vid.load();

//Play Button,Play the video.  
document.getElementById("play").addEventListener("click", function() {
	vid.play();
});

//Pause Button,Pause the video.
document.getElementById("pause").addEventListener("click", function() {
	vid.pause();
});

//Slow Down, Slow down the video to the next lowest playback speed from the list: 0.5, 1, 2. ;If the video is already on the slowest speed, add an alert saying "Video is at slowest speed!"
document.getElementById("slower").addEventListener("click", function() {
    if (vid.playbackRate == 0.5)
    {
        alert("Video is at slowest speed!");
    }
    else{
        vid.playbackRate = vid.playbackRate/2;
    }
});

//Speed Up, Speed up the video to the next highest playback speed from the list: 0.5, 1, 2. , If the video is already on the highest speed, add an alert saying "Video is at fastest speed!"
document.getElementById("faster").addEventListener("click", function() {
    if (vid.playbackRate == 2)
    {
        alert("Video is at fastest speed!");
    }
    else{
        vid.playbackRate = vid.playbackRate*2;
    }
});

//Skip Ahead,Advance the current video by 15 seconds.If the video length has been exceeded go back to the start of the video.
document.getElementById("skip").addEventListener("click", function() {
    if (vid.currentTime <= (vid.duration - 15)){
		vid.currentTime += 15;
	}
	else{
		vid.currentTime = 0;
		vid.play();
	}
});

//Mute,Mute/unmute the video and update the text in the button.
document.getElementById("mute").addEventListener("click", function() {
	if (vid.muted == true) {
		vid.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
	}
	else {
		vid.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
	}
});

//Volume Slider, Change the volume based on the slider and update the volume information.
document.getElementById("volume").innerHTML = '100%'
slider.addEventListener("change", function() {
	vid.volume = this.value/100;
	document.getElementById("volume").innerHTML = vid.volume * 100 + "%";
});
