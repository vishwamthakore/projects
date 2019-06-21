document.querySelector("#btn").addEventListener("click", getInfo);



function getInfo()
{
	console.log("okay");
	var key="AIzaSyCDjGMz6nxu5XS1M66Ijq5rkRGngqIib50";

	var address=document.querySelector("#input_add").value;

	// var address="manu marg, jaipur";
	var newAdd=address.replace(/ /g,'+');
	console.log(newAdd);


	var geo_api=`https://maps.googleapis.com/maps/api/geocode/json?address=${newAdd}&key=${key}`;
	console.log(geo_api);

	var xhr = new XMLHttpRequest();
	xhr.open("GET", geo_api, true);
	xhr.onload=loadAll;

	var address=document.querySelector("#address_formatted");
	var lat=document.querySelector("#lat");
	var long=document.querySelector("#long");
	var head=document.querySelector("#resultshead");

	function loadAll()
	{
		if (xhr.status==200)
		{
				var info=JSON.parse(xhr.responseText);
				console.log(info);
				address.innerHTML=info.results[0].formatted_address;

				head.innerHTML="Address";
				lat.innerHTML='<strong>Latitude: </strong>';
				long.innerHTML='<strong>Longitude: </strong>';


				lati=info.results[0].geometry.location.lat;	
				longi=info.results[0].geometry.location.lng;

				lat.innerHTML+=lati;
				long.innerHTML+=longi;

				document.querySelector("#map").style.display="block";

				initMap();

		}




	}

	xhr.send();


}

var lati=-25.344;
var longi=131.036;

function initMap() {
  // The location of Uluru
  var uluru = {lat: lati, lng: longi};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 11, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}



// function showPos(p)
// {	

// 	console.log(p);
// 	// console.log(p.coords.latitude);
// 	lat=p.coords.latitude;
// 	long=p.coords.longitude;
// 	console.log(lat);
// 	console.log(long);

// 	var loc=document.querySelector("#location");
// 	var temp=document.querySelector("#temperature");
// 	var desc=document.querySelector("#description");

// 	var proxy='https://cors-anywhere.herokuapp.com/'
// 	var api=`${proxy}https://api.darksky.net/forecast/4f54e2d742031ebbc70a97f84bf9eb66/${lat},${long}`;

// 	var xhr = new XMLHttpRequest();
// 	xhr.open("GET", api, true);

// 	xhr.onload=loadAll;

// 		function loadAll()
// 		{
// 			var info=JSON.parse(xhr.responseText);
// 			console.log(info);
// 			temp.innerText=`${info.currently.temperature} F`;
// 			loc.innerText=info.timezone;
// 			desc.innerText=info.currently.summary;
// 			var icon=info.currently.icon;
// 			setIcon(icon);

// 		}

// 	xhr.send();



// }


