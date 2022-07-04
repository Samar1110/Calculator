const calculator = {
    displayNumber: '0',
    operator: "",
    firstNumber: "",
    secondNumber:"",
    waitingForOperator: false,
    waitingForFirstNumber: false,
    waitingForSecondNumber: false
};

function updateDisplay() {
    document.querySelector("#displayNumber").innerText = calculator.displayNumber;
}

function clearCalculator() {
    calculator.displayNumber= '0',
    calculator.operator= "",
    calculator.firstNumber= "",
    calculator.secondNumber="",
    calculator.waitingForOperator= false,
    calculator.waitingForFirstNumber= false,
    calculator.waitingForSecondNumber= false
}

function inputDigit(digit) {
    if(calculator.operator==""){
        if(calculator.firstNumber==""){
            calculator.firstNumber=digit;
            calculator.displayNumber=digit;
        }
        else{
            calculator.firstNumber= calculator.firstNumber+""+digit
            calculator.displayNumber=calculator.displayNumber+""+digit;
        }
    }

    else {
        if(calculator.secondNumber==""){
            calculator.secondNumber=digit;
            calculator.displayNumber=calculator.displayNumber+" "+digit;
        }
        else{
            calculator.secondNumber=calculator.secondNumber+""+digit;
            calculator.displayNumber=calculator.displayNumber+""+digit;
        }
    }
}




function inverseNumber() {
    if (calculator.displayNumber === '0') {
        return;
    }
    calculator.displayNumber = calculator.displayNumber * -1;
    if(calculator.firstNumber!=""&&calculator.secondNumber==""){
        calculator.firstNumber=(calculator.firstNumber*-1).toString();
    }
    else{
        calculator.secondNumber=(calculator.secondNumber*-1).toString();
    }
}


function performCalculation() {

    if(calculator.firstNumber==""){
        alert("Enter the First Number");
        return;
    }
    else if(calculator.operator==""){
        alert("Enter the First Number");
        return;
    }
    else if(calculator.secondNumber==""){
        alert("Enter the First Number");
        return;
    }


    let result = 0;
    if (calculator.operator === "+") {
        result = parseFloat(calculator.firstNumber) + parseFloat(calculator.secondNumber);
    }
    if (calculator.operator === "-")  {
        result = parseFloat(calculator.firstNumber) - parseFloat(calculator.secondNumber)
    }
    if (calculator.operator === "*")  {
        result = parseFloat(calculator.firstNumber) * parseFloat(calculator.secondNumber)
    }
    if (calculator.operator === "/")  {
        result = parseFloat(calculator.firstNumber) / parseFloat(calculator.secondNumber)
    }
    if (calculator.operator == "%")  {
        result = parseFloat(calculator.firstNumber) % parseFloat(calculator.secondNumber)
    }
    
    if (calculator.operator === "^")  {
        result = Math.pow(parseFloat(calculator.firstNumber),parseFloat(calculator.secondNumber) )
    }
    if (calculator.operator === "1/x")  {
        result = 1/parseFloat(calculator.firstNumber) 
    }
    if (calculator.operator === "sin")  {
        result = Math.sin(parseFloat(calculator.firstNumber)) 
    }
    if (calculator.operator === "cos")  {
        result = Math.cos(parseFloat(calculator.firstNumber)) 
    }
    if (calculator.operator === "tan")  {
        result = Math.tan(parseFloat(calculator.firstNumber)) 
    }
    if (calculator.operator === "log")  {
        result = Math.log10(parseFloat(calculator.firstNumber)) 
    }
    if (calculator.operator === "ln")  {
        result = Math.log(parseFloat(calculator.firstNumber)) 
    }
    if (calculator.operator === "sqrt")  {
        result = Math.sqrt(parseFloat(calculator.firstNumber)) 
    }
    if (calculator.operator == "x^2")  {
        result = Math.pow(parseFloat(calculator.firstNumber),2) 
    }
    if (calculator.operator == "|x|")  {
        result = Math.abs(parseFloat(calculator.firstNumber))
    }
    if (calculator.operator == "sin^-1")  {
        result = Math.asin(parseFloat(calculator.firstNumber))
    }
    if (calculator.operator == "cos^-1")  {
        result = Math.acos(parseFloat(calculator.firstNumber))
    }
    if (calculator.operator == "tan^-1")  {
        result = Math.atan(parseFloat(calculator.firstNumber))
    }
    if (calculator.operator == "e")  {
        result = Math.exp(parseFloat(calculator.firstNumber))
    }
    const history = {
        firstNumber: calculator.firstNumber,
        secondNumber: calculator.secondNumber,
        operator: calculator.operator,
        result: result
    }
    putHistory(history);
    calculator.displayNumber = result.toString();
    calculator.firstNumber=calculator.displayNumber;
    renderHistory();
    calculator.operator="";
    calculator.secondNumber="";
    console.log(calculator.firstNumber);
            console.log(calculator.secondNumber);
            console.log(calculator.displayNumber);
            console.log(calculator.operator);
            console.log(typeof(calculator.displayNumber))
}


