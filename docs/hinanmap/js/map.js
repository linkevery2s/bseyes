//version 5.
var map;var p;var zoom;var marker; var markers = []; var gps_button; var hinanj;
var todou22 ;var ido; var keido;

    function aichi_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([35.619, 138.466], 8);

			gps_button = L.easyButton('fa-location-arrow', function(){
    			GPS();
			}).addTo( map );

		todou22 = L.geoJson(aichi, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		
		map.addLayer(todou22);

	}

function GPS(){

	if (navigator.geolocation) {

	   //geolocationの利用
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
}

function gps_error(error) {
   		//失敗したら…
       alert("エラーが発生したので、現在地を取得できませんでした。");
}




function todou_ini(){
		todou[0] = L.geoJson(hokkaido, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[1] = L.geoJson(aomori, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[2] = L.geoJson(iwate, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[3] = L.geoJson(miyagi, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[4] = L.geoJson(akita, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[5] = L.geoJson(yamagata, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[6] = L.geoJson(fukushima, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[7] = L.geoJson(ibaragi, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[8] = L.geoJson(tochigi, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[9] = L.geoJson(gunma, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[10] = L.geoJson(saitama, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[11] = L.geoJson(tiba, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[12] = L.geoJson(tokyo, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[13] = L.geoJson(kanagawa, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[14] = L.geoJson(nigata, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[15] = L.geoJson(toyama, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[16] = L.geoJson(ishikawa, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[17] = L.geoJson(fukui, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[18] = L.geoJson(yamanashi, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[19] = L.geoJson(nagano, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[20] = L.geoJson(gifu, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[21] = L.geoJson(shizuoka, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[22] = L.geoJson(aichi, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[23] = L.geoJson(mie, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[24] = L.geoJson(shiga, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[25] = L.geoJson(kyoto, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[26] = L.geoJson(osaka, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[27] = L.geoJson(hyogo, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[28] = L.geoJson(nara, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[29] = L.geoJson(wakayama, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[30] = L.geoJson(tottori, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[31] = L.geoJson(shimane, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[32] = L.geoJson(hiroshima, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[33] = L.geoJson(okayama, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[34] = L.geoJson(yamaguchi, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[35] = L.geoJson(tokushima, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[36] = L.geoJson(kagawa, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[37] = L.geoJson(ehime, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[38] = L.geoJson(kochi, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[39] = L.geoJson(fukuoka, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[40] = L.geoJson(saga, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[41] = L.geoJson(nagasaki, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[42] = L.geoJson(kumamoto, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[43] = L.geoJson(oita, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[44] = L.geoJson(miyazaki, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[45] = L.geoJson(kagoshima, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[46] = L.geoJson(okinawa, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
}

function sty(feature) {
				return feature.properties && feature.properties.style;
			}

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
    
    layer.bindPopup(popup);
}

