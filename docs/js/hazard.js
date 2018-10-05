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