//Problem 2

// First solution:
//
// function evaluate(string){
//     switch(string[1]){
//         case ("+"):{
//             return s => parseInt(s[0]) + parseInt(s[2])
//         }
//         case ("-"):{
//             return s => parseInt(s[0]) - parseInt(s[2])
//         }
//         case ("*"):{
//             return s => parseInt(s[0]) * parseInt(s[2])
//         }
//         case ("/"):{
//             return s => parseInt(s[0]) / parseInt(s[2])
//         }
//         case ("%"):{
//             return s => parseInt(s[0]) % parseInt(s[2])
//         }
//         case ("^"):{
//             return s => parseInt(s[0]) ** parseInt(s[2])
//         }
//     }
// }


//Revised solution after piazza post:
function evaluate(string){
    //takes in string of number, operand, number and returns a function which will parse and perform the operation
    const [,op,] = string

    switch(op){
        case ("+"):{
            return ([left,, right]) => Number(left) + Number(right)
        }
        case ("-"):{
            return ([left,, right]) => Number(left) - Number(right)
        }
        case ("*"):{
            return ([left,, right]) => Number(left) * Number(right)
        }
        case ("/"):{
            return ([left,, right]) => Number(left) / Number(right)
        }
        case ("%"):{
            return ([left,, right]) => Number(left) % Number(right)
        }
        case ("^"):{
            return ([left,, right]) => Number(left) ** Number(right)
        }
    }
}



const expression = '8%3';
let operator = evaluate(expression);
console.log(`${expression} = ${operator(expression)}`)