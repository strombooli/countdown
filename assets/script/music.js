let musicList = ["pre.mp3", "on.mp3", "off.mp3", "eye.mp3", "inbody.mp3", "body.mp3", "neversaygoodbye.aac"];
let musicDescr = ["预备铃", "上课铃", "下课铃", "眼保健操", "室内操", "广播体操", "Never Say Goodbye"];

let player;
function playMusic(n) {
	if (n < 0 || !toggled[n]) return;
	let s = musicList[n];
	let mp3 = "./assets/music/" + s + "?20220409";
	player = new Audio(mp3);
	document.getElementById("cd-music").appendChild(player);
	let playerer = player.play();
	if (playerer !== undefined) {
		playerer.then(_ => {
			$("#cd-hint").hide();
			$("#music-name").text(musicDescr[n]);
			$("#cd-music").fadeIn(2000);
			player.addEventListener("ended", function () {
				$("#cd-music").fadeOut(2000);
			}, false)
		}).catch(error => {
			$("#cd-hint").show();
			player.pause();
		});
	}
}
function stopMusic() {
	player.pause();
	player = new Audio();
	$("#cd-music").hide();
}