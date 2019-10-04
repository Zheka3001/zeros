module.exports = function zeros(expression) {

  function checkDeuceAndFive (index) {
    while (index % 5 == 0) {
      index /= 5;
      fiveValue++;
    }
    
    while (index % 2 == 0) {
      index /= 2;
      deuceValue++;
    }
  }
  
  function checkSingleExclamationMark(factorial) {
    let ExclamationMarkNumber = 0;
    for (let i = 0; i < factorial.length; i++) {
      if (factorial[i] == '!') ExclamationMarkNumber++;
    }
    if (ExclamationMarkNumber == 1) return true;
    else return false;
  }

  let factorials = expression.split('*');
  let deuceValue = 0;
  let fiveValue = 0;

  for (let i = 0; i < factorials.length; i++) {
    let factorial = factorials[i];
    if (checkSingleExclamationMark(factorial)) {
      let number = factorials[i].split('!'); 
      number.pop();
      for (let k = +number; k > 0; k--) {
        checkDeuceAndFive(k);
      }
    } else {
      let number = factorials[i].split('!!'); 
      number.pop();
      for (let k = +number; k > 0; k-=2) {
        checkDeuceAndFive(k);
      }
    }
  }
  if (deuceValue < fiveValue) return deuceValue;
  else return fiveValue;
}