class Grocessorystore {
    constructor(itmnm, prize, quantity) {
        this.itemname = itmnm
        this.prize = prize
        this.quantity = quantity
        this.Cart = []
    }
    itemsold(Noitems) {
        if (this.quantity > Noitems) {
            this.quantity = this.quantity - Noitems
            this.Cart.push(-Noitems)
            console.log("Number of items in stock",this.quantity)
        }

        else {
            console.log("No items available to remove")
        }
    }

    itemadded(Noitems) {
        this.quantity = this.quantity + Noitems
        this.Cart.push(Noitems)
        console.log("Number of items in stock",this.quantity)
    }
}

let test = new Grocessorystore(10,5000,10)
test.itemadded(20)
test.itemsold(11)
test.itemadded(50)
test.itemsold(22)
console.log(test.Cart)
let aaa = test.Cart.reduce(function(acc,el){
    return acc+Math.abs(el)
},0)
console.log(aaa)
let aa=test.Cart.slice(-3)
console.log(aa)







