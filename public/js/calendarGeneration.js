var socket = io();

//moment.locale('ru');
//element functionality
var calendarDate = new moment().startOf('month');

function setTimelineClasses(timelineBlock){

  try{
    //timelineBlock.removeClass('timelineLIFree').removeClass('timelineLINot').removeClass('timelineLIUnaval');
    timelineBlock.removeClass().addClass('timelineLI');

var state = timelineBlock.attr('state');
console.log('Timeblock, state :', state);






    if(timelineBlock.attr('state')!=='unavalible'){
      console.log('Got in AVAL');


        if(state==='free') {
          console.log('FREEEEE');
        return   timelineBlock.addClass('timelineLIFree');
      }
        timelineBlock.addClass('timelineLINot');

      }else{
        console.log('AVAL WAS FALSE!!!!!!!!');
        timelineBlock.addClass('timelineLIUnaval');
      }

  }catch{
    console.log('timeline block is not provided');
  }
}




//for adding a border to li
function borderTarget(li){
  console.log('the type of li is: ', li);

  $('.calendarLI').each(function(){
    if(li===this){$(this).removeClass('NotChosenCalendarLI').addClass('ChosenCalendarLI');
  }else{
    $(this).addClass('NotChosenCalendarLI');
  }
  });
};

//so all the blocks are loaded
$( document ).ready(function() {
  // var timeOptions;
  // for(i=0;i<20;i++){
  //   timeOptions[i]=0;
  // }


  document.getElementById("swipeRight").addEventListener("click",function(){
    console.log('right');
    calendarDate.add(1,'month');
    socket.emit('getDaysInMonth', calendarDate);
    setTimelineAnavalible();
  });

  // jQuery('.swipeRight').click(function(){
  //   console.log('right');
  //   calendarDate.add(1,'month');
  //   socket.emit('getDaysInMonth', calendarDate);
  // });

  $('#swipeLeft').click(function(){
    console.log('left');
    calendarDate.subtract(1,'month');
    socket.emit('getDaysInMonth', calendarDate);
    setTimelineAnavalible();
  });

var fillMoment = moment(calendarDate);
fillMoment.add(450,'minutes');
console.log('IM ADDING TIMELINE');
for(var i=0;i<20;i++){
  var li = jQuery('<li></li>');
  li.attr('state','free');
  setTimelineClasses(li);

  var time = (fillMoment).add(30,'minute').format('HH : mm');
li.text(time);
console.log(time);

  $('#timeline').append(li);
}
console.log('IM EXITING TIMELINE');

});

//get full TimeLine

function getTimeLine(){
  return $('.timelineLI').toArray();
}


//set timeline anavalible

function setTimelineAnavalible(){
  var tl = getTimeLine();
  for(var i =0;i<tl.length;i++){
    $(tl[i]).addClass('timelineLIUnaval');
  }
}




//Socket setup
socket.on('connect',function(){
  var ul = jQuery('<ul></ul>').attr('id','calendarUL');
  jQuery('#calendar').append(ul);

  socket.emit('getDaysInMonth', calendarDate);

});




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
    if(event.target.nodeName==='LI'){
    //  console.log('ckicked calendar');
    var txt = $(e.target).text();
    console.log(moment(calendarDate).add(Number(txt)-1,'days'));
    borderTarget(e.target);
      socket.emit('getDailyVisits',{
        day:moment(calendarDate).add(Number(txt)-1,'days')
      });
    }
  });


});


socket.on('fillTimeline', function(body){
  var {visitList} = body;
  console.log('VL: ', visitList);
  var timeline = $('#timeline');
console.log('88888888888888888888888888888TRIGGERED THE FILL TIMELINE');


var elems = document.getElementsByClassName( "timelineLI" );
// Convert the NodeList to an Array
var timelineLI = jQuery.makeArray( elems );


console.log(timelineLI);
//var timelineLI =  $('.timelineLI').toArray();

//for(var i = 0; i< timelineLI.length;i++){
$('.timelineLI').each(function(){

$this = $(this);

  var intTime =$this.text().split(' : ');

  //console.log(intTime);
  var hours = Number(intTime[0]);
  var minutes = Number(intTime[1]);
  var timelineBlockMinutes = hours*60+minutes;
  console.log('Entered timelineLI');
  $this.attr('state','free');
  for(var j=0; j<visitList.length;j++){
    var visit = visitList[j];
    console.log('INDIV: ', visit);
//the math of minutes to identify what's taken
var visitMinutesStart = Number(moment(visit.timestampStart).format('HH'))*60 +  Number(moment(visit.timestampStart).format('mm'));

var visitMinutesFinish = Number(moment(visit.timestampFinish).format('HH'))*60 + Number(moment(visit.timestampFinish).format('mm'));

console.log('Before if');

console.log('minute amount from timestamps: Start: ', visitMinutesStart, "Finish: ", visitMinutesFinish);
if(timelineBlockMinutes>=visitMinutesStart && timelineBlockMinutes<visitMinutesFinish){
$this.attr('state','taken');
}




}

console.log('calling setTimelineClasses from fillTimeline');
setTimelineClasses($this);


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