const buttons = document.querySelectorAll(".button");
for (let button of buttons) {
    button.addEventListener('click', function (event) {

        const target = event.target;

        if (target.classList.contains('clear')) {
            clearCalculator();
            updateDisplay();
            return;
        }

        if (target.classList.contains('negative')) {
            inverseNumber();
            updateDisplay();
            return;
        }

        if (target.classList.contains('equals')) {
            console.log(calculator.firstNumber);
            console.log(calculator.secondNumber);
            performCalculation();
            updateDisplay();
            return;
        }

        if (target.classList.contains('operator')) {
            // console.log(calculator.displayNumber)
            calculator.displayNumber=calculator.displayNumber+" "+target.innerText;
            calculator.operator=target.innerText
            updateDisplay()
            console.log(calculator.firstNumber);
            console.log(calculator.secondNumber);
            console.log(calculator.displayNumber);
            console.log(calculator.operator);
            return;

        }
        
        if (target.classList.contains('backspace')) {

            
            // if(calculator.firstNumber.length==""){
            //     calculator.displayNumber = calculator.displayNumber.slice(0, calculator.displayNumber.length-1)
            // }
            if(calculator.operator==""){
                if(calculator.firstNumber.length==1){
                        calculator.firstNumber="";
                        calculator.displayNumber = calculator.displayNumber.slice(0, calculator.displayNumber.length-1)
                    }
                else{
                        calculator.firstNumber = calculator.firstNumber.slice(0, calculator.firstNumber.length-1);
                        calculator.displayNumber = calculator.displayNumber.slice(0, calculator.displayNumber.length-1)
                    }
                }
            else if(calculator.secondNumber==""){
                        calculator.operator = "";
                        calculator.displayNumber = calculator.displayNumber.slice(0, calculator.displayNumber.length-1)
                    }
            else{
                    if(calculator.secondNumber.length==1){
                            calculator.secondNumber="";
                            calculator.displayNumber = calculator.displayNumber.slice(0, calculator.displayNumber.length-1)
                        }
                    else{
                            calculator.secondNumber = calculator.secondNumber.slice(0, calculator.secondNumber.length-1);
                            calculator.displayNumber = calculator.displayNumber.slice(0, calculator.displayNumber.length-1)
                        }
                    }
                    // calculator.displayNumber = calculator.displayNumber.slice(0, calculator.displayNumber.length-1)
                    console.log(calculator.firstNumber);
                    console.log(calculator.secondNumber);
                    console.log(calculator.displayNumber);
                    console.log(calculator.operator);

            updateDisplay();
            return;
        }
        

        inputDigit(target.innerText);
        updateDisplay()
        
        // console.log(event);
        console.log(calculator.firstNumber);
        console.log(calculator.secondNumber);
        console.log(calculator.displayNumber);
        console.log(calculator.operator);
        // console.log(typeof(target.innerText))
    });
}

const theme=document.querySelector("#darkTheme");

