window.onfocus = function () { detectMeet() };
$(document).on("visibilitychange", function () { detectMeet() });
function detectMeet() {
	if (!toggled[9]) {
		console.log("Read Clipboard Aborted: Settings.");
		return;
	}
	setTimeout(async () => {
		if (document.visibilityState == "visible") {
			const text = await navigator.clipboard.readText();
			console.log("Read Clipboard Success.");
			try {
				let meetingNo = text.match(/\d\d\d-\d\d\d(\d)?-\d\d\d(\d)?/)[0];
				window.location.href = "wemeet://page/inmeeting?meeting_code=" + meetingNo;
				navigator.clipboard.writeText(" ");
				console.log("Search Clipboard Success.");
			} catch { console.log("Search Clipboard Failed: Not Found."); }
		}
	}, 10);
}