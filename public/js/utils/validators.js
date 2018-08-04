function validateName(name){
  if(name.match(/[0-9]/i)){
    throw new Error('Пожалуйтса, введите корректное имя.');
  }
  if(name.length===0) throw new Error('Введите имя.');
};

function validatePhone(phone){
  if (phone.match(/[a-z]/i) || phone.length<7) {
    throw new Error('Номер телефона введен некорректно.');
}
};
