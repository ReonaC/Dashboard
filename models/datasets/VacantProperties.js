
function makeVacantPropertiesObjects(getColumns){
	var s = getJsonData();
	for(var rows = 0 ; rows < s.length; rows++){
		var loopvalues = s[rows];
		let vacantPropertiesObject = new VacantProperties(loopvalues[getColumns[0]],loopvalues[getColumns[1]],loopvalues[getColumns[2]],loopvalues[getColumns[3]],loopvalues[getColumns[4]],loopvalues[getColumns[5]],loopvalues[getColumns[6]],loopvalues[getColumns[7]],loopvalues[getColumns[8]],loopvalues[getColumns[9]],loopvalues[getColumns[10]],loopvalues[getColumns[11]],loopvalues[getColumns[12]],loopvalues[getColumns[13]],loopvalues[getColumns[14]],loopvalues[getColumns[15]],loopvalues[getColumns[16]],loopvalues[getColumns[17]],loopvalues[getColumns[18]],loopvalues[getColumns[19]],loopvalues[getColumns[20]],loopvalues[getColumns[21]],loopvalues[getColumns[22]],loopvalues[getColumns[23]],loopvalues[getColumns[24]],loopvalues[getColumns[25]],loopvalues[getColumns[26]],loopvalues[getColumns[27]]);
		rowData.push(vacantPropertiesObject);
	}
}
