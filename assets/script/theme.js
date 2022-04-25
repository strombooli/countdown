let themeModelGlb = "<div id=\"theme-ID\" class=\"theme-tab text-center\">" +
	"<img style=\"width: 100%\" src=\"PICSRC\">" +
	"<label class=\"theme-name\">THEMENAME</label>" +
	"</div>";
let themeModelLoc = "<div id=\"theme-ID\" class=\"theme-tab text-center\">" +
	"<input type=\"button\" class=\"theme-del\" value=\"删除\"><br>" +
	"<label class=\"theme-name\">THEMENAME</label>" +
	"</div>";
let themeGlb =
	[{ numid: 0, id: "off-classical", descr: "[官方]经典", bg: "white", sub: "red", cd: "red", txt: "black" },
	{ numid: 1, id: "off-classical2", descr: "[官方]经典2", bg: "white", sub: "skyblue", cd: "skyblue", txt: "black" },
	{ numid: 2, id: "off-eye", descr: "[官方]护眼配色", bg: "black", sub: "black", cd: "black", txt: "black" },
	{ numid: 12, id: "off-eye2", descr: "[官方]护眼配色2", bg: "white", sub: "white", cd: "white", txt: "white" },
	{ numid: 3, id: "spring-talk", descr: "[投稿]春日私语", bg: "#F5F1DA", sub: "#808C6C", cd: "#F4B46A", txt: "#9A9C94" },
	{ numid: 4, id: "summer-salt", descr: "[投稿]海盐夏日", bg: "#7F9BA8", sub: "#D0D3DC", cd: "#C8B493", txt: "#383C4A" },
	{ numid: 5, id: "autumn-mtea", descr: "[投稿]初秋奶茶", bg: "#DDC9AC", sub: "#F6EDD5", cd: "#BCA491", txt: "#D4AC73" },
	{ numid: 13, id: "winter-snow", descr: "[投稿]冬雪皑皑", bg: "#5D7599", sub: "#ABB6C8", cd: "#DADADA", txt: "#F7F0C6" },
	{ numid: 6, id: "playground", descr: "[投稿]游乐场", bg: "#FFF7D3", sub: "#00768F", cd: "#FAC457", txt: "#00768F" },
	{ numid: 7, id: "very-good", descr: "[投稿]都觉得好", bg: "#F5E8C8", sub: "#AE1027", cd: "#A12F2F", txt: "#752423" },
	{ numid: 8, id: "nice", descr: "[投稿]奶思", bg: "#E0D5F2", sub: "#0E97B6", cd: "#0E97B6", txt: "black" },
	{ numid: 9, id: "cherry-pink", descr: "[投稿]樱花粉", bg: "#FEEEED", sub: "#EF5B9C", cd: "#EF5B9C", txt: "#F7ACBC" },
	{ numid: 10, id: "see-nothing", descr: "[投稿]看个毛线", bg: "#6C757D", sub: "#6C757D", cd: "#6C757D", txt: "#6C757D" },
	{ numid: 11, id: "dusk-sun", descr: "[投稿]黄昏日落", bg: "https://s1.ax1x.com/2022/04/12/LeBsSS.jpg", sub: "white", cd: "white", txt: "white" }
	];
function getThemeIndex(n) {
	if (n >= themeGlb.length) return n;
	for (let i = 0; i < themeGlb.length; i++)
		if (themeGlb[i].numid == n) return i;
}
function getThemeId(n){
	if (n >= themeGlb.length) return n;
	return themeGlb[n].numid;
}

if (localStorage.getItem("theme_id") === null) localStorage.setItem("theme_id", "0");
let themeChosen = parseInt(localStorage.getItem("theme_id"));

let themeStruct = function () {
	let self = this;
	self.name = "";
	self.bg = "";
	self.sub = "";
	self.cd = "";
	self.txt = "";
}
let themeLoc = new Array();
function getThemeLoc() {
	if (localStorage.getItem("theme") === null) localStorage.setItem("theme", "");
	let themeLocStr = localStorage.getItem("theme").split(";");
	for (let i = 0; i < themeLocStr.length - 1; i++) {
		themeLoc[i] = new themeStruct;
		themeLoc[i].name = themeLocStr[i].split(",")[0];
		themeLoc[i].bg = themeLocStr[i].split(",")[1];
		themeLoc[i].sub = themeLocStr[i].split(",")[2];
		themeLoc[i].cd = themeLocStr[i].split(",")[3];
		themeLoc[i].txt = themeLocStr[i].split(",")[4];
	}
}
getThemeLoc();

function chooseTheme(n, e) {
	if (n < 0 || (n >= themeGlb.length && n < 100) || n >= 100 + themeLoc.length) n = 0;
	$("#theme-" + getThemeIndex(themeChosen).toString()).removeClass("chosen");
	$("#theme-" + getThemeIndex(n).toString()).addClass("chosen");
	themeChosen = n;
	if (n < themeGlb.length) {
		setColorFromThemeGlb(getThemeIndex(n));
		localStorage.setItem("theme_id", n.toString());
	} else {
		localStorage.setItem("theme_id", n.toString());
		if (e) delThemeLoc(n - 100);
		else setColorFromThemeLoc(n - 100);
	}
	initColorInput();
}

function addThemeLoc(name, bg, sub, cd, txt) {
	localStorage.setItem("theme", localStorage.getItem("theme") + name + "," + bg + "," + sub + "," + cd + "," + txt + ";");
}
function delThemeLoc(n) {
	let conf = confirm("确认删除该主题？");
	if (!conf) return;
	let themeLocStr = localStorage.getItem("theme").split(";");
	themeLocStr.splice(n, 1);
	localStorage.setItem("theme", themeLocStr.join(";"));
	window.location.reload();
}
function addThemeFromColor() {
	let name = prompt("请输入主题名:");
	if (name) {
		addThemeLoc(name, $("#cbg").val(), $("#csub").val(), $("#ccd").val(), $("#ctxt").val());
		window.location.reload();
	}
}

document.getElementById("cd-tab5").innerHTML += "<input style=\"width: 100%; border: none\" class=\"text-center text-muted\" disabled=\"disabled\" value=\"官方及投稿主题\">";
for (let i = 0; i < themeGlb.length; i++) {
	let thmg = themeModelGlb;
	thmg = thmg.replace(/ID/g, i.toString());
	thmg = thmg.replace(/PICSRC/g, "./assets/image/theme/" + themeGlb[i].id + ".png?v=220425");
	thmg = thmg.replace(/THEMENAME/g, themeGlb[i].descr);
	document.getElementById("cd-tab5").innerHTML += thmg;
}
document.getElementById("cd-tab5").innerHTML += "<input style=\"width: 100%; border: none\" class=\"text-center text-muted\" disabled=\"disabled\" value=\"本地主题\">";
for (let i = 100; i < 100 + themeLoc.length; i++) {
	let thml = themeModelLoc;
	thml = thml.replace(/ID/g, i.toString());
	thml = thml.replace(/THEMENAME/g, "[本地]" + themeLoc[i - 100].name);
	document.getElementById("cd-tab5").innerHTML += thml;
}
for (let i = 0; i < 1000; i++) {
	if (document.getElementById("theme-" + i.toString()) === null) continue;
	$("#theme-" + i.toString()).on("click", function (e) { chooseTheme(getThemeId(i), $(e.target).is(".theme-del")) });
}

chooseTheme(themeChosen, false);