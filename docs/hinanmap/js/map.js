//version 5.
var map;var p;var zoom;var marker; var markers = []; var gps_button; var hinanj;
var todou ;var ido; var keido;

    function aichi_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([35.002, 137.200], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(aichi, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function hokkaido_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([43.469, 141.987], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(hokkaido, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function aomori_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([40.651, 140.724], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(aomori, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function iwate_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([39.686, 141.224], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(iwate, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function akita_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([39.529, 140.389], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(akita, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function miyagi_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([38.505, 140.707], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(miyagi, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function yamagata_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([38.428, 140.026], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(yamagata, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function fukushima_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([37.392, 139.883], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(fukushima, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function nigata_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([37.375, 138.735], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(nigata, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function tochigi_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([36.673, 139.653], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(tochigi, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function gunma_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([36.461, 138.950], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(gunma, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function ibaragi_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([36.271, 140.235], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(ibaragi, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function tiba_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([35.488, 139.966], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(tiba, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function saitama_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([35.929, 139.147], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(saitama, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function tokyo_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([35.595, 139.592], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(tokyo, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function kanagawa_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([35.3980, 139.3314], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(kanagawa, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function yamanashi_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([35.532, 138.565], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(yamanashi, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function nagano_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([35.960, 137.928], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(nagano, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function shizuoka_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([35.012, 138.214], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(shizuoka, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function gifu_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([35.724, 136.890], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(gifu, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function toyama_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([36.624, 137.016], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(toyama, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function ishikawa_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([36.844, 136.785], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(ishikawa, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function fukui_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([35.898, 136.192], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(fukui, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function shiga_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([35.255, 135.950], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(shiga, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function shiga_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([35.255, 135.950], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(shiga, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function mie_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([34.606, 136.225], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(mie, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function kyoto_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([35.156, 135.368], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(kyoto, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function osaka_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([34.692, 135.511], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(osaka, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function nara_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([34.207, 135.818], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(nara, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function wakayama_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([33.975, 135.368], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(wakayama, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function hyogo_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([35.043, 134.484], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(hyogo, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function tottori_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([35.313, 133.786], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(tottori, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function okayama_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([34.940, 133.550], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(okayama, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function shimane_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([34.854, 132.347], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(shimane, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function hiroshima_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([34.556, 132.512], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(hiroshima, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function yamaguchi_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([34.207, 131.550], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(yamaguchi, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function kagawa_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([34.057, 133.726], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(kagawa, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function tokushima_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([33.852, 133.923], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(tokushima, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function ehime_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([33.679, 132.764], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(ehime, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function kochi_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([33.390, 133.259], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(kochi, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function fukuoka_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([33.431, 130.583], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(fukuoka, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function saga_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([33.170, 130.073], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(saga, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function nagasaki_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([32.875, 129.661], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(nagasaki, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function kumamoto_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([32.426, 130.759], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(kumamoto, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function miyazaki_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([32.213, 131.188], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(miyazaki, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function kagoshima_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([31.541, 130.715], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(kagoshima, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function okinawa_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([26.436, 127.996], 8);

		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(okinawa, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

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

