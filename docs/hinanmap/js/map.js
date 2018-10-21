//version 5.
var map;var p;var zoom;var marker; var markers = []; var gps_button; var hinanj;var marker1;
var todou ;var ido; var keido;var hash;

	function start(){
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
  		hash = new L.Hash(map);
		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		var back_b = L.easyButton('fa-undo', function(){rn();}).addTo(map);
		todou = L.geoJson(k, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

function rn(){
		location.href = "../hinan.html#hinan_map";
}


    function aichi_ini() {
    	start();//map.setView([35.002, 137.200], 8);
	}

    function hokkaido_ini() {
		start();//map.setView([43.469, 141.987], 8);
	}

    function aomori_ini() {
		start();//map.setView([40.651, 140.724], 8);
	}

    function iwate_ini() {
		start();//map.setView([39.686, 141.224], 8);
	}

    function akita_ini() {
		start();//map.setView([39.529, 140.389], 8);
	}

    function miyagi_ini() {
		start();//map.setView([38.505, 140.707], 8);
	}

    function yamagata_ini() {
		start();//map.setView([38.428, 140.026], 8);
	}

    function fukushima_ini() {
		start();//map.setView([37.392, 139.883], 8);
	}

    function nigata_ini() {
		start();//map.setView([37.375, 138.735], 8);
	}

    function tochigi_ini() {
		start();//map.setView([36.673, 139.653], 8);
	}

    function gunma_ini() {
		start();//map.setView([36.461, 138.950], 8);
	}

    function ibaragi_ini() {
		start();//map.setView([36.271, 140.235], 8);
	}

    function tiba_ini() {
		start();//map.setView([35.488, 139.966], 8);
	}

    function saitama_ini() {
		start();//map.setView([35.929, 139.147], 8);
	}

    function tokyo_ini() {
		start();//map.setView([35.595, 139.592], 8);
	}

    function kanagawa_ini() {
		start();//map.setView([35.398, 139.331], 8);
	}

    function yamanashi_ini() {
		start();//map.setView([35.532, 138.565], 8);
	}

    function nagano_ini() {
		start();//map.setView([35.960, 137.928], 8);
	}

    function shizuoka_ini() {
		start();//map.setView([35.012, 138.214], 8);
	}

    function gifu_ini() {
		start();//map.setView([35.724, 136.890], 8);
	}

    function toyama_ini() {
		start();//map.setView([36.624, 137.016], 8);
	}

    function ishikawa_ini() {
		start();//map.setView([36.844, 136.785], 8);
	}

    function fukui_ini() {
		start();//map.setView([35.898, 136.192], 8);
	}

    function shiga_ini() {
		start();//map.setView([35.255, 135.950], 8);
	}

    function mie_ini() {
		start();//map.setView([34.606, 136.225], 8);
	}

    function kyoto_ini() {
		start();//map.setView([35.156, 135.368], 8);
	}

    function osaka_ini() {
		start();//map.setView([34.692, 135.511], 8);
	}

    function nara_ini() {
		start();//map.setView([34.207, 135.818], 8);
	}

    function wakayama_ini() {
		start();//map.setView([33.975, 135.368], 8);
	}

    function hyogo_ini() {
		start();//map.setView([35.043, 134.484], 8);
	}

    function tottori_ini() {
		start();//map.setView([35.313, 133.786], 8);
	}

    function okayama_ini() {
		start();//map.setView([34.940, 133.550], 8);
	}

    function shimane_ini() {
		start();//map.setView([34.854, 132.347], 8);
	}

    function hiroshima_ini() {
		start();//map.setView([34.556, 132.512], 8);
	}

    function yamaguchi_ini() {
		start();//map.setView([34.207, 131.550], 8);
	}

    function kagawa_ini() {
		start();//map.setView([34.057, 133.726], 8);
	}

    function tokushima_ini() {
		start();//map.setView([33.852, 133.923], 8);
	}

    function ehime_ini() {
		start();//map.setView([33.679, 132.764], 8);
	}

    function kochi_ini() {
		start();//map.setView([33.390, 133.259], 8);
	}

    function fukuoka_ini() {
		start();//map.setView([33.431, 130.583], 8);
	}

    function saga_ini() {
		start();//map.setView([33.170, 130.073], 8);
	}

	function oita_ini() {
		start();//map.setView([33.128, 131.083], 8);
	}

    function nagasaki_ini() {
		start();//map.setView([32.875, 129.661], 8);
	}

    function kumamoto_ini() {
		start();//map.setView([32.426, 130.759], 8);
	}

    function miyazaki_ini() {
		start();//map.setView([32.213, 131.188], 8);
	}

    function kagoshima_ini() {
		start();//map.setView([31.541, 130.715], 8);
	}

    function okinawa_ini() {
		start();//map.setView([26.436, 127.996], 8);
	}

	function GPS(){
		if (navigator.geolocation) {
       	navigator.geolocation.getCurrentPosition(gps_get,gps_error);
     	} else {
       	alert("エラーが発生したので、現在地を取得できませんでした。");
     	}
	}

	function gps_get(position) {

    //成功したら…
    ido = position.coords.latitude;
    keido = position.coords.longitude;
    
    //位置情報取得後、地図表示
   		map.setView([ido, keido], 17);
	//marker = L.marker([ido, keido]);
	//map.addLayer(marker);
	var pulsingIcon = L.icon.pulse({iconSize:[12,12],color:'blue'});
	
	marker1 = L.marker([ido, keido] ,{icon: pulsingIcon}).addTo(map);
	
	}

	function gps_error(error) {
   		//失敗したら…
       alert("エラーが発生したので、現在地を取得できませんでした。");
	}

	function sty(feature) {return feature.properties && feature.properties.style;}

	function iro(feature, latlng) {
				return L.circleMarker(latlng, {
					radius: 10,
					fillColor: "#2EFE2E",
					color: "#000",
					weight: 1,
					opacity: 1,
					fillOpacity: 0.8
				});
	}

	function geo_k(feature, layer) {
    var popup;
    if (feature.properties && feature.properties.Name) {
        popup = "名称：" + feature.properties.Name;
    }
    
    if (feature.properties && feature.properties.Jusho){
    	popup += '<br>住所：' + feature.properties.Jusho;
    }

    if (feature.properties && feature.properties.kouzui){
    	popup += '<br>洪水：<span id = "pop_moji">' + feature.properties.kouzui + '</span>';
    }

    if (feature.properties && feature.properties.gake){
    	popup += '　がけ崩れ、土石流及び地滑り：<span id = "pop_moji">' + feature.properties.gake + '</span><br>';
    }

    if (feature.properties && feature.properties.takashio){
    	popup += '高潮：<span id = "pop_moji">' + feature.properties.takashio + '</span>';
    }

    if (feature.properties && feature.properties.jishin){
    	popup += '　地震：<span id = "pop_moji">' + feature.properties.jishin + '</span>';
    }

    if (feature.properties && feature.properties.tsunami){
    	popup += '　津波：<span id = "pop_moji">' + feature.properties.tsunami + '</span><br>';
    }

    if (feature.properties && feature.properties.kaji){
    	popup += '大規模な火事：<span id = "pop_moji">' + feature.properties.kaji + '</span>';
    }

    if (feature.properties && feature.properties.naisui){
    	popup += '　内水氾濫：<span id = "pop_moji">' + feature.properties.naisui + '</span>';
    }

    if (feature.properties && feature.properties.kazan){
    	popup += '　火山：<span id = "pop_moji">' + feature.properties.kazan + '</span>';
    }

    layer.bindPopup(popup);
	}

function mail(){

	var url = location.href;
	location.href =  "mailto:?body=" + url;

}

function line(){
	var url = location.href;
	location.href = "line://msg/text/"+ url;

}

function tw(){
	var url = location.href;

url = encodeURI(url);

	location.href = "https://twitter.com/share?url=" + url;
}

function fb(){
	var url = location.href;
url = encodeURI(url);

	location.href = "https://www.facebook.com/sharer/sharer.php?u=" + url;
}