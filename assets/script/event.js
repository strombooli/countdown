let weeklyEventList = ["10851", "20931", "30931", "40931", "50931"];
let weeklyEventEnd = ["10930", "-1", "-1", "-1", "-1"];
let weeklyName = ["-1", "每周一", "每周二", "每周三", "每周四", "每周五"];
let weeklyEventMusic = [-1, -2, -2, -2, -2];
let weeklyEventDescr = ["升旗仪式", "-1", "-1", "-1", "-1"];
let weeklyEventLink = ["https:\/\/ke.qq.com\/webcourse\/2537352\/102642177#taid=9050075915794312&lite=1"];
let weeklyEventSpecial = [-1, 0, 0, 0, 0];

let meetEventDay = [-1, -1, -1, -1, -1, -1, 1, 2, 4, 5];
let meetEventClass = ["116", "116", "116", "116", "116", "11*", "116", "116", "116", "116"];
let meetEventSched = ["TI", "语文", "思想政治", "劳技", "地理", "生物", "化学", "化学", "化学", "化学"];
let meetEventNo = ["72484975415", "98824843300", "5996505652", "55871859390", "4242607523", "99892596354", "36979006822", "49481381540", "76629784909"];
let meetEventPwd = ["", "300300", "", "", "", "", "", "", "", ""]

let onceEventList = ["202203231540"];
let onceEventEnd = ["202203231640"];
let onceEventDescr = ["天宫课堂第二课"];
let onceEventLink = ["https://tv.cctv.com/live/cctv1"];

function eventPrompt(s, t) {
	$("#prompt-cont").text(s);
	$("#cd-prompt").show();
	setTimeout(function () { $("#cd-prompt").hide(); }, t);
}
function specialEvent(n) {
	switch (n) {
		case 0:
			$.get("https://api.help.bj.cn/apis/weather/?id=101020600", function (data) {
				let doIn = false;
				if (parseInt(data.temp) > 32) {
					eventPrompt("今天气温" + data.temp + "摄氏度，太热了，良心学校决定进行室内操！", 300000);
					doIn = true;
				} else if (parseInt(data.temp) < 10) {
					eventPrompt("今天气温" + data.temp + "摄氏度，太冷了，良心学校决定进行室内操！", 300000);
					doIn = true;
				} else if (parseInt(data.wdforce) >= 6) {
					eventPrompt("今天风力" + data.wdforce + "，学生要被吹跑了，良心学校决定进行室内操！", 300000);
					doIn = true;
				} else if (parseInt(data.humidity) >= 80) {
					eventPrompt("今天湿度" + data.humidity + "，学生要被水淹死了，良心学校决定进行室内操！", 300000);
					doIn = true;
				} else if (parseInt(data.wisib) <= 1) {
					eventPrompt("今天能见度" + data.wisib + "，学生要撞墙上了，良心学校决定进行室内操！", 300000);
					doIn = true;
				} else if (parseInt(data.weathercode.substring(1)) >= 3) {
					eventPrompt("今天" + data.weather + "良心学校决定进行室内操！", 300000);
					doIn = true;
				} else {
					doIn = false;
				}
				if (doIn) playMusic(4);
				else playMusic(5);
			})
			break;
		default:
			return;
	}
}