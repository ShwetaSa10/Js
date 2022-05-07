// program one
let names = ["shweta","rohit","sumit","akshay"]
let p = names[0]
let q = names[1]
let r = names [2]
let s = names [3]
console.log(p)
console.log(q)
console.log(r)
console.log(s)

// destructure

let[a,b,c,d] = names
console.log(a)
console.log(b)
console.log(c)
console.log(d)

// program 2
let city = ["belapur","sangli","miraj0","pune"]

let [j,k,l,m] = city
console.log(j)
console.log(k)
console.log(l)
console.log(m)

// program -3

let array = [[11,22,33],[55,56,57],["shweta","sahebrao","kshirsagar"]]

let [[aa,bb,cc],[pp,qq,rr],[sh,sa,ks]] = array
console.log(bb)
console.log(qq)
console.log(sa)

// program 4

// let person = {

// }

let info = ["shweta","kshirsagar",23,44]
let [ll,mm,nn] = info
console.log(ll)
console.log(mm)
console.log(nn)

let info1 = {
    firstName : "shweta",
    lastName : "pawar",
    rollNo : 23,
    age : 45
}

let {firstName: ppp,lastname :qqq ,rollNo :rrr,age :sss} = info1
console.log(ppp)
console.log(qqq)
console.log(rrr)
console.log(sss)

