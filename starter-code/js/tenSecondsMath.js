// Use this file to write the logic of your game, the needed attrs and functions

var TenSecondsMathGame = function(operator,limit) {

   this.operator=operator;
   this.limit=limit;
   this.numberOne=0;
   this.numberTwo=0;
   this.result=0;
   this.op='';
   this.currentOperator=0;

};

// Returns a random integer between [1..numberLimit]
TenSecondsMathGame.prototype.getRandomNumber=function(){
  return Math.floor((Math.random() * this.limit) + 1);

};

TenSecondsMathGame.prototype.selectOperation=function(){
  var selecOperator;
  if (this.operator.length>1){
    var index=Math.floor((Math.random()*this.operator.length));
    selecOperator=this.operator[index];
  } else selecOperator=this.operator;
  return selecOperator;
};

TenSecondsMathGame.prototype.checkRules=function(){
  if ((this.numberOne>this.numberTwo)&&(this.op=='-')) {
    return false;
  }
  else if (this.numberOne==this.numberTwo) {return false;
  }
  else {
    return true;
  }
};

// Returns an object with {question, answer}
TenSecondsMathGame.prototype.newQuestion=function(){
  this.numberOne=this.getRandomNumber();
  console.log(this.numberOne);
  this.numberTwo=this.getRandomNumber();
  console.log(this.numberTwo);
  var op='';
  var operator='';
  operator=this.selectOperation();
  switch (operator) {
    case 'addition':
       op='+';
      break;
    case 'substraction':
      op='-';
      break;
    case 'division':
      op='/';
    break;
    case 'multiplication':
      op='*';
    break;
    default:
  }
  this.op=op;
  if (this.checkRules()){
    return (this.numberOne+' '+this.op+' '+this.numberTwo);
  } else return ('operation no valida');
};

// Checks a user answer
TenSecondsMathGame.prototype.isCorrecAnswer=function(answer){

  switch (this.op) {
    case '+':
      if (answer===this.numberOne+this.numberTwo){
        console.log("correcto");
      } else {
        console.log("error");
      }
      break;
      case '-':
      if (answer===this.numberOne-this.numberTwo){
        console.log("correcto");
      } else {
        console.log("error");
      }
      break;
      case '/':
      if (answer===this.numberOne/this.numberTwo){
        console.log("correcto");
      } else {
        console.log("error");
      }
      break;
      case '*':
      if (answer===this.numberOne*this.numberTwo){
        console.log("correcto");
      } else {
        console.log("error");
      }
      break;
      default:

    }

};
