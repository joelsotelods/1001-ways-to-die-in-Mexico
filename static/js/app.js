

function init() {
	// Grab a reference to the dropdown select element
	var selector = d3.select("#selDataset");

	// Use the list of sample names to populate the select options
	d3.json("/years").then((years) => {

		console.log(years);
		years.forEach((array_dy) => {
			console.log(array_dy.data_year);
		 	selector.append("option").text(array_dy.data_year).property("value", array_dy.data_year);
		 });

		const firstYear = years[0].data_year;

		buildCharts(firstYear);

	});

}


function buildCharts(year_to_show) {

	console.log("Sample:");
	console.log(year_to_show);

	d3.json("/data_map/"+year_to_show).then( (all_Data) => {
		
		console.log("all_samples:");
		console.log(all_Data);
	 
		create_map(all_Data);
		//pie_chart(all_Data);
		//scatter_plot(all_Datas);
		
	}
	);

}

function optionChanged(new_year) {
	buildCharts(new_year);
}

function get_muertes_by_state() {

	// Declaration of empty arrays to store info
	var data_year = [];
	var entidad_id = [];
	var entidad_desc = [];
	var Latitude = [];
	var Longitude = [];
	var muertes = [];



	d3.json("/data").then( (data) => {



		for(i = 0; i < data.length; i++) {
			console.log(data[i]);
			data_year.push(data[i].data_year);
			entidad_id.push(data[i].ent_ocurr);
			entidad_desc.push(data[i].entidad_ocurrencia);
			Latitude.push(data[i].Latitude);
			Longitude.push(data[i].Longitude);
			muertes.push(data[i].muertes);
		}

		console.log(entidad_desc);


	});
}



// Initialize the dashboard
init();
