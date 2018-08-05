function getSelectedTimelineBlock(){



return timelineArray.filter(function(tl){
  return tl.getStatus() === 3;
});

}
