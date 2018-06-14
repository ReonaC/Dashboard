function getFilterValue() {
	let fv = [];
	let catogoryColData = new Map();
	let numericalValue = new Map();
	let selectedValue = new Set();
	var filter = document.getElementById('categoryCheckbox');
	
	for(var rows = 0; rows < filter.children.length ; rows++){
		var rowEle = filter.children[rows].firstElementChild.childNodes;
		var colValue = makeCaseSensitive(rowEle[0].data,"_"); 
		var multipleValue = rowEle[2].options; 
		let catSelected = new Set();
		for(var con = 0 ; con< multipleValue.length; con++){
			if(multipleValue[con].selected){
				catSelected.add(multipleValue[con].value);
			}
		}
		if(catSelected.size > 0){
			catogoryColData.set(colValue,catSelected);
		}	
	}
	fv.push(catogoryColData);
	var NumParsing = new Set();
	let selectColumns = new Set();
	var s = getJsonData();
	for (var sel in s[0]) {
		selectColumns.add(sel);
	}
	let colCategory = new Set();
	var s = getJsonData();
	for(var rows = 0 ; rows < s.length; rows++){
		for (var sel in s[rows]) {
			var colValue = sel;
			var cols = s[rows][sel];
			if((colValue != null && colValue != '') && isNaN(cols)){
				colCategory.add(colValue);
			} else if(colCategory.size == s[rows].length){
				return colCategory;
			}
		}	
	}
	for (const value of selectColumns) {	
		if(!colCategory.has(value)){
			NumParsing.add(value);
		}
	}
	for (const value of NumParsing) {
		if(selectedColumn(value)){
			selectedValue.add(makeCaseSensitive(value,"_"));
		}
	}
	if(selectedValue.size > 0){
		numericalValue.set('numValueSelect',selectedValue);
		numericalValue.set('numbers',document.querySelector('input[name="radioValue"]:checked').value);
		numericalValue.set('numberVAlues',document.getElementById('radioValue').value);
	}
	fv.push(numericalValue);
	
	return fv;
}


function selectedColumn(colValue) {
	var selectedColumn = false;
	var columnDivision = document.getElementById('columnDivision');
	for(var rows = 0 ; rows < columnDivision.children.length; rows++ ){
		var getDivision = columnDivision.children[rows];
		if(getDivision.type == 'checkbox' && getDivision.id == colValue && getDivision.checked) {
			selectedColumn = true
			break;
		}
	}
	return selectedColumn;
}


function makeCaseSensitive(value,divisor){
    var replace = "";
	if(divisor != null){
    value.split(divisor).forEach(function (key, pair) {
        var makeChange = key.toLowerCase();
        replace += (pair === 0 ? makeChange : makeChange[0].toUpperCase() + makeChange.slice(1));
    });
	}else {
		return value;
	}	
    return replace;
}




