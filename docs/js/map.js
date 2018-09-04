var map; var hash; var gps_button; var marker1;

    function map_ini() {
		map = L.map('map_canvas');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([35.619, 138.466], 5);
		
		hash = new L.Hash(map);
		
		gps_button = L.easyButton('fa-location-arrow', function(){
    		GPS();
		}).addTo( map );

	}

	function GPS(){
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(gps_get,gps_error);
     	} else {
			alert("エラーが発生したので、現在地を取得できませんでした。");      
     	}
	}

	function gps_get(position) {
    	ido = position.coords.latitude;
    	keido = position.coords.longitude;
    	map.setView([ido, keido], 17);
    	marker1 = L.marker([ido, keido], {draggable:true} ).addTo(map);
		gps_button.disable();
	}

	function gps_error(error) {
       alert("エラーが発生したので、現在地を取得できませんでした。");
	}