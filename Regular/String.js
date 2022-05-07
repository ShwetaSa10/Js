let city = "shirdi"
console.log(city[1])
console.log(city[0])

for(let i = 0 ; i <city.length ; i++){
    console.log(city[i])
}


// string-- object --> properties and method
/*length*/

let fullName = "Shweta"
let i =fullName.length
console.log(i)

// Methods
// Action and retunr type
/*TO UPPPERCASE  & TO LOWERCASE METHOD*/ 
let flower = "Rose"
let aa= flower.toUpperCase()
console.log(aa)

let bb = flower.toLowerCase()
console.log(bb)

/*----includes----*/ 

let abc = flower.includes("o")
console.log(abc)

let abcc = flower.includes("k")
console.log(abcc)

/*******IndexOf***************/

let cc = flower.indexOf("o")
console.log(cc)

let vv = flower.indexOf("r")
console.log(vv)


/********trimstart()************/ 

let state = " Maharashtra"
state.trimStart()
console.log(state)

/***********trimend*****************/ 
let state1 = "Maharashtra "
state.trimEnd()
console.log(state)

/***********trim****************/ 

let state2 = " Maharashtra "
state.trimEnd()
console.log(state2)


// reverse the string

let Name = "shwetak"
let revStr = ""

// incorrect way of writing code

for(let i = 0 ; i< Name.length ;i++){
    console.log(Name[i])

revStr = Name[i] + revStr
}
console.log(revStr)


let revStr1 = ""
for(let i =Name.length-1;i>= 0;i--){
    // console.log(Name[i])
    revStr1 = revStr1 + Name[i]
}
console.log(revStr1)



// ****************************


// number + string ==> string
// string + string ==> string
// number + number ==> number
// string + number ==> string


let a = 10
let b = 20
let c = "Rohit"

console.log( c +a + b)
console.log(a+b+c)
console.log(b +b +c)



/*-------------Slice----------------*/ 

 let lastName = "kshirsagar"
console.log(lastName.slice(1,5))
console.log(lastName.slice(5))
console.log(lastName.slice(-5))
console.log(lastName.slice(1,-5))
console.log(lastName.slice(-7,-5))
console.log(lastName.slice(-5,-7))

let lastName1 = "pawar"
let p = lastName1.startsWith("P")
console.log(p)

let q = lastName1.startsWith("pa")
console.log(q)

let r = lastName1.endsWith("ar")
console.log(r)


let s = lastName1.endsWith("r")
console.log(r)


// charat

console.log(lastName1.charAt(0))
console.log(lastName1.charAt(3))


let test  = 
"shweta-pawar-9960152960"

let gg = test.split("-")
console.log(gg)

let hh = "shweta"
let hh1 = hh.split("h")
console.log(hh1)





