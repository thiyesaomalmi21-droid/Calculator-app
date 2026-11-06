
let calHistory =[];
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

   
    
    let history =txtfield+"="+result;
    calHistory.push(history);
}

function showHistory(){
    document.getElementById("field3").innerHTML = "";
    for(let data of calHistory){
        document.getElementById("field3").innerHTML += data + "\n"; 
    }
}

function deleteAll(){
    document.getElementById("field1").value="";    
    document.getElementById("field2").value="";    
        
}
function backSpace(){
    let display=document.getElementById("field1");
    display.value=display.value.slice(0,-1);
}