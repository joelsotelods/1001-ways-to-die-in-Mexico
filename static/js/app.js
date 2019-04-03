

function init() {

	d3.json("/data").then( (data) => {

		console.log("metadata x:");
		console.log(data);


	});
}



// Initialize the dashboard
init();
