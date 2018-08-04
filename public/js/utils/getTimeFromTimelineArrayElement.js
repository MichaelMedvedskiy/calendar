function getTimeFromTimelineArrayElement(elements){

var chosenOnes = elements;
var startTimeCode = elements[0].generateFullTimestamp().valueOf();
var finalId =elements[0].getId();
var endTimeCode;
for(var i = 0;i<elements.length;i++){

  if( elements[i+1]!==undefined && (elements[i+1].getId() === (elements[i].getId()) +1)){
  //  endTimeCode = elements[i].generateFullTimestamp().valueOf();
    finalId++;
    continue;

  }
  break;
}
endTimeCode = timelineArray[finalId].generateFullTimestamp().add(timePeriodInMinutes,'minutes').valueOf();

return {
  startTimestamp: new moment(startTimeCode),
  endTimestamp: new moment(endTimeCode)
};


  //
  // console.log(elements);
  //   var finalDateResult = {
  //       day: dayChosen,
  //       start:{
  //         hour: elements[0].hours,
  //         minute: elements[0].minutes
  //       },
  //       finish:{
  //         hour: elements[0].hours,
  //         minute: elements[0].minutes
  //       }
  //
  //     };
  //
  //   for(var i = 0;i<elements.length;i++){
  //     finalDateResult.finish.hour = elements[i].hours;
  //     finalDateResult.finish.minute = elements[i].minutes;
  //     finalId++;
  //     if( elements[i+1]!==undefined && (elements[i+1].id === (elements[i].id) +1)){
  //       continue;
  //     }
  //       break;
  //   }
  //   //finishTime is the time of next block. To be more user friendly
  //   finalDateResult.finish.hour = timelineArray[finalId].hours;
  //   finalDateResult.finish.minute = timelineArray[finalId].minutes;
  // return finalDateResult;
};
