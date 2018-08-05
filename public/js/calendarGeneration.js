var socket = io();




$( document ).ready(function() {

  fillTimeline();
  setSubmitRecord();

  window.addEventListener("error", function (e){
  generateErrorMessage(e);
  }
);
});

//get full TimeLine

function getTimeline(){
  return $('.timelineLI').toArray();
}


//set timeline anavalible






//Socket setup
socket.on('connect',function(){
  var ul = jQuery('<ul></ul>').attr('id','calendarUL');
  jQuery('#calendar').append(ul);

  socket.emit('getDaysInMonth', calendarDate);

});



//filling days
socket.on('generateMonthCalendar',function(body){

  var dayN = body.dayN;
  $('#monthYear').text( body.monthYear);
  var ul = jQuery('#calendarUL');
  ul.empty();


  for(var i = 1;i<=dayN;i++){
    li = jQuery('<li></li>').text(i).attr('class', 'calendarLI');

    ul.append(li);


  }


  ul.unbind('click');

  ul.click(function(e){
    if(e.target.nodeName==='LI'){
//      try{
        //  console.log('ckicked calendar');
        var txt = $(e.target).text();
        //Setting the dayChosen Global var
        dayChosen = Number(txt);

        //console.log(moment(calendarDate).add(Number(txt)-1,'days'));
        borderTarget(e.target);
          socket.emit('getDailyVisits',{
            day:moment(calendarDate).add(dayChosen-1,'days')
          });
      // }catch(){
      //   console.log('An error occured, plesae reload the page');
      // }

    }
  });


});


socket.on('fillTimeline', function(body){
  var {visitList} = body;

$('.timelineLI').each(function(index){

  //console.log(intTime);
  var fullTimestamp = timelineArray[index].generateFullTimestamp();
  // var hours = timelineArray[index].hours;
  // var minutes = timelineArray[index].minutes;
  // var timelineBlockMinutes = hours*60+minutes;
  //
  // console.log('Entered timelineLI');
  timelineArray[index].setStatus(2);

  for(var j=0; j<visitList.length;j++){
    var visit = visitList[j];
  //  console.log('INDIV: ', visit);
//the math of minutes to identify what's taken
//Turning timestamps into hours and minutes
// var visitMinutesStart = Number(moment(visit.timestampStart).format('HH'))*60 +  Number(moment(visit.timestampStart).format('mm'));
//
// var visitMinutesFinish = Number(moment(visit.timestampFinish).format('HH'))*60 + Number(moment(visit.timestampFinish).format('mm'));
var timelineBlockTimestamp = timelineArray[index].generateFullTimestamp();
console.log('Before if');

//console.log('minute amount from timestamps: Start: ', visitMinutesStart, "Finish: ", visitMinutesFinish);
if(timelineBlockTimestamp>=visit.timestampStart && timelineBlockTimestamp<visit.timestampFinish){
//$this.attr('state','taken');
timelineArray[index].status=1;
}




}

// console.log('calling setTimelineClasses from fillTimeline');


});
//console.log('The timelineArray : ',timelineArray);

setTimelineClasses();










});

socket.on('timeTaken',function(e){
  if(e) {throw new Error(e);}else{
  throw new Error('Это время уже занято, выберите другое.');}
});

socket.on('savedSuccessfully',function(){

  generateConfirmMessage('Ваше время записано!');
});

socket.on('dataUpdated',function(){
  socket.emit('getDailyVisits',{
    day:moment(calendarDate).add(dayChosen-1,'days')
  });
});

  //
  // visitList.forEach(function(visit){
  //   var visitMinutesStart = Number(moment(visit.timestampStart).format('HH'))*60 +  Number(moment(visit.timestampStart).format('mm'));
  //   var visitMinutesFinish = Number(moment(visit.timestampFinish).format('HH'))*60 + Number(moment(visit.timestampFinish).format('mm'));
  //
  //   console.log(visitMinutesStart, visitMinutesFinish);
  //
  //     console.log(timelineBlockMinutes);
  //     //for now - all re avalible
  //
  //     if(timelineBlockMinutes>=visitMinutesStart && timelineBlockMinutes<visitMinutesFinish){
  //
  //
  //
  //     }
  //     setTimelineClasses(timelineLI);
  //   });







  //
  //   var li = jQuery('<li></li>').addClass('timelineLIUnaval');
  //   var time = (fillMoment).add(30,'minute').format('HH : mm');
  // li.text(time);
  // console.log(time);

  //  $('#timeline').append(li);



//  var li = jQuery('<li></li>').text('ooo');


  //
  //
  // $('#timeline').append(li);
//});
