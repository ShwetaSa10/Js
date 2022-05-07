const { createNoSubstitutionTemplateLiteral } = require("typescript")

let x= 104
console.log(typeof x)

let y = "Rohit"
console.log(typeof y)

let z = true
console.log(typeof z)

// let and count


let numOne = 10
console.log(numOne)
numOne = 300
console.log(numOne)


numTwo = 20
console.log(numTwo)

// constant

const NumFour = 80004
console.log(80004)


// Arithmatic

let p = 10
let q= 70

console.log(p+q)
console.log(p-q)
console.log(p%q)
console.log(p/q)
console.log(p*q)

r = 600
s = 900

console.log(r+s)
console.log(r-s)
console.log(r%s)
console.log(r-s)
console.log(r/s)


// DRY - Do not repeat

function call(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x/y)
    console.log(x*y)

}
call(555,5)
call(10,2)

/*********************************************** */

// function

// function without parameter and without return type

function add(){
    console.log(9+9)
}

add()
add()
add()
add()


// function with parameter and without retunr type

function add1(x,y){
    console.log(x+y)
}

add1(12,2)
add1(66,6)
add1(5,5)
add1(-1,4)

// function with parameter with return type

function add2(x,y){
    return x+y
}

let aa = add2(22,2)
console.log(aa)

/*--------------------------------------------------------------------------------*/ 

function mul(x,y){
    return x*y
}
let rrr = mul(100,10)
console.log(rrr)
console.log(rrr+100)
console.log(rrr*0.10)


function greet(word){
    console.log("welcome"+ word)
}
greet("test")


// program one

// function declration

function add5(x,y){
    return x+y
}

let ray = add5(33,5)
console.log(ray)


// arrow function

let test =  (x,y)=>{
return x+y
}
let rayOne = test(55,5)
console.log(rayOne)



// noofTicket = 1
// noOFticket = 20

let numberOFTickect = 1
if(numberOFTickect> 0 && numberOFTickect <=10){
    console.log("10%")
}
    else if(numberOFTickect >10 && numberOFTickect>= 10){
        console.log("20%") 
    }
    else{
        console.log("Hello")
    }



if (numberOFTickect >0 &&  numberOFTickect <=20){
    console.log('20%')
}



// TERNARY OPERATOR

let age  = 10
if(age>10){
    console.log("drive")}
    else{
console.log("No drive")

    }

    /***************************************************************************************/ 


    if(age>10){
        console.log("DRIVE")
}
    else{
        console.log("no Drive")
    }


    

    
    let ageee= 19
    if(ageee >18){
        console.log("you can drink")
    }
    else{
        console.log("ypu not can drink")
    }

    

    let city = 'indore'

    switch(city){
        case 'pune':
        console.log('Maharashtra')

        case 'bhopal' :
            console.log('Madhyapradesh')

        case 'jaipur' :
            console.log(' Rajastan')    

            
        case 'default' :
            console.log('Invalid city')  
    }


    







