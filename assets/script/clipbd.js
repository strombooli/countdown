window.onfocus = function () { detectMeet() };
$(document).on("visibilitychange", function () { detectMeet() });
function detectMeet() {
	setTimeout(async () => {
		if (document.visibilityState == "visible") {
			const text = await navigator.clipboard.readText();
			try {
				let meetingNo = text.match(/\d\d\d-\d\d\d(\d)?-\d\d\d(\d)?/)[0];
				window.location.href = "wemeet://page/inmeeting?meeting_code=" + meetingNo;
				navigator.clipboard.writeText(" ");
			} catch { }
		}
	}, 10);
}