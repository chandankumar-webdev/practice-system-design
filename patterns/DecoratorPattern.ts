interface ICoffee {
    cost(): number
    description(): string
}

class Coffee implements ICoffee {
    cost(): number {
        return 5
    }

    description(): string {
        return 'normal coffee'
    }
}

abstract class CoffeeDecorator implements ICoffee {
    protected coffee: ICoffee
    constructor(coffee: ICoffee) {
        this.coffee = coffee
    }

    abstract cost(): number
    abstract description(): string
}

class MilkCoffee extends CoffeeDecorator {
   cost(): number {
       return this.coffee.cost() + 3
   }

   description(): string {
       return `${this.coffee.description()} with milk`
   }
}

const simpleCoffee = new Coffee()
const coffeeWithMilk = new MilkCoffee(simpleCoffee)
console.log(coffeeWithMilk.cost())
console.log(coffeeWithMilk.description())
