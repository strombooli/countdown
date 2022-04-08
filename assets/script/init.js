let toggled = new Array();
function initTog() {
	let togStr = getCookie("tog");
	if (togStr.length != 7) {
		togStr = "1111111";
		setCookie("tog", togStr, 365);
	}
	for (let i = 0; i < togStr.length; i++) {
		toggled[i] = parseInt(togStr[i]);
	}
	for (let i = 0; i < 1000; i++) {
		if (document.getElementById("tog-" + i.toString()) === null) break;
		if (toggled[i]) {
			$("#tog-" + i.toString() + " i:first").toggleClass("fa-toggle-on", true);
			$("#tog-" + i.toString() + " i:first").toggleClass("fa-toggle-off", false);
		} else {
			$("#tog-" + i.toString() + " i:first").toggleClass("fa-toggle-on", false);
			$("#tog-" + i.toString() + " i:first").toggleClass("fa-toggle-off", true);
		}
	}
}
initTog();
function toggle(n) {
	let togStr = getCookie("tog");
	togStr = replaceStr(togStr, n, (1 - parseInt(togStr[n])).toString());
	setCookie("tog", togStr, 365);
	initTog();
}


$("#week").text("第" + getWk().toString() + "周");
function updClass() {
	localStorage.setItem("classNo", $("#class").val());
	window.location.reload();
}
function getClass() {
	if (localStorage.getItem("classNo") === null) {
		localStorage.setItem("classNo", "116");
	}
	let myClass = localStorage.getItem("classNo");
	let depart = parseInt(myClass[0]);
	let grade = parseInt(myClass[1]);
	let classs = parseInt(myClass[2]);
	return { depart: depart, grade: grade - 1, classs: classs - 1 };
}
function setClassDisplay() {
	let departList = ["中", "高", "国际部"];
	let gradeList = ["一", "二", "三"];
	let classList = ["(1)班", "(2)班", "(3)班", "(4)班", "(5)班", "(6)班"];
	let interList = ["6A", "6B", "7A", "7B", "8A", "8B", "9A", "10A"];
	let classString = "";
	if (getClass().depart <= 1) classString = departList[getClass().depart] + gradeList[getClass().grade] + classList[getClass().classs];
	else {
		classString = departList[2] + interList[(getClass().grade) * 2 + getClass().classs];
	}
	$("#class-name").text(classString);
	for (let i = 0; i < document.getElementById("class").children.length; i++) {
		for (let j = 0; j < document.getElementById("class").children[i].children.length; j++) {
			if (document.getElementById("class").children[i].children[j].value == localStorage.getItem("classNo")) {
				document.getElementById("class").children[i].children[j].selected = "selected";
				break;
			}
		}
	}
}
setClassDisplay();
$("#class").on("change", function () { updClass(); });


$("#cd-hint-close").on("click", function () { $("#cd-hint").hide() });
$("#music-stop").on("click", function () { stopMusic() });
$("#prompt-close").on("click", function () { $("#cd-prompt").hide() });


function calcHtml() {
	let r = parseInt($("#cr").val());
	let g = parseInt($("#cg").val());
	let b = parseInt($("#cb").val());
	$("#chtml").val("#" + ("000000" + ((r << 16) | (g << 8) | b).toString(16)).substr(-6).toUpperCase());
}
function initColorInput() {
	if (getCookie("cbg") == "") $("#cbg").attr({ placeholder: "white" });
	else $("#cbg").attr({ value: getCookie("cbg") });
	if (getCookie("csub") == "") $("#csub").attr({ placeholder: "red" });
	else $("#csub").attr({ value: getCookie("csub") });
	if (getCookie("ccd") == "") $("#ccd").attr({ placeholder: "red" });
	else $("#ccd").attr({ value: getCookie("ccd") });
	if (getCookie("ctxt") == "") $("#ctxt").attr({ placeholder: "black" });
	else $("#ctxt").attr({ value: getCookie("ctxt") });
}
initColorInput();

function setColor(bg, sub, cd, txt) {
	setCookie("cbg", bg, 365);
	setCookie("csub", sub, 365);
	setCookie("ccd", cd, 365);
	setCookie("ctxt", txt, 365);
	initColor();
}
function setColorFromInput() {
	setColor($("#cbg").val(), $("#csub").val(), $("#ccd").val(), $("#ctxt").val());
}
function setColorFromThemeLoc(i) {
	setColor(themeLocBg[i], themeLocSub[i], themeLocCd[i], themeLocTxt[i]);
}
function setColorFromThemeGlb(i) {
	setColor(themeGlbBg[i], themeGlbSub[i], themeGlbCd[i], themeGlbTxt[i]);
}
function initColor() {
	$("body").attr({ style: "background-color: " + getCookie("cbg") });
	$(".cd-title").attr({ style: "color: " + getCookie("csub") });
	$(".cd-time").attr({ style: "color: " + getCookie("ccd") });
	$(".cd-descr").attr({ style: "color: " + getCookie("ctxt") });
}
initColor();


