var video = document.querySelector("#video"),
    	button = document.querySelector("#button");

		button.addEventListener("click", function() {
		video.play()
		video.setAttribute("controls","controls");
		}, false);

		$(".main-video-box").click(function() {
		$(".main-video-box").addClass('video-play-btn--hide');
		})