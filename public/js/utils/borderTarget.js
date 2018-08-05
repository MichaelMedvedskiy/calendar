function borderTarget(li){
  //console.log('The dayChosen is: ',dayChosen);

  $('.calendarLI').each(function(){
    if(li===this){$(this).removeClass('NotChosenCalendarLI').addClass('ChosenCalendarLI');
  }else{
    $(this).addClass('NotChosenCalendarLI');
  }
  });
};
