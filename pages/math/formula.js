var times = 10;
var one = 0;
var two = 0;
var rslt = 0;
var sec = 0;

function getRandom() {
  one = Math.floor(Math.random() * 10);
  two = Math.floor(Math.random() * 10) % (11 - one);
  rslt = one + two;
  console.log("one:" + one + " two:" + two + " rslt" + rslt);
}

function getFormula(operator) {
  switch (operator) {
    case "plus":
      getRandom();
      return [one, two, rslt, '+'];
    case "sub":
      getRandom();
      return [rslt, one, two, '-'];
    case "fix":
      getRandom();
      sec = new Date().getSeconds();
      if (sec % 2 == 0) {
        return [one, two, rslt, '+'];
      }
      else {
        return [rslt, one, two, '-'];
      }
  }
}

module.exports.getFormula = getFormula;