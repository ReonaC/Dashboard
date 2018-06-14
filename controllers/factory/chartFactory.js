
class ChartFactory{

	getChart(chartName){
		
		let chartType = null;
		
		if(chartName == "pie"){
			chartType = new pieChart();
		
		} else if(chartName == "line"){
			chartType = new lineChart();
		
        }else if(chartName == "doughnut"){
			chartType = new doughnutChart();
		}		
			
	     else if(chartName == "bar"){
			chartType = new barChart();
		 }
        
        else if(chartName == "polarArea"){
			chartType = new polarAreaChart();
		 }
        else if(chartName == "radar"){
			chartType = new radarChart();
		 }			
				
		
		
		return chartType;
	}
	
}



