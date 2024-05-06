export const SineWaveSettings = {
	 refreshInterval	: 500
	,display			: 'refresh'
	,chart : {
		chart: {
			 id		: 'realtime'
			,type 	: 'line'
			
			,zoom: {
				enabled: false
				}
				
			,animations	: {
				 enabled			: false
				,easing				: 'linear'
				,dynamicAnimation 	: {
					speed	: 1000
					}
				}
			}
			
		,markers: {
			 size			: 2
			,colors			: ['#ccccff80']
			,strokeColors	: ['#ccccff80']
			
			,hover			: {
				 colors			: ['#fff']
				,strokeColors	: ['#fff']
				}
			}
			
		,xaxis : {
			 type		: 'integer'
			,min : 0 , max : 100
			,tickAmount	: 10
			}
			
		,yaxis : {
			 type		: 'integer'
			,min		: -1
			,max		: 1
			,floating	: false
			,tickAmount	: 8
			
			,labels		: {
				formatter : function (val, index) {
					const labels = [-1, -0.75, -0.5, -0.25, 0, 0.25, 0.5, 0.75, 1];
					return labels[index];
					}
				}
				
			,forceNiceScale: false // Prevents the y-axis from scaling to non-integer values
			}
		 ,stroke: {
			 show		: true
			,curve		: 'straight'
			,lineCap	: 'butt'
			,width		: 5
			,dashArray	: 0 
			}
			
		,tooltip : {
		   enabled : true
		   
		  ,y : {
				formatter: function(value, data) {
					return value;
					}
				}
			}
		}
	};