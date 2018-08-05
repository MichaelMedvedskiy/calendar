function submitRecord(){
//  console.log(1388);

  var chosenTimeBlocks = getSelectedTimelineBlock();
  console.log('NOW HERE ARE THE SELECTED TIME BLOCKS: ',chosenTimeBlocks);
  if (chosenTimeBlocks.length===0) throw new Error('Ни одной даты не выбрано');

  var chosenTime = getTimeFromTimelineArrayElement(chosenTimeBlocks);

  console.log('The chosen TIME::: ', chosenTime);
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
      $('#confirmBox').animate({'top':'-400px'},200);
    });

    $('#confirmBoxConfirm').unbind('click');
    $('#confirmBoxConfirm').click(function(){
      //console.log('THE CB WAS CONFIRMED!!!!!!!!!!!!!');
      $('#confirmBox').animate({'top':'-400px'},200);
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
