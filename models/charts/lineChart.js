class lineChart extends chartSettings{

  constructor() {
    super({
      chartcategory: 'line',
      displayChartFunction: document.getElementById("showLineChart"),
      tags: [],
	  descriptions: [],
	  bgColor: '',
	  options:{
			title: {
				display: true,
				text: 'LINECHART',
				fullWidth: true,
				fontSize: 22,
				fontStyle: 'normal',
				position: 'top'
			}
		}
    });
  }	
}


class lineChartDecorator extends chartDecorator {
}