theme.addEventListener("click", ()=>{
    if(theme.innerHTML==="Switch to Dark Theme"){
        theme.innerText="Switch to Light Theme"
        document.querySelector(".heading").style.color = "white";
        document.querySelector(".heading").style.transition="color 1s ease";
        document.querySelector(".heading").style.backgroundColor = "black";
        document.querySelector(".heading").style.transition="background 1s ease";
        const buttons=document.querySelectorAll(".button");
        buttons.forEach((button)=>{
            return button.style.backgroundColor="#14397d";
        })
        buttons.forEach((button)=>{
            return button.style.transition="background 1s ease";
        })
        buttons.forEach((button)=>{
            return button.style.borderColor="white";
        })
        const operators=document.querySelectorAll(".operator");
        operators.forEach((operator)=>{
            return operator.style.backgroundColor="#77b5d9";
        })
        operators.forEach((operator)=>{
            return operator.style.transition="background 1s ease";
        })
        buttons.forEach((button)=>{
            return button.style.color="white";
        })
        buttons.forEach((button)=>{
            return button.style.transition="color 1s ease";
        })
        document.querySelector(".navbarBg").style.backgroundColor="#14397d";
        document.querySelector(".navbarBg").style.transition="background 1s ease";
        document.querySelector("#darkTheme").style.color="white";
        document.querySelector(".equals").style.backgroundColor="#77b5d9";
        document.querySelector(".equals").style.transition="background 1s ease";
        document.querySelector(".negative").style.backgroundColor="#77b5d9";
        document.querySelector(".negative").style.transition="background 1s ease";
        document.querySelector(".display").style.color="white";
        document.querySelector(".flex-container-column").style.backgroundColor="#d7eaf3";
        document.querySelector(".flex-container-column").style.transition="background 1s ease";
        document.querySelector(".history").style.backgroundColor="#d7eaf3";
        document.querySelector(".history").style.transition="background 1s ease";
        const tableRow=document.getElementsByTagName("td");
        for(let i=0;i<tableRow.length;i++){
            tableRow[i].style.color="white";
        }
        for(let i=0;i<tableRow.length;i++){
            tableRow[i].style.transition="color 1s ease";
        }
        const even=document.querySelectorAll("tr:nth-child(even)");
        even.forEach((row)=>{
            return row.style.backgroundColor="#14397d";
        })
        even.forEach((row)=>{
            return row.style.transition="background 1s ease";
        })
        const odd=document.querySelectorAll("tr:nth-child(odd)");
        odd.forEach((row)=>{
            return row.style.backgroundColor="#77b5d9";
        })
        odd.forEach((row)=>{
            return row.style.transition="background 1s ease";
        })        
        document.querySelector(".center").style.backgroundColor="black";
        document.querySelector(".center").style.transition="background 1s ease";
        document.querySelector(".center").style.color="white";
        document.querySelector(".center").style.transition="color 1s ease";
        document.querySelector("body").style.backgroundColor="#00296b";
        document.querySelector("body").style.transition="background 1s ease";
        document.querySelector("#sciCal").style.color="white";
    }

    else{
        theme.innerText="Switch to Dark Theme"
        document.querySelector(".heading").style.color = "black";
        document.querySelector(".heading").style.backgroundColor = "white";
        const buttons=document.querySelectorAll(".button");
        buttons.forEach((button)=>{
            return button.style.backgroundColor="#e3e3e3";
        })
        buttons.forEach((button)=>{
            return button.style.color="black";
        })
        buttons.forEach((button)=>{
            return button.style.borderColor="black";
        })
        
        const operators=document.querySelectorAll(".operator");
        operators.forEach((operator)=>{
            return operator.style.backgroundColor="#f6f6f8";
        })
        document.querySelector(".navbarBg").style.backgroundColor="#e7ebee";
        document.querySelector("#darkTheme").style.color="black";
        document.querySelector(".equals").style.backgroundColor="#f6f6f8";
        document.querySelector(".negative").style.backgroundColor="#f6f6f8";
        document.querySelector(".display").style.color="white";
        document.querySelector(".flex-container-column").style.backgroundColor="#ced4da";
        document.querySelector(".history").style.backgroundColor="#ced4da";
        const tableRow=document.getElementsByTagName("td");
        for(let i=0;i<tableRow.length;i++){
            tableRow[i].style.color="black";
        }
        const even=document.querySelectorAll("tr:nth-child(even)");
        even.forEach((row)=>{
            return row.style.backgroundColor="#f6f6f8";
        })
        const odd=document.querySelectorAll("tr:nth-child(odd)");
        odd.forEach((row)=>{
            return row.style.backgroundColor="#e3e3e3";
        })   
        document.querySelector(".center").style.backgroundColor="white";
        document.querySelector(".center").style.color="black";
        document.querySelector("body").style.backgroundColor="white";
        document.querySelector("#sciCal").style.color="black";
    }
});

const scientific=document.querySelectorAll(".hideme");
scientific.forEach((func)=>{
    return func.style.display="none";
})

const sciCal=document.querySelector("#sciCal")
sciCal.addEventListener("click",()=>{
    if(sciCal.innerText==="Scientific Calculator"){
        sciCal.innerText="Regular Calculator"
        scientific.forEach((func)=>{
            return func.style.display="block";
        })
    }
    else{
        sciCal.innerText="Scientific Calculator"
        scientific.forEach((func)=>{
            return func.style.display="none";
        })
    }
})
