function getAdjDate(n) {
	let adjDate = n;
	let trueNowDateStr = getLocaleDateStr(n);
	for (let i = 0; i < daySwapFrom.length; i++) {
		if (trueNowDateStr == daySwapFrom[i]) {
			adjDate = new Date(daySwapTo[i]);
			break;
		}
		if (trueNowDateStr == daySwapTo[i]) {
			adjDate = new Date(daySwapFrom[i]);
			break;
		}
	}
	return adjDate;
}
function isOff(n) {
	// if(n >= new Date("2022/7/1") && n < new Date("2022/9/1")) return true;
	for (let i = 0; i < dayOff.length; i++) {
		if (dayOff[i] == getLocaleDateStr(n)) return true;
	}
	if (getAdjDay(getAdjDate(n)) >= 6 && getAdjDay(getAdjDate(n)) <= 7) return true;
	if (getNowStr(n) < timeStampList[getClass().depart][0] || getNowStr(n) >= timeStampList[getClass().depart][timeStampList[getClass().depart].length - 1]) return true;
	return false;
}
function add0(s) { return ("00" + s).substr(-2); }
function getWk() { return 6 + Math.floor((new Date().getTime() - 1647792000000) / 604800000); }
function getAdjDay(n) { return (n.getDay() - 1 + 7) % 7 + 1; }
function getNowStr(n) { return add0(n.getHours().toString()) + add0(n.getMinutes().toString()); } // HHMM
function getNowWkStr(n) { return getAdjDay(getAdjDate(n)).toString() + getNowStr(n); } // WHHMM
function getNowOnceStr(n) { return n.getFullYear().toString() + add0((n.getMonth() + 1).toString()) + add0(n.getDate().toString()) + getNowStr(n); } // YYYYMMDDHHMM
function getLocaleDateStr(n) { return n.getFullYear().toString() + "/" + (n.getMonth() + 1).toString() + "/" + n.getDate().toString(); } // YYYY/MM/DD

function rand(x, y) {
	return Math.round(Math.random() * (y - x) + x);
}
function replaceStr(str, index, char) {
	let strAry = str.split('');
	strAry[index] = char;
	return strAry.join('');
}

function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toGMTString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function getClass() {
	if (localStorage.getItem("classNo") === null) {
		alert("右上角可选择班级，建议使用Pad或电脑访问，欢迎使用");
		localStorage.setItem("classNo", "116");
	}
	let myClass = localStorage.getItem("classNo");
	let depart = parseInt(myClass[0]);
	let grade = parseInt(myClass[1]);
	let classs = parseInt(myClass[2]);
	return { depart: depart, grade: grade - 1, classs: classs - 1 };
}
function genClassName() {
	let departList = ["中", "高", "国际部"];
	let gradeList = ["一", "二", "三"];
	let classList = ["(1)班", "(2)班", "(3)班", "(4)班", "(5)班", "(6)班"];
	let interList = ["6A", "6B", "7A", "7B", "8A", "8B", "9A", "10A"];
	let classString = "";
	if (getClass().depart <= 1) classString = departList[getClass().depart] + gradeList[getClass().grade] + classList[getClass().classs];
	else {
		classString = departList[2] + interList[(getClass().grade) * 2 + getClass().classs];
	}
	return classString;
}