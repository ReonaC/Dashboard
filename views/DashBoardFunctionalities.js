
var rowData = [];		
		document.write('<script src="models/charts/chartServices.js"></script>');
		document.write('<script src="models/charts/chartSettings.js"></script>');
		document.write('<script src="models/charts/chartDecorator.js"></script>');
		document.write('<script src="models/charts/pieChart.js"></script>');
		document.write('<script src="models/charts/barChart.js"></script>');
		document.write('<script src="models/charts/doughnutChart.js"></script>');
		document.write('<script src="models/charts/lineChart.js"></script>');
		document.write('<script src="models/charts/polarAreaChart.js"></script>');
		document.write('<script src="models/charts/radarChart.js"></script>');
		document.write('<script src="models/charts/MapController.js"></script>');
		document.write('<script src="models/datasets/populateTable.js"></script>');
		document.write('<script src="models/datasets/affordablerentalHousingDevelopment.js"></script>');
		document.write('<script src="models/datasets/BuildingPermits.js"></script>');
		document.write('<script src="models/datasets/BuildingViolations.js"></script>');
		document.write('<script src="models/datasets/VacantProperties.js"></script>');
		document.write('<script src="models/datasets/AbandonedBuildings.js"></script>');
		
		document.write('<script src="controllers/factory/chartFactory.js"></script>');
		document.write('<script src="controllers/Dataset.js"></script>');
		document.write('<script src="controllers/library/dataframe.js"></script>');
		document.write('<script src="controllers/library/Chart.js"></script>');
		document.write('<script src="controllers/ClassConstructors.js"></script>');
		document.write('<script src="controllers/filter/columnFilter.js"></script>');
		document.write('<script src="controllers/filter/rowFilter.js"></script>');
		document.write('<script src="controllers/filter/checkConditions.js"></script>');


function getJsonData() {
	return JSON.parse(dataObj);
	
}

function EmptyHomePage(){
	var polarAreaChart = document.getElementById('showPolarAreaChart');
	var doughbutChart = document.getElementById('showdoughnutChart');
	var barChart = document.getElementById('showBarChart');
	var pieChart = document.getElementById('showPieChart');
	var lineChart = document.getElementById('showLineChart');
	var radarChart = document.getElementById('showradarChart');
	if(polarAreaChart != null){
		polarAreaChart.remove();
	}
	if(barChart != null){
		barChart.remove();
	}
	
	if(doughbutChart != null){
		doughbutChart.remove();
	}
	if(lineChart != null){
		lineChart.remove();
	}
	
	if(pieChart != null){
		pieChart.remove();
	}
	if(radarChart != null){
		radarChart.remove();
	}
}



