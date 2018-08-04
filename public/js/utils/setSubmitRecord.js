function submitRecord(){
//  console.log(1388);

  var chosenTime = getSelectedTimelineBlock();
  if (chosenTime.length===0) throw new Error('Ни одной даты не выбрано');

  var chosenTime = getTimeFromTimelineArrayElement(chosenTime);

  var userName = $('#userNameInput').val();
  var userNumber = $('#userPhoneInput').val();
  validateName(userName);
  validatePhone(userNumber);

  $('#confirmBoxTextDate').text(`${chosenTime.startTimestamp.locale('ru').format('MMMM, DD')} число`);
  $('#confirmBoxTextTime').text(`С ${chosenTime.startTimestamp.format('HH : mm')} до ${chosenTime.endTimestamp.format('HH : mm')}`);
  $('#confirmBoxTextName').text(`Ваше имя: ${userName}`);
  $('#confirmBoxTextPhone').text(`Ваш номер телефона: ${userNumber}`);

    $('#confirmBox').animate({'top':'30%'},200);

    $('#confirmBoxDeny').click(function(){
      $('#confirmBox').animate({'top':'-30%'},200);
    });


    $('#confirmBoxConfirm').click(function(){
      $('#confirmBox').animate({'top':'-30%'},200);
      socket.emit('recordVisit',{
        timestampStart: chosenTime.startTimestamp.valueOf(),
        timestampFinish: chosenTime.endTimestamp.valueOf(),
        name: userName,
        phone: userNumber
      });
    });
};


function setSubmitRecord(){
$('#signupButton').click(submitRecord);
};
