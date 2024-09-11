let person={
    name:"jack",
    mark:300
}
console.log(person);
person.mark=500;
person["name"]="williams";
console.log(person);
console.log(Object.keys(person))
console.log(Object.entries(person))
 let colors=["red","blue"]
 colors[1]="yellow"
 console.log(colors)
 colors.shift()
 console.log(colors)
 colors.unshift("black")
 console.log(colors)
 console.log(colors.length)
 //switch cases
let a = prompt("Enter the first number:");
let b = prompt("Enter the second number:");
let input = prompt("Enter the operation (+ or - or * or / or %):");
a=parseInt(a);
b=parseInt(b);
alert(typeof a)
switch(input){
    case "+":
        alert(a+b);
        break
    case "-":
        alert(a-b);
        break
    case "*":
        alert(a*b);
        break
    case "/":
        alert(a/b);
        break
    case "%":
        alert(a%b);
        break
    default:
        alert("Error in displaying the message")
}
//for loop for an object
let laptop={
    brand:"Vignan",
    processor:"IT",
    price:260000,
    os:"R22"
}
for(let k in laptop){
    console.log(`the key is ${k} and its value is ${laptop[k]}`)
}