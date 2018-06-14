
class chartServices{
	
	constructor(chartType, chartName,chartcategory, displayChartFunction, tags = [], descriptions = [], bgColor = '', options = {}) {
		if(chartType != null){
		this.chartName = chartType.chartName;
		this.chartcategory = chartType.chartcategory;
		this.displayChartFunction = chartType.displayChartFunction;
		this.tags = chartType.tags;
		this.descriptions = chartType.descriptions;
		this.bgColor = chartType.bgColor;
		this.options = chartType.options;
		}
	}
	
	displayChart(){
		var displayChartFunction = this.displayChartFunction;
		new Chart(displayChartFunction, {
			type: this.chartcategory,
			data: {
				labels: this.tags,
				datasets: [{
					label: this.tags,
					data: this.descriptions,
					backgroundColor: this.bgColor
				}]
			},
			options: this.options
		});
	}
	
	chartColors(noOfCols){
		var backColor = colorCodes;
		var backgColors = [];
		for(var i=0;i<noOfCols;i++){
			var randomIndex = Math.floor((Math.random() * (backColor.length-1)) + 0);
			backgColors.push(backColor[randomIndex]);
		}
		return backgColors;
	}
}