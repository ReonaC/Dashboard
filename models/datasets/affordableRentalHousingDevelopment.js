
function makeAffordableRentalHousingDevelopmentsObjects(getColumns){
	var s = getJsonData();
	for(var row = 0 ; row < s.length; row++){
		var loopValues = s[row];
		let affordableRentalHousingDevelopmentsObject = new AffordableRentalHousingDevelopments(loopValues[getColumns[0]],loopValues[getColumns[1]],loopValues[getColumns[2]],loopValues[getColumns[3]],loopValues[getColumns[4]],loopValues[getColumns[5]],loopValues[getColumns[6]],loopValues[getColumns[7]],loopValues[getColumns[8]],loopValues[getColumns[9]],loopValues[getColumns[10]],loopValues[getColumns[11]],loopValues[getColumns[12]],loopValues[getColumns[13]],loopValues[getColumns[14]]);
		rowData.push(affordableRentalHousingDevelopmentsObject);
	}
}