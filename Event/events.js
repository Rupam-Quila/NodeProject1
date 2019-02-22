var events=require('events');
var eventEmiter=new events.EventEmitter();

//******************************************************

//Create Event Handler
var myEventHandaler=function(){
    console.log("Hello Rupam");

    //evento2 fire into event handler
    eventEmiter.emit('evento2');
}

var myEventHandaler2=function(){
    console.log("Hello Rupam I am in event1");
}

eventEmiter.on('evento', myEventHandaler);
eventEmiter.on('evento2', myEventHandaler2);

eventEmiter.emit('evento');


//******************************************************

//evento3 assign into direct function 
eventEmiter.on('evento3', function(){
    console.log("Hello I'm in event3")
})

eventEmiter.emit('evento3');

//evento4 assign into direct function with parameter
eventEmiter.on('evento4', function(msg){
    console.log(msg)
})

eventEmiter.emit('evento4', "Hi!, I'm in evento4");


//******************************************************

//evento5 assign into direct function with increment
var i=0;
eventEmiter.on('evento5', function(){
    console.log(++i)
})

eventEmiter.emit('evento5');
eventEmiter.emit('evento5');
eventEmiter.emit('evento5');

//******************************************************
//But if I use once key then it file only one time
eventEmiter.once('evento6', function(){
    console.log(++i)
})

eventEmiter.emit('evento6');
eventEmiter.emit('evento6');
eventEmiter.emit('evento6');


//******************************************************

//evento5 assign into direct function with For Loop
eventEmiter.on('evento7', function(){
    console.log(i)
})
for(i=0 ; i<=5; i++) {    
eventEmiter.emit('evento7');
}