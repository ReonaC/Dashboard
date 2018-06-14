function rowFilter() {
	
	var parse = document.createElement('division');
	parse.id = 'columnDivision';
    var section = document.getElementById("parse");
    section.innerHTML = "";
    section.appendChild(parse);
	
	var colDivision = document.getElementById("columnDivision");	
	var description = document.createElement('des');
	description.style.fontFamily = "italic bold 22px arial,serif";
	description.style.fontSize  = "large";
	description.style.fontWeight = 'bold';
	description.innerHTML='Please select single or multiple column to display:';
	colDivision.appendChild(description);
	colDivision.appendChild(document.createElement('br'));
	var makeSpace = document.createElement('br');
	var parse = document.createElement('division');
	colDivision.appendChild(makeSpace);
	var s = getJsonData();	
	
	for(var rows = 0 ; rows < s.length; rows++){
		for (var key in s[rows]) {
			
	var checkbox = document.createElement('input');
	checkbox.type = "checkbox";
	checkbox.name = key;
	checkbox.value = "0"; 
	checkbox.id = key;
	checkbox.style.marginRight = "50px";
	checkbox.style.fontSize  = "large";
	checkbox.style.marginLeft = "15px";
	var desc = document.createElement('des')
	desc.htmlFor = "id";
	desc.appendChild(document.createTextNode(key));
	var section = document.getElementById('columnDivision');
	if(section){
		section.appendChild(desc);
		section.appendChild(checkbox);
	}		
			
		}
		break;
	}
	var makeSpace = document.createElement('br');
	colDivision.style.fontFamily = "italic bold 20px arial,serif";
	colDivision.style.fontWeight = "bold";
	colDivision.style.fontSize  = "large";
	colDivision.appendChild(makeSpace);
	var button= document.createElement('input');
	button.setAttribute('type','button');
	button.setAttribute('value','Submit');
	button.addEventListener('click',function(event){
	var section = document.getElementById('categoryCheckbox');
	section.innerHTML = "";
	document.getElementById("parsed").hidden=false;
    let catogorySelectedValues = new Set();
    let catogoryValues = new Set();
	var s = getJsonData();
	for(var rows = 0 ; rows < s.length; rows++){
		for (var key in s[rows]) {
			var colsValue = key;
			var colValue = s[rows][key];
			if((colsValue != null && colsValue != '') && isNaN(colValue)){
				catogoryValues.add(colsValue);
			} else if(catogoryValues.size == s[rows].length){
				return catogoryValues;
			}
		}	
	}
	for (const value of catogoryValues) {		
		if(selectedColumn(value)){
			catogorySelectedValues.add(value);
		}
	}
	

   
	for (const value of catogorySelectedValues) {		
		var divider = document.createElement("division");
		
		divider.style.fontFamily = "italic bold 22px arial,serif";
	    divider.style.fontWeight = "bold";
	    divider.style.fontSize  = "large";
		divider.style.padding  = "10px";
		divider.style.border = "1px solid #dddddd";
		divider.style.padding  = "10px";
		divider.style.color  = "red";
		divider.style.background  = "rgb(0, 0, 0)";
		divider.style.fontcolor  = "black";
		
		var getValues = document.createElement("select");
		getValues.id = value;
		getValues.multiple = true;
		getValues.style.width = "222px";
		getValues.style.color = "black";
		getValues.style.overflowX = "auto";		
		var descriptio = document.createElement('des')
		descriptio.htmlFor = "id";
		descriptio.appendChild(document.createTextNode(value));
		let setValues = new Set();
	     var s = getJsonData();	
		for(var rows = 0 ; rows < s.length; rows++){
			for (var key in s[rows]) {
				var colsValue = key;
				var colValue = s[rows][key];
				if(value == colsValue) {
					setValues.add(colValue);
				}
			}
		}
		for (const value of setValues) {
			var createSet = document.createElement("option");
			createSet.value = value;
			createSet.selected ="";
			createSet.innerHTML = value;
			getValues.add(createSet);
		}
		descriptio.append(document.createElement("br"));
		descriptio.append(getValues);
		divider.appendChild(descriptio);
		section.append(divider);				
	}
	});
	colDivision.appendChild(document.createElement("br"));
	colDivision.appendChild(button);
		
		

}










	