const CURRENT_VERSION = "22051901";

let past_ver = ["22042601", "22042701", "22042801", "22050601", "22051901"];
let upd_info =
	[
		"<h4>2022/04/26更新：一键加入腾讯会议</h4><br><p>如图，打开“活动”标签，点击对应课程，在弹窗上确定打开，即可快速打开腾讯会议并加入对应会议。<br><img width=\"20%\" src=\"https://s1.ax1x.com/2022/04/27/LbfA1A.png\"><img width=\"30%\" src=\"https://s1.ax1x.com/2022/04/27/Lbf1pj.png\"><img width=\"45%\" src=\"https://s1.ax1x.com/2022/04/27/Lb44OI.png\"><br>目前支持49节课程，可在反馈入口处提供课程及会议号。</p>",
		"<h4>2022/04/27更新：配色预览、可选平滑效果</h4><br><p>1. 调色预览调整。如图，打开“调色盘”标签，修改配色后点击预览即可在下方看到大致效果。注意：调完色后必须将其保存到本地主题，否则会丢失。<br><img width=\"40%\" src=\"https://s1.ax1x.com/2022/04/27/LqXanO.png\"><img width=\"55%\" src=\"https://s1.ax1x.com/2022/04/27/LqXTCn.png\"><br>2. 支持平滑效果。如图，点击“设置”标签即可设置，注意空心为关实心为开。设置完后可点击各个标签尝试效果。<br><img width=\"40%\" src=\"https://s1.ax1x.com/2022/04/27/LqjVVe.png\"><img width=\"55%\" src=\"https://s1.ax1x.com/2022/04/27/LqjMxP.png\"></p>",
		"<h4>2022/04/28更新：编辑主题、关闭「回声洞」</h4><br><p>1. 编辑主题。如图，选择本地主题时，打开“调色盘”标签，修改配色后可点击下方“保存更改到主题”来编辑主题。<br>2. 关闭「回声洞」。如图，点击“设置”标签即可设置，注意空心为关实心为开。<br><img width=\"40%\" src=\"https://s1.ax1x.com/2022/04/27/LqjVVe.png\"><img width=\"55%\" src=\"https://s1.ax1x.com/2022/04/28/LX0VTH.png\"></p>",
		"<h4>2022/05/06更新：快速加入腾讯会议</h4><br><p>如图，复制会议邀请内容，打开本页面，首次弹窗点击允许，随后即可快速加入对应会议。<br><img width=\"45%\" src=\"https://s1.ax1x.com/2022/05/06/OuaQVf.png\"><img width=\"50%\" src=\"https://s1.ax1x.com/2022/04/27/Lb44OI.png\"></p>",
		"<h4>【重要】暂停维护公告</h4><br><p>各位同学，由于各种原因，自即日起本网页在另行公告前暂不再进行更新和维护，但网页仍可继续使用。<br>自本网页在3月23日上线以来，在两个月的时间内累计获得了2664人次、约600个设备的浏览，同时收到了数十条建议与主题的投稿，这些都给予我不断进行更新的动力。<br>非常感谢大家在这段艰难时间内的陪伴，本项目完整源代码已于 <a href=\"https://github.com/Jason-Ying/countdown\">GitHub</a> 和 <a href=\"https://gitee.com/ses-2021/countdown\">Gitee</a> 公开，欢迎自行取用。如有更多需求或想交流相关内容，欢迎通过 <a href=\"https://www.tapechat.net/uu/U6UFNO/0YF30FPM\">Tape匿名提问箱</a> 或 <a href='tencent://message/?uin=3171159049'>QQ: 3171159049</a> 联系我。再见。"
	];
if (getCookie("ver") != CURRENT_VERSION) {
	let old_ver_id = -1;
	for (let i = 0; i < past_ver.length; i++) {
		if (past_ver[i] == getCookie("ver")) {
			old_ver_id = i;
			break;
		}
	}
	setCookie("ver", CURRENT_VERSION, 365);
	let new_ver_id = 0;
	for (let i = 0; i < past_ver.length; i++) {
		if (past_ver[i] == CURRENT_VERSION) {
			new_ver_id = i;
			break;
		}
	}
	$("#cd-tab7").html("<h2>本次更新</h2><hr>")
	for (let i = new_ver_id; i >= old_ver_id + 1; i--) {
		$("#cd-tab7").html($("#cd-tab7").html() + upd_info[i]);
	}
	$("#tab7a").trigger("click");
}