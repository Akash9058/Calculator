import "./styles.css";

var buttons = document.getElementsByClassName("button");
var display =document.getElementById('display');
var operand1=0;
var operand2=null;
var operator=null;

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        var value = this.getAttribute('data-value');

        if (value=='+'||value=='-'||value=='*'||value=='/') {
            
          operand1 =parseFloat(display.textContent);
          display.innerText=null
          operator=value;
        } else if(value=='='){
             operand2 = parseFloat(display.textContent);
             if(operator=='+'){
              display.innerText=operand1+operand2
             }else if(operator=='-'){
              display.innerText = operand1 - operand2;
             }else if (operator=='*') {
              display.innerText = operand1 * operand2;
             }else{
              display.innerText = operand1 / operand2;
             }
              
        }else if(value=='clear'){
          display.innerText='';
          operand1=0;
          operand2=null;
        } else if(value=='negative'){
          if(display.innerText[0]=='-'){
            display.innerText[0]=' ';
            display.innerText=display.innerText
          }else{
          display.innerText='-'+display.innerText;
        }
        } else if(value=='%'){
           operand1 = parseFloat(display.textContent);
           display.innerText=operand1/100;
        }else {
            display.innerText+=value;
        }

        
    }
    );
  }

