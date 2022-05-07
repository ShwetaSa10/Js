// Array string object
// comparison and logical

// console.log(1)
// console.log(2)

// for(initialization ;condition check ; increment /decrememnt)

// for(let i =0; i < 11 ; i++){
//     console.log(i)
// }
 
// for( let i =0 ; i<11 ; i++){
//     console.log(i)
// }
// console.log('-----------------------------')

// for(let i =0 ;i>=0 ; i--){
//     console.log(i)
// }

// print table of 2

// for ( let i = 2; i<=20 ; i++){
//     console.log(i)
// }

// // print the table of 5

// for(let i = 5 ;i<= 50 ; i++){
//     console.log(i)
// }



// print even and odd number

// 78%2 = 0

count = 0
for (i =2 ; i<1000 ; i++){
    if(i%2 == 0){
        count = count + 1
        console.log(i)
    }
    if(count == 50){
        break;
    }



console.log('--------------------------------------------------------------------')}

// print  odd number

count = 0
for(let i =0 ; i< 1000 ; i++){
    if(i%2!==0){
        count = count +1 
        console.log(i)
    }
    if(count == 50){
        break;
    }
}

console.log('--------------------------------------------------------------------')
for(let i = 0 ;i <10 ; i++){
    console.log(i)
    if(i==3){
        break
    }
}

for(let i =0 ; i<10 ; i++){
    if(i ==3){
        break
    }
    console.log(i)
}


console.log('--------------------------------------------------------------------')

// continue

for(let i =0 ; i<10 ; i++){
    if(i ==3){
        continue
    }
    console.log(i)
}

// break

for(let i = 5 ; i<= 50 ; i = i+5){
    if (i ==15){
        continue
    }
    console.log(i)
}

// programe (syntax)

let c= 50
for(;c>=5;){
    console.log(c)
    c = c-5
}

// while loop

// initialization

// while(condition){
//     // sttaments
//     // increment /decrement
// }


i = 0 
while(i<=10){
    console.log(i)
    i = i + 1    
}


// 5 table

i = 5
while(i<=50){
    console.log(i)
    i = i +5
}

// break

let jk = 5
while(jk<= 50){
    console.log(jk)
    if(jk == 15){
        break
    }
jk = jk +5
}


// continue

// let mn = 0
// while(mn <=5){
//     if(mn ==3){
//         mn = mn +1
//         continue
//     }

//     console.log(mn)
//     mn = mn +1
// }

// for loop
for(let i = 1 ; i < 51 ; i++){
    console.log(i)
}

// while loop

let y= 1
while(y<=51){
    console.log(y)
    y++
}

// break with for

for (let i =0 ;i<10 ; i = i +3){
    if(i==6){
       break
    }
    console.log(i)
}



for (let i =0 ;i<10 ; i = i +2){
    if(i==6){
       break
    }
    console.log(i)
}


//  while looop for and break

// let ii = 0
// while(ii<10){
//     if(ii == 4){
//         break;
//     }
//     console.log(i)
//     i++
    
// }

let iii = 0
while(iii<10){
    if(iii ==4){
        iii++
        console.log(iii)
        iii++
    }
}


// consitional

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


