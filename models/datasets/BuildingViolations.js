function makeBuildingViolationsObjects(getColumns){
	var s = getJsonData();
	for(var rows = 0 ; rows < s.length; rows++){
		var loopValues = s[rows];
		let buildingViolationsObject = new BuildingViolations(loopValues[getColumns[0]],loopValues[getColumns[1]],loopValues[getColumns[2]],loopValues[getColumns[3]],loopValues[getColumns[4]],loopValues[getColumns[5]],loopValues[getColumns[6]],loopValues[getColumns[7]],loopValues[getColumns[8]],loopValues[getColumns[9]],loopValues[getColumns[10]],loopValues[getColumns[11]],loopValues[getColumns[12]],loopValues[getColumns[13]],loopValues[getColumns[14]],loopValues[getColumns[15]],loopValues[getColumns[16]],loopValues[getColumns[17]],loopValues[getColumns[18]],loopValues[getColumns[19]],loopValues[getColumns[20]],loopValues[getColumns[21]],loopValues[getColumns[22]],loopValues[getColumns[23]],loopValues[getColumns[24]],loopValues[getColumns[25]],loopValues[getColumns[26]],loopValues[getColumns[27]]);
		rowData.push(buildingViolationsObject);
	}
}