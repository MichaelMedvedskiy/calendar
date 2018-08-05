function generateErrorMessage(e){
  var noteBox =   $('#notifications');

  var message = e.message.toString();
  if(message.search('Uncaught Error')>=0){
    message = message.substring(16)
  }

noteBox.removeClass().addClass('errorMessage').text(message);
noteBox.animate({'left': '5%'});

setTimeout(function(){
  noteBox.animate({'left': '-20%'});
},3000);
}