function initTabs() {
	let tabOpen = ["-1", "-1", "-1", "-1"];
	for (let i = 0; i < 10; i++) {
		if (document.getElementById("tab" + i.toString()) === null) break;
		if (document.getElementById("cd-tab" + i.toString()) === null) {
			$("#tab" + i.toString()).on("click", function () { window.open(tabOpen[i]); });
			continue;
		}
		$("#tab" + i.toString()).on("click", function () { showTab(i); });
	}
	$("#cd-tabback").on("click", function () { hideTab(); });
}
initTabs();
function showTab(n) {
	$("#cd-tabback").addClass("show");
	$("#cd-tabback").show();
	$("#cd-tab" + n.toString()).addClass("show");
	$("#cd-tab" + n.toString()).show();
}
function hideTab() {
	for (let i = 0; i < 10; i++) {
		if (document.getElementById("cd-tab" + i.toString()) === null) return;
		$("#cd-tabback").removeClass("show");
		$("#cd-tabback").hide();
		$("#cd-tab" + i.toString()).removeClass("show");
		$("#cd-tab" + i.toString()).hide();
	}
}


let eventModal =
	"<div class=\"tab-list\">" +
	"<label class=\"list-label EVENTCLR\">EVENTSTAT</label>" +
	"<div class=\"list-cont\">" +
	"<b class=\"list-name\">EVENTNAME</b><br>" +
	"<span class=\"list-time\">EVENTTIME</span>" +
	"</div>" +
	"</div>";
function showEvent() {
	let hasEvent = false;
	let eventCnt = 1;
	for (let i = 0; i < weeklyEventList.length; i++) {
		if (weeklyEventDescr[i] == "-1" || weeklyEventEnd[i] == "-1") continue;
		hasEvent = true;

		let evm = eventModal;
		if (weeklyEventList[i] <= getNowWkStr(new Date()) && getNowWkStr(new Date()) <= weeklyEventEnd[i]) {
			evm = evm.replace(/EVENTSTAT/g, "进行中");
			evm = evm.replace(/EVENTCLR/g, "in");
		}
		else {
			evm = evm.replace(/EVENTSTAT/g, "未开始");
			evm = evm.replace(/EVENTCLR/g, "notin");
		}
		evm = evm.replace(/EVENTNAME/g, weeklyEventDescr[i]);
		evm = evm.replace(/EVENTTIME/g,
			weeklyName[weeklyEventList[i][0]] + " " + weeklyEventList[i].substring(1, 3) + ":" + weeklyEventList[i].substring(3, 5)
			+ "至" + weeklyEventEnd[i].substring(1, 3) + ":" + weeklyEventEnd[i].substring(3, 5));

		$("#cd-tab0").append(evm);
		$("#cd-tab0 .tab-list:eq(" + eventCnt.toString() + ")").on("click", function () { window.open(weeklyEventLink[i]); });
		eventCnt++;
	}
	for (let i = 0; i < onceEventList.length; i++) {
		if (onceEventDescr[i] == "-1" || onceEventEnd[i] == "-1") continue;
		hasEvent = true;

		let evm = eventModal;
		if (onceEventList[i] <= getNowOnceStr(getAdjDate()) && getNowOnceStr(getAdjDate()) <= onceEventEnd[i]) {
			evm = evm.replace(/EVENTSTAT/g, "进行中");
			evm = evm.replace(/EVENTCLR/g, "in");
		}
		else if (getNowOnceStr(getAdjDate()) < onceEventList[i]) {
			evm = evm.replace(/EVENTSTAT/g, "未开始");
			evm = evm.replace(/EVENTCLR/g, "notin");
		}
		else {
			evm = evm.replace(/EVENTSTAT/g, "已结束");
			evm = evm.replace(/EVENTCLR/g, "notin");
		}
		evm = evm.replace(/EVENTNAME/g, onceEventDescr[i]);
		evm = evm.replace(/EVENTTIME/g,
			onceEventList[i].substring(0, 4) + "/" + onceEventList[i].substring(4, 6) + "/" + onceEventList[i].substring(6, 8) + " " +
			onceEventList[i].substring(8, 10) + ":" + onceEventList[i].substring(10, 12));

		$("#cd-tab0").append(evm);
		$("#cd-tab0 .tab-list:eq(" + eventCnt.toString() + ")").on("click", function () { window.open(onceEventLink[i]); });
		eventCnt++;
	}
	if (!hasEvent) $("#event-no").show();
	else $("#event-no").hide();
}
showEvent();

let schedModal = "<tr><td>ID</td><td>MON</td><td>TUES</td><td>WED</td><td>THUR</td><td>FRI</td></tr>";
function showAllSched() {
	let nowSched = schedList[getClass().depart][getClass().grade][getClass().classs];
	for (let i = 0; i < nowSched[0].length; i++) {
		let sm = schedModal;
		sm = sm.replace(/ID/g, (i + 1).toString());
		sm = sm.replace(/MON/g, nowSched[0][i]);
		sm = sm.replace(/TUES/g, nowSched[1][i]);
		sm = sm.replace(/WED/g, nowSched[2][i]);
		sm = sm.replace(/THUR/g, nowSched[3][i]);
		sm = sm.replace(/FRI/g, nowSched[4][i]);
		document.getElementById("cd-table").innerHTML += sm;
	}
}
showAllSched();
