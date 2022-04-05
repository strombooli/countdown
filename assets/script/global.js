let adjDate = new Date();
let trueNowDateStr = new Date().toLocaleDateString();
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
function isOff(n) {
	for (let i = 0; i < dayOff.length; i++) {
		if (dayOff[i] == n.toLocaleDateString()) return true;
	}
	return false;
}
function getAdjDate(){
	return adjDate;
}
function add0(s) {
	return ("00" + s).substr(-2);
}
function getAdjDay(n) {
	return (n.getDay() - 1 + 7) % 7 + 1;
}
function getNowStr() {
	return add0(new Date().getHours().toString()) + add0(new Date().getMinutes().toString());
}
function getNowWkStr() {
	return getAdjDay(getAdjDate()).toString() + getNowStr();
}
function getNowOnceStr(n) {
	return n.getFullYear().toString() + add0((n.getMonth() + 1).toString()) + add0(n.getDate().toString()) + getNowStr();
}
function getWk() {
	return 6 + Math.floor((new Date().getTime() - 1647792000000) / 604800000);
}

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