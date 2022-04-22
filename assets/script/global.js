function getAdjDate(n) {
	let adjDate = n;
	let trueNowDateStr = n.toLocaleDateString();
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
		if (dayOff[i] == n.toLocaleDateString()) return true;
	}
	if (getAdjDay(getAdjDate(n)) >= 6 && getAdjDay(getAdjDate(n)) <= 7) return true;
	if (getNowStr(n) < timeStampList[getClass().depart][0] || getNowStr(n) > timeStampList[getClass().depart][timeStampList[getClass().depart].length - 1]) return true;
	return false;
}
function add0(s) {
	return ("00" + s).substr(-2);
}
function getAdjDay(n) {
	return (n.getDay() - 1 + 7) % 7 + 1;
}
function getNowStr(n) {
	return add0(n.getHours().toString()) + add0(n.getMinutes().toString());
}
function getNowWkStr(n) {
	return getAdjDay(getAdjDate(n)).toString() + getNowStr(n);
}
function getNowOnceStr(n) {
	return n.getFullYear().toString() + add0((n.getMonth() + 1).toString()) + add0(n.getDate().toString()) + getNowStr(n);
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