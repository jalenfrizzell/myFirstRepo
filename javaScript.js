var myFirstVariable = "hello this is my first variable it just so happens to be a string!"
var mySecondVariable = 0.2 // this variable is a number
var myThirdVariable = true // this is a boolean a boolean is a true or false statment or binary
var myFourthVariable = null // null means nothing negative absent void the abyss (intentionally undefined)
var myFifthVariable = undefined // a variable with nothing attatched to it an empty folder
 
console.log(myFirstVariable,"this is variable one",mySecondVariable,"this should be variable two it should also be a number")
myFirstVariable = "blue car"
console.log(myFirstVariable,"my first variable has now changed")


function myFirstFunction(x){
    console.log("this is inside the function",x)
return
}
myFirstFunction(mySecondVariable)
myFirstFunction(myThirdVariable)
function multiplier(customerBill,tipPercent){

    var answer = customerBill * tipPercent
    
return console.log("this is inside the function",answer)
}
multiplier(20,mySecondVariable)
mySecondVariable = 0.8
multiplier(20,mySecondVariable)