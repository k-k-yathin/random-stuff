let expression = "";

function press(value){
    expression += value;
    document.getElementById("num").innerText=expression;
}

function clearDisplay(){
    document.getElementById("num").innerText="ENTER THE NUM";
    expression = "";
}

function calculate(){
    try{
         expression = eval(expression).toString();
         document.getElementById("num").innerText = expression;
    }
    catch{
         document.getElementById("num").innerText = "Error";
         expression = "";
    }
}