function getCharts() {
	EmptyHomePage();
	var filteredValues = getFilterValue();
	var map = checkConditions(filteredValues);
	var selectedChart = [];
	var section = document.getElementById('columnDivision');
	var sec = document.getElementById('getSelectedChartId').children[0];
	for(var rows = 0;rows<sec.children.length;rows++){
		var remainingSection = sec.children[rows];
		if(remainingSection.type == 'checkbox' && remainingSection.checked){
			selectedChart.push(remainingSection.value);
		}
	}
	var tags = [];
	var descriptions = [];
	for (let tag of map.keys()){
		tags.push(tag);
		descriptions.push(map.get(tag));
	}
	
	for(var rows =0;rows<selectedChart.length;rows++){
		document.getElementById('displayChart').style.display = "block";
		let chartFactory = new ChartFactory();
		if(selectedChart[rows] == "barChart"){
	     var showChart = document.createElement('canvas');
		 showChart.id="showBarChart";
		 showChart.class="chartCanvas";
		 document.getElementById('chartArea').appendChild(showChart);
		 let bcDecorator = new barChartDecorator();
			show = chartFactory.getChart("bar");
			show.setValues(tags,descriptions);
			bcDecorator.colorCharts(show);
			
		} else if(selectedChart[rows] == "lineChart"){
			var showChart = document.createElement('canvas');
		   showChart.id="showLineChart";
		   showChart.class="chartCanvas";
		   document.getElementById('chartArea').appendChild(showChart);
			let lcDecorator = new lineChartDecorator();
			show = chartFactory.getChart("line");
			show.setValues(tags,descriptions);

		} else if(selectedChart[rows] == "pieChart"){
			var showChart = document.createElement('canvas');
		   showChart.id="showPieChart";
		   showChart.class="chartCanvas";
		   document.getElementById('chartArea').appendChild(showChart);
			let pcDecorator = new pieChartDecorator();
			show = chartFactory.getChart("pie");
			show.setValues(tags,descriptions); 
			pcDecorator.colorCharts(show);
			
		} else if(selectedChart[rows] == "polarAreaChart"){
			var showChart = document.createElement('canvas');
		   showChart.id="showPolarAreaChart";
		   showChart.class="chartCanvas";
		   document.getElementById('chartArea').appendChild(showChart);
			let pAcDecorator = new polarAreaChartDecorator();
			show = chartFactory.getChart("polarArea");
			show.setValues(tags,descriptions); 
			pAcDecorator.colorCharts(show);
        
        } else if(selectedChart[rows] == "radarChart"){
			var showChart = document.createElement('canvas');
		   showChart.id="showradarChart";
		   showChart.class="chartCanvas";
		   document.getElementById('chartArea').appendChild(showChart);
			let rcDecorator = new radarChartDecorator();			
			show = chartFactory.getChart("radar");
			show.setValues(tags,descriptions); 
			rcDecorator.colorCharts(show);			
					
		}else if(selectedChart[rows] == "doughnutChart"){
			var showChart = document.createElement('canvas');
		   showChart.id="showdoughnutChart";
		   showChart.class="chartCanvas";
		   document.getElementById('chartArea').appendChild(showChart);
			let dcDecorator = new doughnutChartDecorator();		
			show = chartFactory.getChart("doughnut");
			show.setValues(tags,descriptions); 
			dcDecorator.colorCharts(show);
			
		}
		
		 
		show.displayChart();
		
	}
}




//============================================Map================================================//

class Filtering{
	constructor(){}
    valuesToFilter(wholeData, LatitudeLongitudeValues){
      var values = new Array();
      for(var latLong in wholeData) {
       var getObject = new Object();
       for(var rows in LatitudeLongitudeValues){
        var y = wholeData.map(parseVAlues => { return parseVAlues[LatitudeLongitudeValues[rows]] });
          getObject[LatitudeLongitudeValues[rows]] = y[latLong];
      }
      values.push(getObject);
      }
      return values;
    }
}


function getValuesForMap(){	
	var getMaps = document.getElementById("maps");	
	var section = document.getElementById("maps");
	var section = document.getElementById("displayingMap");
	section.style.display = "block";
	let wholeData = getJsonData();
	var LatitudeLongitudeValues = ["Latitude","Longitude"];
	let la = new Filtering();
	let latlng = la.valuesToFilter(wholeData, LatitudeLongitudeValues);
	var mapCannotDisplayed = document.createElement("p");
	mapCannotDisplayed.innerHTML = "Map cannot be Displayed";
	section.appendChild(mapCannotDisplayed);
	let mapSettings = new MapConfig();
  mapSettings.center(latlng[0]["Latitude"],latlng[0]["Longitude"],section);
	 for(var rows = 0;rows < latlng.length;rows++)
    {
      var lat = latlng[rows]['Latitude'];
      var lng = latlng[rows]['Longitude'];
			mapSettings.drawMap(lat,lng);
     }
}

function mapArea(){
  var section = document.getElementById("mapArea");
  section.style.display = "block";
  
	var value = "<button id='maps' style = 'background-color: #555555; border: none;color: white;padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; '  > Display Map </button>";
	section.innerHTML = value;
    var getMaps = document.getElementById("maps");
    maps.addEventListener('click',function(){
    if(maps.innerText == "Display Map"){
      getValuesForMap();
      maps.innerText = "Remove Map";
	  maps.style.background = " #A52A2A";
    }
    else if(maps.innerText == "Remove Map"){
      maps.innerText = "Remove Map";
      RemoveMAps();
	  maps.innerText = "Display Map";
	  maps.style.background = " #555555 ";
    }
  });
}

function RemoveMAps(){
	var section = document.getElementById("displayingMap");
	section.style.display = "none";	
}
