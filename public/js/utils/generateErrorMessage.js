function generateErrorMessage(e){
  var noteBox =   $('#notifications');

noteBox.addClass('errorMessage').text(e.message.toString().substring(16));
noteBox.animate({'left': '5%'});

setTimeout(function(){
  noteBox.animate({'left': '-20%'});
},3000);
}
