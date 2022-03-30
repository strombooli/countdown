function add0(s) {
	return ("00" + s).substr(-2);
}
function getAdjDay() {
	return (new Date().getDay() - 1 + 7) % 7 + 1;
}
function getNowStr() {
	return add0(new Date().getHours().toString()) + add0(new Date().getMinutes().toString());
}
function getNowWkStr() {
	return getAdjDay().toString() + getNowStr();
}
function getNowOnceStr() {
	return new Date().getFullYear().toString() + add0((new Date().getMonth() + 1).toString()) + add0(new Date().getDate().toString()) + getNowStr();
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