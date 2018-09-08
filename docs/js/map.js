var map; var hash; var gps_button; var marker1;var mas_button ; var marker2; var zoom;

    function map_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([35.619, 138.466], 5);
		
		hash = new L.Hash(map);
		
		gps_button = L.easyButton('fa-location-arrow', function(){
    		GPS();
		}).addTo( map );

		/*mas_button = L.easyButton('fa-map-pin', function(){
    		maset();
		}).addTo( map );*/

	}

    function whmap_ini() {
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		//map.setView([35.619, 138.466], 5);
		
		hash = new L.Hash(map);

		var para = location.hash;
		var par = para.split("/");
		var pulsingIcon = L.icon.pulse({iconSize:[12,12],color:'blue'});
		var now = L.marker([par[1] ,par[2]] ,{icon: pulsingIcon}).addTo(map);
		now.bindPopup("今、ここにいます。").openPopup();

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
    	//marker1 = L.marker([ido, keido], {draggable:true} ).addTo(map);
		gps_button.disable();
        //mas_button.disable();
		//marker2.onRemove(map);
	}

	function gps_error(error) {
       alert("エラーが発生したので、現在地を取得できませんでした。");
	}

/*function maset() {

    var para = location.hash;
	var par = para.split("/");

marker2 = L.marker([par[1], par[2]], {draggable:true} ).addTo(map);
mas_button.disable();

}*/

function mail(){
	var para = location.hash;
	var par = para.split("/");
	zoom = map.getZoom();
	var url = "https://linkevery2s.github.io/bseyes/whmap.html%23" + zoom + "/" + par[1] + "/" +par[2];
	location.href =  "mailto:?body= %e4%bb%8a%e3%80%81%e3%81%93%e3%81%93%e3%81%ab%e3%81%84%e3%82%8b%e3%82%88%e3%80%82%0d%0a%0d%0a " + url;

}

function line(){
	var para = location.hash;
	var par = para.split("/");
	zoom = map.getZoom();
	var url = "https://linkevery2s.github.io/bseyes/whmap.html%23" + zoom + "/" + par[1] + "/" +par[2];
	location.href = "line://msg/text/%e4%bb%8a%e3%80%81%e3%81%93%e3%81%93%e3%81%ab%e3%81%84%e3%82%8b%e3%82%88%e3%80%82%0d%0a%0d%0a"+ url;

}

function tw(){
	var para = location.hash;
	var par = para.split("/");
	zoom = map.getZoom();
	var url = "https://linkevery2s.github.io/bseyes/whmap.html%23" + zoom + "/" + par[1] + "/" +par[2];
	location.href = "https://twitter.com/share?url=" + url + "&text=%e4%bb%8a%e3%80%81%e3%81%93%e3%81%93%e3%81%ab%e3%81%84%e3%82%8b%e3%82%88%e3%80%82%0d%0a%0d%0a";
}

function fb(){
	var para = location.hash;
	var par = para.split("/");
	zoom = map.getZoom();
	var url = "https://linkevery2s.github.io/bseyes/whmap.html%23" + zoom + "/" + par[1] + "/" +par[2];
	location.href = "https://www.facebook.com/sharer/sharer.php?u=" + url;
}