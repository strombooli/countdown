let themeModelGlb = "<div id=\"theme-ID\" class=\"theme-tab text-center\">" +
	"<img style=\"width: 100%\" src=\"PICSRC\">" +
	"<label class=\"theme-name\">THEMENAME</label>" +
	"</div>";
let themeModelLoc = "<div id=\"theme-ID\" class=\"theme-tab text-center\">" +
	"<input type=\"button\" class=\"theme-del\" value=\"删除\"><br>" +
	"<label class=\"theme-name\">THEMENAME</label>" +
	"</div>";
let themeGlbBg = ["white", "white", "black", "#FFF7D3", "#F5E8C8", "#F5F1DA", "#E0D5F2", "#FEEEED", "#6C757D", "#7F9BA8", "#DDC9AC"];
let themeGlbSub = ["red", "skyblue", "black", "#00768F", "#AE1027", "#808C6C", "#0E97B6", "#EF5B9C", "#6C757D", "#D0D3DC", "#F6EDD5"];
let themeGlbCd = ["red", "skyblue", "black", "#FAC457", "#A12F2F", "#F4B46A", "#0E97B6", "#EF5B9C", "#6C757D", "#C8B493", "#BCA491"];
let themeGlbTxt = ["black", "black", "black", "#00768F", "#752423", "#9A9C94", "black", "#F7ACBC", "#6C757D", "#383C4A", "#64AC73"];
let themeGlbName = ["[官方]经典", "[官方]经典2", "[官方]护眼配色", "[投稿]游乐场", "[投稿]我都觉得好", "[投稿]春天来啦~", "[投稿]奶思", "[投稿]樱花粉", "[投稿]看个毛线", "[投稿]海盐夏日", "[投稿]初秋奶茶"];
let themeLocBg = new Array(), themeLocSub = new Array(), themeLocCd = new Array(), themeLocTxt = new Array(), themeLocName = new Array();

if (localStorage.getItem("theme_id") === null) localStorage.setItem("theme_id", "0");
let themeChosen = parseInt(localStorage.getItem("theme_id"));

function chooseTheme(n, e) {
	$("#theme-" + themeChosen.toString()).removeClass("chosen");
	$("#theme-" + n.toString()).addClass("chosen");
	themeChosen = n;
	if (n < themeGlbBg.length) setColorFromThemeGlb(n);
	else {
		if (e) delThemeLoc(n - themeGlbBg.length);
		else setColorFromThemeLoc(n - themeGlbBg.length);
	}
	localStorage.setItem("theme_id", n.toString());
	initColorInput();
}
chooseTheme(themeChosen);

function getThemeLoc() {
	if (localStorage.getItem("theme") === null) localStorage.setItem("theme", "");
	let themeLoc = localStorage.getItem("theme").split(";");
	themeLocName = [], themeLocBg = [], themeLocSub = [], themeLocCd = [], themeLocTxt = [];
	for (let i = 0; i < themeLoc.length - 1; i++) {
		themeLocName.push(themeLoc[i].split(",")[0]);
		themeLocBg.push(themeLoc[i].split(",")[1]);
		themeLocSub.push(themeLoc[i].split(",")[2]);
		themeLocCd.push(themeLoc[i].split(",")[3]);
		themeLocTxt.push(themeLoc[i].split(",")[4]);
	}
}
function addThemeLoc(name, bg, sub, cd, txt) {
	localStorage.setItem("theme", localStorage.getItem("theme") + name + "," + bg + "," + sub + "," + cd + "," + txt + ";");
}
function delThemeLoc(n) {
	let conf = confirm("确认删除该主题？");
	if (!conf) return;
	let themeLoc = localStorage.getItem("theme").split(";");
	themeLoc.splice(n, 1);
	localStorage.setItem("theme", themeLoc.join(";"));
	window.location.reload();
}
function addThemeFromColor() {
	let name = prompt("请输入主题名:");
	if (name) {
		addThemeLoc(name, $("#cbg").val(), $("#csub").val(), $("#ccd").val(), $("#ctxt").val());
		window.location.reload();
	}
}

getThemeLoc();
for (let i = 0; i < themeGlbBg.length; i++) {
	let thmg = themeModelGlb;
	thmg = thmg.replace(/ID/g, i.toString());
	thmg = thmg.replace(/PICSRC/g, "./assets/image/theme/" + i.toString() + ".png?v=220406");
	thmg = thmg.replace(/THEMENAME/g, themeGlbName[i]);
	document.getElementById("cd-tab5").innerHTML += thmg;
}
for (let i = themeGlbBg.length; i < themeGlbBg.length + themeLocBg.length; i++) {
	let thml = themeModelLoc;
	thml = thml.replace(/ID/g, i.toString());
	thml = thml.replace(/THEMENAME/g, "[本地]" + themeLocName[i - themeGlbBg.length]);
	document.getElementById("cd-tab5").innerHTML += thml;
}
for (let i = 0; i < 1000; i++) {
	if (document.getElementById("theme-" + i.toString()) === null) break;
	$("#theme-" + i.toString()).on("click", function (e) { chooseTheme(i, $(e.target).is(".theme-del")) });
}