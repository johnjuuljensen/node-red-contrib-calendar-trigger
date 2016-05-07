# node-red-contrib-calendar-trigger
First version of calendar-trigger

This is a node for node-red. It adds a trigger to send on the msg.object at one or more specified dates.
It uses the node-cron node, see: https://github.com/ncb000gt/node-cron

You can use it together with mongodb for example, to fetch dates and trigger functions when needed.

As input it requires a msg.date object. This object must be an array of js dates.
