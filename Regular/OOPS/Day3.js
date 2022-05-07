let arr = [11, 11, 22, 33, 44, 55, 33]
console.log(arr)

let qq = new Set(arr)
console.log(qq)

let setB = new Set()
setB.add(11)
setB.add(12)
setB.add(13)
console.log(setB)

console.log(setB.size)


let aa = setB.has(12)
console.log(aa)

// setB.clear()
// console.log(setB)

console.log(setB.values())

setB.delete(12)
console.log(setB.values())


setB.forEach(function (el) {
    console.log(el)
})

let SetB = new Set()
SetB.add(12)
SetB.has(12)
SetB.delete(12)
SetB.add(11)
SetB.add(12)
SetB.add(13)
//SetB.clear()
setB.forEach(function (el) {
    console.log(el)
})

// Does not stores the value by index
console.log(setB[0])
// To store the unique values 
//------------- *--------------------------



//Maps
let object = {
    fullName: "shweta kshirsagar",
    age: 12,
    skill: ["python", "java"]

}

let mapA = new Map()


mapA.set('skills', ["python", "javascript"])
mapA.set(true, "isMarried")
mapA.set(1, "Admin")
mapA.set(['kanchan', 'shrirsh'], "parents")
mapA.set({ n: 12, m: 13 }, 'axis')
console.log(mapA)

// set()
// get()

let aah = mapA.get(true)

console.log(aah)

mapA.delete('skills')
console.log(mapA)
// mapA.clear()
// console.log(mapA)
let ooo = mapA.has(1)
console.log(ooo)
mapA.forEach(function (a, b) {
    console.log(a, b)
})





//mapA
for (let key of mapA.keys()) {
    console.log(key)
}
for (let key of mapA.values()) {
    console.log(key)
}
for (let [key, value] of mapA.entries()) {
    console.log(key, value)
}
console.log(mapA.size)