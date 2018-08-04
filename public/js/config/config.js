var timelineArray=[];
var timelineAmount=0;

var trileMoment = new moment(0);
timePeriodInMinutes = 30;
trileMoment.add(5,'hours');
function generateTimelineArray(){
  // for(var i=8;i<18;i++){
  //   for(var j =0;j<60;j+=30){
  //     timelineArray.push(
  //     //   {
  //     //   id: timelineAmount,
  //     //   status:0,
  //     //   hours: i,
  //     //   minutes: j
  //     // }
  //     new TimelineBlock()
  //   );
  //     timelineAmount++;
  //   }
  // }

for( var i = 0; i< 20;i++){
  timelineArray[i]=new TimelineBlock(trileMoment.valueOf(),timelineAmount,0);
  trileMoment.add(timePeriodInMinutes,'minutes');
  timelineAmount++;
}


};


generateTimelineArray();

// var timelineArray = [{
//   status:0,
//   hours: 8,
//   minutes: 0
// },{
//   status:0,
//   hours: 8,
//   minutes: 30
// },{
//   status:0,
//   hours: 9,
//   minutes: 0
// },{
//   status:0,
//   hours: 9,
//   minutes: 30
// },{
//   status:0,
//   hours: 10,
//   minutes: 0
// },{
//   status:0,
//   hours: 10,
//   minutes: 30
// },{
//   status:0,
//   hours: 11,
//   minutes: 0
// },{
//   status:0,
//   hours: 11,
//   minutes: 30
// },{
//   status:0,
//   hours: 12,
//   minutes: 0
// },{
//   status:0,
//   hours: 12,
//   minutes: 30
// },{
//   status:0,
//   hours: 13,
//   minutes: 0
// },{
//   status:0,
//   hours: 13,
//   minutes: 30
// },{
//   status:0,
//   hours: 14,
//   minutes: 0
// },{
//   status:0,
//   hours: 14,
//   minutes: 30
// },{
//   status:0,
//   hours: 15,
//   minutes: 0
// },{
//   status:0,
//   hours: 15,
//   minutes: 30
// },{
//   status:0,
//   hours: 16,
//   minutes: 0
// },{
//   status:0,
//   hours: 16,
//   minutes: 30
// },{
//   status:0,
//   hours: 17,
//   minutes: 0
// },{
//   status:0,
//   hours: 17,
//   minutes: 30
// }];
