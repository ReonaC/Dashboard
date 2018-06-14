
function checkConditions(con)
{
	let cat = 0;
	let num = 0;
	let selectColoumn;
	let valCat;
	let LatitudeLongitudeValues;
	let cal;
	let columnName = [];
	let mapping = new Map();
	for (let k of con[0].keys()){
		cat = 1;
		num = 0;
		selectColoumn = k;
		valCat = con[0].get(k);
		for(let col of valCat){
			let no = conditionFunction(selectColoumn, col, cat, num);
			mapping.set(col, no);
		}
	}

	for(let numValue of con[1].keys())
	{
		num = 1;
		cat = 0;		
		if(numValue == "numValueSelect"){
			let numValues = con[1].get(numValue);
			
			for(let values of numValues.keys())
			{
				columnName.push(values);
			}
		}
		else if(numValue == "numbers")
		{
			let calName = con[1].get(numValue);
			if(calName == "greaterSymbol"){
				cal = ">=";
			}
			else if(calName == "lesserSymbol"){
				cal = "<=";
			}
			else if(calName == "equalSymbol"){
				cal = "=";
			}
		}
		else if(numValue == "numberVAlues"){
			LatitudeLongitudeValues = con[1].get(numValue);
		}
		
	}
	
	if(num){
		for(let getColumns of columnName)
		{
			let no = conditionFunction(getColumns,LatitudeLongitudeValues, cat, num, cal);
			mapping.set(getColumns, no);
		}
	}
	return mapping;
}


function conditionFunction(selectColoumn,col,cat, num, cal)
{   

		let y;	
		for(var rows=0;rows<getColumns.length;rows++){
			if(selectColoumn === makeCaseSensitive(getColumns[rows],"_")){
				selectColoumn = rows;
				break;
			}
		}
		
		if(cat){
			y = fetchedColumn.filter(ac => ac[selectColoumn] === col );		
		}

		if(num){
			if(cal == '='){
				y = fetchedColumn.filter(ac => ac[selectColoumn] === Number.parseInt(col) );
			}
			else if(cal == '>='){
				y = fetchedColumn.filter(ac => ac[selectColoumn] >= Number.parseInt(col) );
			}
			else{
				y = fetchedColumn.filter(ac => ac[selectColoumn] <= Number.parseInt(col) );
			}
		}
		return y.length;
}