function init_map(){
	var myOptions = {zoom:15,center:new google.maps.LatLng(43.229988604112485,76.9469926329956),mapTypeId: google.maps.MapTypeId.ROADMAP};
	map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
	marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(43.229988604112485,76.9469926329956)});
	infowindow = new google.maps.InfoWindow({content:'<strong>Title</strong><br>Almaty<br>'});
	google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});
	infowindow.open(map,marker);}google.maps.event.addDomListener(window, 'load', init_map);