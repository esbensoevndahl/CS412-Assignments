//Problem 2

//helper function
function evaluate(string){
    switch(string[1]){
        case ("+"):{
            return s => parseInt(s[0]) + parseInt(s[2])
        }
        case ("-"):{
            return s => parseInt(s[0]) - parseInt(s[2])
        }
        case ("*"):{
            return s => parseInt(s[0]) * parseInt(s[2])
        }
        case ("/"):{
            return s => parseInt(s[0]) / parseInt(s[2])
        }
        case ("%"):{
            return s => parseInt(s[0]) % parseInt(s[2])
        }
        case ("^"):{
            return s => parseInt(s[0]) ** parseInt(s[2])
        }
    }
}

const expression = '8%3';
let operator = evaluate(expression);
console.log(`${expression} = ${operator(expression)}`)