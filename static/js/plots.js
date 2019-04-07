
function create_map(data) {

	//clean html to make sure everything gets rewriten well
	var bubble_selector = d3.select("#map_container");
	bubble_selector.html("");
	d3.select('#map_container').html('<div id="map"></div>');

	// Create a map object
	var myMap = L.map("map", {
		center: [24, -101.26],
		zoom: 5
	});


	L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
		attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
		maxZoom: 18,
		id: "mapbox.streets-basic",
		accessToken: API_KEY
	}).addTo(myMap);


	for(i = 0; i < data.length; i++) {

		L.circle([data[i].Latitude,data[i].Longitude], {
			fillOpacity: 0.75,
			color: "black",
			fillColor: markerColor(data[i].muertes),

			// Setting our circle's radius equal to the output of our markerSize function
			radius: markerSize(data[i].muertes)
		}).bindPopup("<h1>" + data[i].entidad_ocurrencia + "</h1> <hr> <h3>Death count: " + data[i].muertes + "</h3>").addTo(myMap);

		console.log(data[i].Latitude);
		console.log(data[i].Longitude);
		console.log(data[i].entidad_ocurrencia);
		console.log(data[i].data_year);
		console.log(data[i].muertes);
	}

}

// Define a markerSize
function markerSize(deaths) {
	if (deaths<10000) {
		return deaths*3
	} 
	else if (deaths<30000) {
		return deaths*2
	} else { 
		return deaths
	}

}

function markerColor(deaths) {
	if (deaths<10000) {
		return "green"
	} 
	else if (deaths<30000) {
		return "yellow"
	} else { 
		return "red"
	}

}


function pie_top_10(data_process){

	// Declaration of empty arrays to store info
	var data_year = [];
	var lista_mex_desc = [];
	var muertes = [];


	for(i = 0; i < data_process.length; i++) {
		console.log(data_process[i]);
		data_year.push(data_process[i].data_year);
		lista_mex_desc.push(data_process[i].lista_mex_desc);
		muertes.push(data_process[i].muertes);
	}

	var data = [{
		values: muertes,
		labels: lista_mex_desc,
		type: "pie"
	}];

	var layout = {
		height: 600,
		width: 800
	};

	Plotly.plot("pie_motivate", data, layout);


}

function bar_chart_gender(data_process){

	// Declaration of empty arrays to store info
	var data_year = [];
	var id_gender = [];
	var sexo_desc = [];
	var muertes = [];


	for(i = 0; i < data_process.length; i++) {
		console.log(data_process[i]);
		data_year.push(data_process[i].data_year);
		id_gender.push(data_process[i].id_gender);
		sexo_desc.push(data_process[i].sexo_desc);
		muertes.push(data_process[i].muertes);
	}


	var data = [
	{
		x: sexo_desc,
		y: muertes,
		type: 'bar'
	}
	];

	Plotly.newPlot('bar_chart', data);


}

function get_decrechohabientes(data_process){

	// // Declaration of empty arrays to store info
	var cantidad_derecho = [];
	var data_year = [];
	var derechi_habiencia = [];
	var derechohab = [];

	for(i = 0; i < data_process.length; i++) {
		console.log(data_process[i]);
		cantidad_derecho.push(data_process[i].cantidad_derecho);
		data_year.push(data_process[i].data_year);
		derechi_habiencia.push(data_process[i].derechi_habiencia);
		derechohab.push(data_process[i].derechohab);
	}

	console.log(data_process);

	var data = [{
		type: 'bar',
		x: cantidad_derecho,
		y: derechi_habiencia,
		orientation: 'h',
		marker: {
			color: 
			["rgba(204,	0,	0, 0.2)", 
			"rgba(204, 0, 255, 0.2)",
			"rgba(0,	153,	255, 0.2)",
			"rgba(255, 153,	51, 0.2)",
			"rgba(102, 0, 204, 0.2)",
			"rgba(153, 153, 204, 0.2)",
			"rgba(255, 205, 86, 0.2)",
			"rgba(75, 192, 192, 0.2)",
			"rgba(54, 162, 235, 0.2)",
			"rgba(153, 102, 255, 0.2)",
			"rgba(201, 203, 207, 0.2)"],
			width: 1
		  }
	  }];
	  
	  Plotly.newPlot('myDiv', data);

}

function bubble_deaths(all_Data) {

	console.log("SAMPLE IN BUBBLE: ")
	console.log(all_Data)

	// Declaration of empty arrays to store info
	var latitud = [];
	var longitud = [];
	var year = [];
	var entidad = [];
	var entidad_desc = [];
	var muertes = [];

	for(i = 0; i < all_Data.length; i++) {
		latitud.push(all_Data[i].Latitude);
		longitud.push(all_Data[i].Longitude);
		year.push(all_Data[i].data_year);
		entidad.push(all_Data[i].ent_ocurr);
		entidad_desc.push(all_Data[i].entidad_ocurrencia);
		muertes.push(all_Data[i].muertes);
	}

		var trace1 = {
		x: longitud,
		y: entidad_desc,
		mode: 'markers',
		marker: {
			size: muertes/2
		}
		};

		// var trace1 = {
		// x: [1, 2, 3, 4],
		// y: [10, 11, 12, 13],
		// mode: 'markers',
		// marker: {
		// 	size: [40, 60, 80, 100]
		// }
		// };

		var data = [trace1];

		var layout = {
		title: 'Marker Size',
		showlegend: false,
		height: 400,
		width: 480
		};

		Plotly.newPlot("bubble_container", data, layout, {showSendToCloud:true});
}

