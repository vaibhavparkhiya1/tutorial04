var events = require('events');
var em = new events.EventEmitter();
//creata event
em.on('myEvent',function(data) {
  count = 0;
  data.forEach(i=>{
      count= count+i;
  });
  console.log(count);
});
//fire event
em.emit('myEvent',[1,2,3,4]);
