$( document ).ready(function() {



    document.getElementById("swipeRight").addEventListener("click",function(){
      console.log('right');
      calendarDate.add(1,'month');
      socket.emit('getDaysInMonth', calendarDate);
      setTimelineUnavalible();
    });



    $('#swipeLeft').click(function(){
      console.log('left');
      calendarDate.subtract(1,'month');
      socket.emit('getDaysInMonth', calendarDate);
      setTimelineUnavalible();
    });


});
