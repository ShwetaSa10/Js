// Map function-->

// Map returns the array- due to this need to store in varible

let sss = [11,22,33,55,32]
let year = sss.map(function(el,index,arr){

    return 2022-el
})
console.log(year)

// filter

// cal the birthyear which is greater and equal to 2000

let hh = [ 2011, 2000, 1989, 1967, 1990 ]

ss=hh.filter(function(el,index,array){
    return el>=2000
   
})
console.log(ss)


// reverse String

let city =" miraj"
let = rev = ""
 
for(let i = 0 ;i<city.length;i++){
    rev = city[i] + rev
}
console.log(rev)

// 2nd way

rev2 = ""
for(let i = city.length-1;i>=0;i--){
    rev2 = city[i] + rev
}
console.log(rev2)


let students = [{
    fullName : "shweta0",
    age : 28,
    skills : ["py","java","test"],
    city : pune
},{
    fullName : "rohit",
    age : 28,
    skills : ["py","angu","test"],
    city : miraj
},{
    fullName : "pawar",
    age : 28,
    skills : ["py","angu","test"],
    city : sangli
}


for(let i = 0;i<students.length ; i++){
    let ss = students[i]
    if(ss.city === "pune"){
        console.log(ss.fullName)
    }
}



}
]




