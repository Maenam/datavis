var margin = {top: 10, right: 10, bottom: 10, left: 10};
var width = 900 - margin.left - margin.right;
var height = 700 - margin.top - margin.bottom;

var graphics = d3.select("body")
	.append("svg")
	.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom)
	.append("g")
	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Don't forget to change the data file name!
d3.json("DATAFILE", loadData);

function loadData(error, dataset) {
	if (error) {
		console.log(error);
	}
	else {
		drawData(dataset);
	}
};

function drawData(dataset) {
	
}