function findByTimelineBlock(timelineBlock){
  return timelineArray.find((tl)=>{
    //console.log('TL: ',tl, 'timelineBlock.attr(id): ',timelineBlock.attr('id'));
    return Number(timelineBlock.attr('id'))===tl.getId();
  });
};
