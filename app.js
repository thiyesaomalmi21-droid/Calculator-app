
function showValue(val){
    if(document.getElementById('field1').value === '0'){
        document.getElementById('field1').value = val;
    }else {
        document.getElementById('field1').value += val;
    }
}

function calculate(){
    let txtfield=document.getElementById("field1").value;
    let operator="";

    if(txtfield.includes("/")){
        operator="/";
    }else if(txtfield.includes("*")){
        operator="*";
    }else if(txtfield.includes("+")){
        operator="+";
    }else if(txtfield.includes("-")){
        operator="-";
    }

    let numbers=txtfield.split(operator);

    let num1=Number(numbers[0]);
    let num2=Number(numbers[1]);

    let result=0;

    if(operator == "/"){
       result=num1/num2;
    }else if(operator == "*"){
        result=num1*num2;
    }if(operator == "+"){
        result=num1+num2;
    }if(operator == "-"){
        result=num1-num2;
    }
    
    document.getElementById("field2").value=result;
}

function showHistory(){
    let historyfield=document.getElementById("field3").value;
    historyfield=document.getElementById("field1").value + "=" + document.getElementById("field2").value ;
}