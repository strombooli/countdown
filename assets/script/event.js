let weeklyEventList = ["10851", "20931", "30931", "40931", "50931"];
let weeklyEventEnd = ["10930", "-1", "-1", "-1", "-1"];
let weeklyName = ["每周", "每周一", "每周二", "每周三", "每周四", "每周五"];
let weeklyEventMusic = [-1, -2, -2, -2, -2];
let weeklyEventDescr = ["升旗仪式", "-1", "-1", "-1", "-1"];
let weeklyEventLink = ["https:\/\/ke.qq.com\/webcourse\/2537352\/102642177#taid=9050075915794312&lite=1"];
let weeklyEventSpecial = [-1, 0, 0, 0, 0];

let meetEvent =
	[
		{ day: 1, class: "11*", sched: "TI", no: "72484975415", pwd: "", descr: "TI" },
		{ day: 0, class: "11*", sched: "生物", no: "7132964981", pwd: "YYMMDD", descr: "生物" },
		{ day: 0, class: "01*", sched: "思想政治", no: "5996505652", pwd: "", descr: "思想政治" },
		{ day: 0, class: "112", sched: "思想政治", no: "5996505652", pwd: "", descr: "思想政治" },
		{ day: 0, class: "114", sched: "思想政治", no: "5996505652", pwd: "", descr: "思想政治" },
		{ day: 0, class: "116", sched: "思想政治", no: "5996505652", pwd: "", descr: "思想政治" },
		{ day: 0, class: "116", sched: "语文", no: "87356650478", pwd: "", descr: "语文" },
		{ day: 0, class: "114", sched: "劳技", no: "43929025051", pwd: "", descr: "劳技" },
		{ day: 0, class: "116", sched: "劳技", no: "55871859390", pwd: "", descr: "劳技" },
		{ day: 0, class: "114", sched: "地理", no: "4242607523", pwd: "", descr: "地理" },
		{ day: 0, class: "116", sched: "地理", no: "4242607523", pwd: "", descr: "地理" },
		{ day: 0, class: "125", sched: "地理D", no: "4242607523", pwd: "", descr: "地理D" },
		{ day: 0, class: "126", sched: "地理D", no: "4242607523", pwd: "", descr: "地理D" },
		{ day: 1, class: "112", sched: "化学", no: "99892596354", pwd: "", descr: "化学" },
		{ day: 1, class: "116", sched: "化学", no: "99892596354", pwd: "", descr: "化学" },
		{ day: 1, class: "123", sched: "化学H5/化学H6/化学D3", no: "99892596354", pwd: "", descr: "化学H5" },
		{ day: 1, class: "124", sched: "化学H5/化学H6/化学D3", no: "99892596354", pwd: "", descr: "化学H5" },
		{ day: 1, class: "125", sched: "化学H5/化学H6/化学D3", no: "99892596354", pwd: "", descr: "化学H5" },
		{ day: 1, class: "126", sched: "化学H5/化学H6/化学D3", no: "99892596354", pwd: "", descr: "化学H5" },
		{ day: 1, class: "134", sched: "化学D2/历史D1/政治D1", no: "99892596354", pwd: "", descr: "化学D2" },
		{ day: 1, class: "136", sched: "化学D2/历史D1/政治D1", no: "99892596354", pwd: "", descr: "化学D2" },
		{ day: 2, class: "112", sched: "化学", no: "36979006822", pwd: "", descr: "化学" },
		{ day: 2, class: "116", sched: "化学", no: "36979006822", pwd: "", descr: "化学" },
		{ day: 2, class: "134", sched: "化学D2/历史D1/政治D1", no: "36979006822", pwd: "", descr: "化学D2" },
		{ day: 2, class: "136", sched: "化学D2/历史D1/政治D1", no: "36979006822", pwd: "", descr: "化学D2" },
		{ day: 4, class: "112", sched: "化学", no: "49481381540", pwd: "", descr: "化学" },
		{ day: 4, class: "116", sched: "化学", no: "49481381540", pwd: "", descr: "化学" },
		{ day: 4, class: "123", sched: "化学H5/化学H6/化学D3", no: "49481381540", pwd: "", descr: "化学H5" },
		{ day: 4, class: "124", sched: "化学H5/化学H6/化学D3", no: "49481381540", pwd: "", descr: "化学H5" },
		{ day: 4, class: "125", sched: "化学H5/化学H6/化学D3", no: "49481381540", pwd: "", descr: "化学H5" },
		{ day: 4, class: "126", sched: "化学H5/化学H6/化学D3", no: "49481381540", pwd: "", descr: "化学H5" },
		{ day: 4, class: "134", sched: "化学D2/历史D1/政治D1", no: "49481381540", pwd: "", descr: "化学D2" },
		{ day: 4, class: "136", sched: "化学D2/历史D1/政治D1", no: "49481381540", pwd: "", descr: "化学D2" },
		{ day: 5, class: "112", sched: "化学", no: "76629784909", pwd: "", descr: "化学" },
		{ day: 5, class: "116", sched: "化学", no: "76629784909", pwd: "", descr: "化学" },
		{ day: 1, class: "114", sched: "英语", no: "312402352", pwd: "1111", descr: "英语" },
		{ day: 2, class: "114", sched: "英语", no: "73023208601", pwd: "1111", descr: "英语" },
		{ day: 3, class: "114", sched: "英语", no: "58735737500", pwd: "1111", descr: "英语" },
		{ day: 4, class: "114", sched: "英语", no: "33821319790", pwd: "1111", descr: "英语" },
		{ day: 5, class: "114", sched: "英语", no: "68829043719", pwd: "1111", descr: "英语" },
		{ day: 1, class: "114", sched: "语文", no: "80957374900", pwd: "", descr: "语文" },
		{ day: 2, class: "114", sched: "语文", no: "39971451285", pwd: "", descr: "语文" },
		{ day: 3, class: "114", sched: "语文", no: "83164758551", pwd: "", descr: "语文" },
		{ day: 4, class: "114", sched: "语文", no: "32959617844", pwd: "", descr: "语文" },
		{ day: 5, class: "114", sched: "班会", no: "61256181546", pwd: "", descr: "班会" },
		{ day: 2, class: "114", sched: "化学", no: "73346851681", pwd: "", descr: "化学" },
		{ day: 3, class: "114", sched: "化学", no: "62379764140", pwd: "", descr: "化学" },
		{ day: 4, class: "114", sched: "化学", no: "91595157939", pwd: "", descr: "化学" },
		{ day: 5, class: "114", sched: "化学", no: "45733448707", pwd: "", descr: "化学" },
	];
let meetEventDay = [-1, -1, 1, 2, 4, 5, 1, 2, 3, 4, 5];
let meetEventClass = ["116", "11*", "116", "116", "116", "116", "114", "114", "114", "114", "114", "114"];
let meetEventSched = ["英语", "英语", "英语", "英语"];
let meetEventNo = ["", "", "", "", ""];
let meetEventPwd = ["1111", "1111", "1111", "1111", "1111"];

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