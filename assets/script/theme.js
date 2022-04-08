let themeModelGlb = "<div id=\"theme-ID\" class=\"theme-tab text-center\">" +
	"<img style=\"width: 100%\" src=\"PICSRC\">" +
	"<label class=\"theme-name\">THEMENAME</label>" +
	"</div>";
let themeModelLoc = "<div id=\"theme-ID\" class=\"theme-tab text-center\">" +
	"<input type=\"button\" class=\"theme-del\" value=\"删除\"><br>" +
	"<label class=\"theme-name\">THEMENAME</label>" +
	"</div>";
let themeGlb =
	[{ id: "off-classical", descr: "[官方]经典", 		bg: "white", 	sub: "red", 	cd: "red", 		txt: "black" },
	{ id: "off-classical2", descr: "[官方]经典2", 		bg: "white", 	sub: "skyblue", cd: "skyblue", 	txt: "black" },
	{ id: "off-eye", 		descr: "[官方]护眼配色", 	bg: "black", 	sub: "black", 	cd: "black", 	txt: "black" },
	{ id: "spring-talk", 	descr: "[投稿]春日私语", 	bg: "#F5F1DA", 	sub: "#808C6C", cd: "#F4B46A", 	txt: "#9A9C94" },
	{ id: "summer-salt", 	descr: "[投稿]海盐夏日", 	bg: "#7F9BA8", 	sub: "#D0D3DC", cd: "#C8B493", 	txt: "#383C4A" },
	{ id: "autumn-milktea", descr: "[投稿]初秋奶茶", 	bg: "#DDC9AC", 	sub: "#F6EDD5", cd: "#BCA491", 	txt: "#D4AC73" },
	{ id: "playground", 	descr: "[投稿]游乐场", 		bg: "#FFF7D3", 	sub: "#00768F", cd: "#FAC457", 	txt: "#00768F" },
	{ id: "very-good", 		descr: "[投稿]都觉得好", 	bg: "#F5E8C8", 	sub: "#AE1027", cd: "#A12F2F", 	txt: "#752423" },
	{ id: "nice", 			descr: "[投稿]奶思",		bg: "#E0D5F2", 	sub: "#0E97B6", cd: "#0E97B6", 	txt: "black" },
	{ id: "cherry-pink", 	descr: "[投稿]樱花粉", 		bg: "#FEEEED", 	sub: "#EF5B9C", cd: "#EF5B9C", 	txt: "#F7ACBC" },
	{ id: "see-nothing", 	descr: "[投稿]看个毛线", 	bg: "#6C757D", 	sub: "#6C757D", cd: "#6C757D", 	txt: "#6C757D" }
	];

if (localStorage.getItem("theme_id") === null) localStorage.setItem("theme_id", "0");
let themeChosen = parseInt(localStorage.getItem("theme_id"));

function chooseTheme(n, e) {
	$("#theme-" + themeChosen.toString()).removeClass("chosen");
	$("#theme-" + n.toString()).addClass("chosen");
	themeChosen = n;
	if (n < themeGlb.length) setColorFromThemeGlb(n);
	else {
		if (e) delThemeLoc(n - themeGlb.length);
		else setColorFromThemeLoc(n - themeGlb.length);
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
for (let i = 0; i < themeGlb.length; i++) {
	let thmg = themeModelGlb;
	thmg = thmg.replace(/ID/g, i.toString());
	thmg = thmg.replace(/PICSRC/g, "./assets/image/theme/" + themeGlb[i].id + ".png?v=220408");
	thmg = thmg.replace(/THEMENAME/g, themeGlb[i].descr);
	document.getElementById("cd-tab5").innerHTML += thmg;
}
for (let i = themeGlb.length; i < themeGlb.length + themeLocBg.length; i++) {
	let thml = themeModelLoc;
	thml = thml.replace(/ID/g, i.toString());
	thml = thml.replace(/THEMENAME/g, "[本地]" + themeLocName[i - themeGlb.length]);
	document.getElementById("cd-tab5").innerHTML += thml;
}
for (let i = 0; i < 1000; i++) {
	if (document.getElementById("theme-" + i.toString()) === null) break;
	$("#theme-" + i.toString()).on("click", function (e) { chooseTheme(i, $(e.target).is(".theme-del")) });
}