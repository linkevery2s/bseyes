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
	location.href = "#doseki_map";document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/hokkaido.html"></iframe>';
}

function ao(){
	location.href = "#doseki_map";document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/aomori.html"></iframe>';
}

function ak(){
	location.href = "#doseki_map";document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/akita.html"></iframe>';
}

function iw(){
	location.href = "#doseki_map";document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/iwate.html"></iframe>';
}

function my(){
	location.href = "#doseki_map";document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/miyagi.html"></iframe>';
}

function yg(){
	location.href = "#doseki_map";document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/yamagata.html"></iframe>';
}

function fs(){
	location.href = "#doseki_map";document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/fukushima.html"></iframe>';
}

function ib(){
	location.href = "#doseki_map";document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/ibaragi.html"></iframe>';
}

function to(){
	location.href = "#doseki_map";document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/tochigi.html"></iframe>';
}

function gu(){
	location.href = "#doseki_map";document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/gunma.html"></iframe>';
}

function si(){
	location.href = "#doseki_map";document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/saitama.html"></iframe>';
}

function tb(){
	location.href = "#doseki_map";document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/tiba.html"></iframe>';
}

function tk(){
	location.href = "#doseki_map";document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/tokyo.html"></iframe>';
}

function kg(){
	location.href = "#doseki_map";document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/kanagawa.html"></iframe>';
}

function ni(){
	location.href = "#doseki_map";document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/nigata.html"></iframe>';
}

function toyama(){
	location.href = "#doseki_map";document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/toyama.html"></iframe>';
}

function is(){
	location.href = "#doseki_map";document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/ishikawa.html"></iframe>';
}

function fukui(){
	location.href = "#doseki_map";document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/fukui.html"></iframe>';
}

function yam(){
	location.href = "#doseki_map";document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/yamanashi.html"></iframe>';
}

function ng(){
	location.href = "#doseki_map";document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/nagano.html"></iframe>';
}

function gif(){
	location.href = "#doseki_map";document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/gifu.html"></iframe>';
}

function sz(){
	location.href = "#doseki_map";document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/shizuoka.html"></iframe>';
}

function aic(){
	location.href = "#doseki_map";document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/aichi.html"></iframe>';
}

function mie(){
	location.href = "#doseki_map";document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/mie.html"></iframe>';
}

function siga(){
	location.href = "#doseki_map";document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/shiga.html"></iframe>';
}

function kyot(){
	location.href = "#doseki_map";document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/kyoto.html"></iframe>';
}

function os(){
	location.href = "#doseki_map";document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/osaka.html"></iframe>';
}

function hg(){
	location.href = "#doseki_map";document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/hyogo.html"></iframe>';
}

function nr(){
	location.href = "#doseki_map";document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/nara.html"></iframe>';
}

function waky(){
	location.href = "#doseki_map";document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/wakayama.html"></iframe>';
}

function tt(){
	location.href = "#doseki_map";document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/tottori.html"></iframe>';
}

function smn(){
	location.href = "#doseki_map";document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/shimane.html"></iframe>';
}

function oky(){
	location.href = "#doseki_map";document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/okayama.html"></iframe>';
}

function hiro(){
	location.href = "#doseki_map";document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/hiroshima.html"></iframe>';
}

function yag(){
	location.href = "#doseki_map";document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/yamaguchi.html"></iframe>';
}

function tok(){
	location.href = "#doseki_map";document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/tokushima.html"></iframe>';
}

function kagawa(){
	location.href = "#doseki_map";document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/kagawa.html"></iframe>';
}

function ehi(){
	location.href = "#doseki_map";document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/ehime.html"></iframe>';
}

function kochi(){
	location.href = "#doseki_map";document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/kochi.html"></iframe>';
}

function fukuoka(){
	location.href = "#doseki_map";document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/fukuoka.html"></iframe>';
}

function saga(){
	location.href = "#doseki_map";document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/saga.html"></iframe>';
}

function nags(){
	location.href = "#doseki_map";document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/nagasaki.html"></iframe>';
}

function kuma(){
	location.href = "#doseki_map";document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/kumamoto.html"></iframe>';
}

function oita(){
	location.href = "#doseki_map";document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/oita.html"></iframe>';
}

function miyz(){
	location.href = "#doseki_map";document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/miyazaki.html"></iframe>';
}

function kagos(){
	location.href = "#doseki_map";document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/kagoshima.html"></iframe>';
}

function okina(){
	location.href = "#doseki_map";document.getElementById("doseki_map").innerHTML = '<iframe width="100%" height="580" scrolling="no" frameborder="no" src="doseki/okinawa.html"></iframe>';
} 