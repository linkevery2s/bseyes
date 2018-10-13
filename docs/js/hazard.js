var map;

function hazard_ini(){

var tiri = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>',
	});

var test = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/01_flood_l2_shinsuishin_kuni_data/{z}/{x}/{y}.png', {
    opacity: 0.8
    });

//地図を生成（初期表示の中心座標，ズームレベル，レイヤなどをオプションで設定）
map = L.map('map_canvas', {center: [35.619, 138.466], zoom: 5,layers: [tiri, test]});

}

function hok(){
	document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/hokkaido.html"></iframe>';
}

function ao(){
	document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/aomori.html"></iframe>';
}

function ak(){
	document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/akita.html"></iframe>';
}

function iw(){
	document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/iwate.html"></iframe>';
}

function my(){
	document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/miyagi.html"></iframe>';
}

function yg(){
	document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/yamagata.html"></iframe>';
}

function fs(){
	document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/fukushima.html"></iframe>';
}

function ib(){
	document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/ibaragi.html"></iframe>';
}

function to(){
	document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/tochigi.html"></iframe>';
}

function gu(){
	document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/gunma.html"></iframe>';
}

function si(){
	document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/saitama.html"></iframe>';
}

function tb(){
	document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/tiba.html"></iframe>';
}

function tk(){
	document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/tokyo.html"></iframe>';
}

function kg(){
	document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/kanagawa.html"></iframe>';
}

function ni(){
	document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/nigata.html"></iframe>';
}

function toyama(){
	document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/toyama.html"></iframe>';
}

function is(){
	document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/ishikawa.html"></iframe>';
}

function fukui(){
	document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/fukui.html"></iframe>';
}

function yam(){
	document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/yamanashi.html"></iframe>';
}

function ng(){
	document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/nagano.html"></iframe>';
}

function gif(){
	document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/gifu.html"></iframe>';
}

function sz(){
	document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/shizuoka.html"></iframe>';
}

function aic(){
	document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/aichi.html"></iframe>';
}

function mie(){
	document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/mie.html"></iframe>';
}

function siga(){
	document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/shiga.html"></iframe>';
}

function kyot(){
	document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/kyoto.html"></iframe>';
}

function os(){
	document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/osaka.html"></iframe>';
}

function hg(){
	document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/hyogo.html"></iframe>';
}

function nr(){
	document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/nara.html"></iframe>';
}

function waky(){
	document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/wakayama.html"></iframe>';
}

function tt(){
	document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/tottori.html"></iframe>';
}

function smn(){
	document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/shimane.html"></iframe>';
}

function oky(){
	document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/okayama.html"></iframe>';
}

function hiro(){
	document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/hiroshima.html"></iframe>';
}

function yag(){
	document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/yamaguchi.html"></iframe>';
}

function tok(){
	document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/tokushima.html"></iframe>';
}

function kagawa(){
	document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/kagawa.html"></iframe>';
}

function ehi(){
	document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/ehime.html"></iframe>';
}

function kochi(){
	document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/kochi.html"></iframe>';
}

function fukuoka(){
	document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/fukuoka.html"></iframe>';
}

function saga(){
	document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/saga.html"></iframe>';
}

function nags(){
	document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/nagasaki.html"></iframe>';
}

function kuma(){
	document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/kumamoto.html"></iframe>';
}

function oita(){
	document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/oita.html"></iframe>';
}

function miyz(){
	document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/miyazaki.html"></iframe>';
}

function kagos(){
	document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/kagoshima.html"></iframe>';
}

function okina(){
	document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/okinawa.html"></iframe>';
} 