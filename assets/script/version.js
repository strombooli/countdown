const CURRENT_VERSION = "22042601";

let past_ver = ["22042601"];
let upd_info = ["<h4>2022/04/26更新：一键加入腾讯会议</h4><br><p>如图，打开“活动”标签，点击对应课程，在弹窗上确定打开，即可快速打开腾讯会议并加入对应会议。<br><img width=\"20%\" src=\"https://s1.ax1x.com/2022/04/27/LbfA1A.png\"><img width=\"30%\" src=\"https://s1.ax1x.com/2022/04/27/Lbf1pj.png\"><img width=\"45%\" src=\"https://s1.ax1x.com/2022/04/27/Lb44OI.png\"><br>目前支持49节课程，可在反馈入口处提供课程及会议号。</p>"];
if (getCookie("ver") != CURRENT_VERSION) {
	let old_ver_id = 0;
	for (let i = 0; i < past_ver.length; i++) {
		if (past_ver[i] == getCookie("ver")) {
			old_ver_id = i;
			break;
		}
	}
	setCookie("ver", CURRENT_VERSION, 365);
	let new_ver_id = 0
	for (let i = 0; i < past_ver.length; i++) {
		if (past_ver[i] == CURRENT_VERSION) {
			new_ver_id = i;
			break;
		}
	}
	$("#cd-tab7").html("<h2>本次更新</h2><hr>")
	for (let i = old_ver_id; i <= new_ver_id; i++) {
		$("#cd-tab7").html($("#cd-tab7").html() + upd_info[i]);
	}
	$("#tab7a").trigger("click");
}