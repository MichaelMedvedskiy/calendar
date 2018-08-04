function setTimelineUnavalible(){

  for(var i =0;i<timelineArray.length;i++){
      timelineArray[i].status=0;
  }
  setTimelineClasses();
};
