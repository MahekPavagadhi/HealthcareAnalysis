var chart = new CanvasJS.Chart("dailyStepsContainer");
createGauge(chart);
//Function for gauge
function createGauge(chart){
		//Caluculation of remaining parameters to render gauge with the help of doughnut
    gauge.unoccupied = {
                      y: gauge.maximum - gauge.data.y , 
                      color: "#DEE2DE",
                      toolTipContent: null, 
                      highlightEnabled: false,
                      click : function (){ gauge.unoccupied.exploded = true; }
                  }
   gauge.data.click = function (){ gauge.data.exploded = true; };
   if(!gauge.data.color)
    	gauge.data.color = "#008080";
   gauge.valueText = {text: gauge.data.y.toString(), verticalAlign :"center", fontColor: "#008080"};
		var data = {
        	  type: "doughnut",
                  backgroundColor: "black",
        	   dataPoints: [
                  {
                    y: gauge.maximum ,
                    color: "transparent",
                    toolTipContent: null
                  },
                  gauge.data,
                  gauge.unoccupied
                ],
      };
    
    if(!chart.options.data)
    	chart.options.data = [];
    chart.options.data.push(data);
    
    if(gauge.title){
    	chart.options.title = gauge.title;
    }
    //For showing value
    if(!chart.options.subtitles)
    	chart.options.subtitles = [];
    chart.options.subtitles.push(gauge.valueText);
    chart.render();
}
