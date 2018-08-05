function fillTimeline(){

  console.log('IM ADDING TIMELINE');
  for(var i=0;i<timelineArray.length;i++){

    var li = jQuery('<li></li>');

  //  var time = (fillMoment).add(30,'minute').format('HH : mm');

    var time = timelineArray[i].getFormatted();

  li.text(time);
  li.addClass('timelineLI');
  console.log(time);
  //selecting times

  li.attr('id',timelineArray[i].getId());

  // console.log('This is li: ',li);

  //When clicked, is chisen if GREEN
      li.click(function(){
      //  console.log($(this));
        var info = findByTimelineBlock($(this));

    //    console.log('Here is a literallyNowTimestamp ', literallyNowTimestamp, ' Here is info.generateFullTimestamp() ', info.generateFullTimestamp());
      //  if(info.generateFullTimestamp()<literallyNowTimestamp){
          
      //  }else{

            if(info.getStatus()===2){
              info.setStatus(3) ;
            }else if(info.getStatus() ===3){
              info.setStatus(2);
            }

      //  }

        setTimelineClassesForOneBlock($(this));
      });

    $('#timeline').append(li);

  }


    setTimelineClasses();
  console.log('IM EXITING TIMELINE');

};
