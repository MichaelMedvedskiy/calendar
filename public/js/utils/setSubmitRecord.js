function submitRecord(){
  console.log(1388);

  var chosenTime = getSelectedTimelineBlock();
  if (chosenTime.length===0) throw new Error('Ни одной даты не выбрано');

  var chosenTime = getTimeFromTimelineArrayElement(chosenTime);

  $('#confirmBoxTextDate').text(`${chosenTime.startTimestamp.format('YYYY MM DD HH mm')} число`);
  $('#confirmBoxTextTime').text(`${chosenTime.endTimestamp.format('DD HH mm')}`);

    $('#confirmBox').animate({'top':'30%'},200);
};


function setSubmitRecord(){
$('#signupButton').click(submitRecord);
};
