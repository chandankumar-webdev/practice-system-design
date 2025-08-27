interface IPaymentStrategy {
    pay(amount: number): void
}

class CreditCard implements IPaymentStrategy {
  private cardNumber: number
  constructor(cardNumber: number) {
    this.cardNumber = cardNumber
  }
  pay(amount: number) {
    console.log('credit card payment of', amount, 'done')
  }
}

class PayPal implements IPaymentStrategy {
    private email: string
    constructor(email: string) {
        this.email = email
    }
    pay(amount: number) {
      console.log('paypal payment of', amount, 'done')
    }
  }

class ShoppingCart {
    private paymentMethod!: IPaymentStrategy
    private items: string[]

    constructor() {
      this.items = [];
    }
    
    setPaymentMethod(paymentMethod: IPaymentStrategy){
      this.paymentMethod = paymentMethod
    }

    doPayment(amount: number) {
        this.paymentMethod.pay(amount)
    }
}

const shoppingCart = new ShoppingCart()
shoppingCart.setPaymentMethod(new PayPal('chandan@gmail.com'))
shoppingCart.doPayment(3000)
