
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

	//clean html to make sure everything gets rewriten well
	var pie_selector = d3.select("#pie_1_container");
	pie_selector.html("");
	d3.select('#pie_1_container').html('<div id="pie_motivate"></div>');

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

	var barchart_selector = d3.select("#bar_chart_container");
	barchart_selector.html("");
	d3.select('#bar_chart_container').html('<div id="bar_chart"></div>');

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



function bar_chart_derechohabiencia(data_process){

	var barchart_selectord = d3.select("#derecho_bar_container");
	barchart_selectord.html("");
	d3.select('#derecho_bar_container').html('<div id="derecho_bar"></div>');

	// Declaration of empty arrays to store info
	var data_year = [];
	var derechohab = [];
	var derechohabiencia = [];
	var muertes = [];


	for(i = 0; i < data_process.length; i++) {
		console.log(data_process[i]);
		data_year.push(data_process[i].data_year);
		derechohab.push(data_process[i].derechohab);
		derechohabiencia.push(data_process[i].derechohabiencia);
		muertes.push(data_process[i].muertes);
	}


	var data = [
	{
		x: derechohabiencia,
		y: muertes,
		type: 'bar'
	}
	];

	Plotly.newPlot('derecho_bar', data);


}