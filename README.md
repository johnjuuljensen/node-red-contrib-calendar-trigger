# node-red-contrib-calendar-trigger
First version of calendar-trigger

This is a node for node-red. It adds a trigger to send on the msg.object at one or more specified dates.
It uses the node-cron node, see: https://github.com/ncb000gt/node-cron

You can use it together with mongodb for example, to fetch dates and trigger functions when needed.
<img src="https://github.com/Chris1234567899/node-red-contrib-calendar-trigger/blob/master/screenshots/screenshot1.PNG" />


As input it requires a msg.dates object. This object must be an array of js dates. 
Input: msg.dates have to look like "dates": [ "2016-05-07T11:08:43.605Z","2016-05-07T11:09:43.605Z" ]
