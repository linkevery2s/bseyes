var map; var hash1; var gps_button;

    function map_ini() {
		map = L.map('map_canvas');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([35.619, 138.466], 5);
		//hash1 = L.hash(map);
		
		gps_button = L.easyButton('fa-location-arrow', function(){
    		GPS();
		}).addTo( map );

	}