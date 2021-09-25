//Problem 3

// takes in a function and calls the function on the string
const dec_fun = (fun, s) => fun(s)

//lambda 1 function that splits the given string
const lambda1 = (string) => {
    return string.split(/(?=c)/g)
}

//lambda 2 function that returns an object with all the required attributes
const lambda2 = (string) => {
    var ret = {
        originalString: string,
        modifiedString: string.replaceAll("a","A"),
        numberReplaced: String((string.match(/a/g) || []).length),
        length: String(string.length)
    }
    return ret
}

console.log(dec_fun(lambda1 ,"supercalifragilisticexpialidocious"))
console.table(dec_fun(lambda2,"supercalifragilisticexpialidocious"))

// const ob = new obj("supercalifragilisticexpialidocious")
// console.table(ob)