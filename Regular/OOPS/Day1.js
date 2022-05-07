// // Encapsulation



// class Person{
//     constructor(fullname,age,adhar){
//         this.fullname = fullname
//         this.age = age
//         this.adhar = adhar
//     }
//     display()
//     {
//         console.log(this.fullname)
//     }
// }

// let shweta  = new Person("shweta pawar",26,22133444)
// let rohit = new Person("rohit pawar",27,123344)

// console.log(shweta)
// console.log(rohit)


// // Inheritance


// class Student {
//     constructor(fullname,adhar,DOB){
//         this.fullname = fullname
//         this.adhar = adhar
//         this.DOB = DOB
//     }
//     display(){
//         console.log(this.fullname)
//     }

// }

// class Teacher extends Student{
//     constructor(fullname,adhar,DOB,salary){
//         super(fullname,adhar,DOB)
//         this.salary = salary
//     }

// }


// let shweta10 = new Teacher("shweta kshirsagar",1233,"10-10-1996",20000)
// console.log(shweta10.salary)
// shweta10.display()
// console.log(shweta10.fullname)
// console.log(shweta10.adhar)
// console.log(shweta10.DOB)
// shweta10.display()

// console.log('***************************************************************')

// class student1{
//     constructor(fullname,adhar,DOB){
//         this.fullname = fullname 
//         this.adhar = adhar
//         this.DOB = DOB
//     }

//    display(){
//        return(this.fullname)
//    } 

// }

// class Teacher1 extends student1{
//     constructor(fullname,adhar,DOB,salary){
//         super(fullname,adhar,DOB)
//         this.salary = salary
//     }

//     displaysal(){
//         console.log(this.salary)
//     }
// }

//     let dev = new Teacher1("test",12333,"10-10-1996",10000)
//     let rohit1= new Teacher1("test2",22222,"10-10-1996",2000)
// rohit1.displaysal()
// console.log(rohit1.salary)
// rohit1.display()

// console.log(rohit1.fullname)
// console.log(rohit1.DOB)
// console.log(rohit1.adhar)
// console.log("******************************************************************")

// // multilvel inheritance

class GrandFather{
    constructor(gname,lastname){
        this.GrandFathername = gname
        this.lastname = lastname
    }
    display(){
        return(this.gname + this.lastname)
    }
}

class Father extends GrandFather{
    constructor(gname,lastname,fname){
        super(gname,lastname)
        this.fname = fname
    }
    display(){
        super.display()
        return(this.fname + this.lastname)
        
    }
}

class Son extends Father {
    constructor(gname,lastname,fname,sname){
        super(gname,lastname,fname)
        this.sname = sname
    }

    display(){
        console.log(this.sname + this.lastname)
        super.display()
    }
}

let shweta101 = new Son("madhurkar","kshirsagar","sahenrao","shweta")
shweta101.display()



