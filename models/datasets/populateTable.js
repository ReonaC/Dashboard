
function getData(){
	
	let DataFrame = dfjs.DataFrame;
    var dataSets = document.getElementById("datasetValues");
    fetchedData = dataSets.options[dataSets.selectedIndex].value;
    DataFrame.fromCSV(fetchedData).then(df => 
    {
        values = df.toJSON('DashBoard.json');  
		dataObj = values;
		mapArea();
        getColumns = df.listColumns();		
		fetchedColumn = df.toArray();
		var Table = document.getElementById('gettableData');
		Table.border = "1";
        var draw = "<table id='tablePaging' class='table-hover table-responsive table table-bordered'  style=' display:block; overflow: auto; ' height='600' width=100% height='600'><thead><tr>";
	for (var rows =0; rows < getColumns.length; rows++) {
		draw+= "<th>" +getColumns[rows]+ "</th>";
	}
	draw+= "</tr></thead>";
	draw+= "<tbody>";
	for (var rows = 1; rows < fetchedColumn.length; rows++) {
		draw+= "<tr>";
		for(var columns=0;columns<fetchedColumn[rows].length;columns++){
		draw+= "<td>" +fetchedColumn[rows][columns]+" </td>";
		}
		draw+="</tr>";
	}
	
	draw+="</table>";
	 
    Table.innerHTML = draw;
	rowFilter();
			$('#tablePaging').DataTable({
				"info":     false,
				"paging":   true,
				"ordering": true,								
			});		
    });
	
	 if(fetchedData == "AffordableRentalHousingDevelopments.csv"){
		makeAffordableRentalHousingDevelopmentsObjects(getColumns);
	} else if(fetchedData == "BuildingPermits.csv"){
		makeBuildingPermitsObjects(getColumns);
	}else if(fetchedData == "BuildingViolations.csv"){
		makeBuildingViolationsObjects(getColumns);
	} else if(fetchedData == "VacantProperties.csv"){
		makeVacantPropertiesObjects(getColumns);
	} else if(fetchedData == "AbandonedBuildings.csv"){
		makeAbandonedBuildingsObjects(getColumns);
	}

}