function generateConfirmMessage(message){
  var noteBox =   $('#notifications');

noteBox.removeClass().addClass('confirmMessage').text(message);
noteBox.animate({'left': '5%'});

setTimeout(function(){
  noteBox.animate({'left': '-20%'});
},3000);
};
