module.exports = function(RED) {
    function CalendarTriggerNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        this.on('input', function(msg) {
		
			var dates = msg.dates;
			var CronJob = require('cron').CronJob;
			
			for(var i = 0; i<dates.length; i++){
				node.log("received a date: "+dates[i]);
				var date = new Date(dates[i]);
				node.log("parsed the date: "+date);
				
				var job = new CronJob(date, function() {
					node.log("executing the job now");
					node.send(msg);
				}, function () {
					node.log("onComplete: the job is done");
				},
				true, 
				'Europe/Berlin'//dates[i].getTimezoneOffset
				);
				
			}
			//geht :)
			
			
			
			
			
			
			
			
			
            
        });
    }
    RED.nodes.registerType("calendar-trigger",CalendarTriggerNode);
}