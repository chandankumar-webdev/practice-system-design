class ProcessPayment {
    private paymentType: string

    constructor(paymentType: string) {
      this.paymentType = paymentType
    }

    public process() {
        if (this.paymentType == 'credit-card') {
            console.log('credit card payment done')
        } else if (this.paymentType == 'debit-card') {
            console.log('debit card payment done')
        } else if (this.paymentType == 'upi') {
            console.log('upi payment done')
        } // and so on we need to modify this again and again
    }
}



// using OCP //////////////////////////////////
interface PaymentMethod {
    pay(amount: number): void
}

class CreditCardPayment implements PaymentMethod {
  pay (amount: number) {
    console.log('credit card payment done', amount)
  }
}

class DebitCardPayment implements PaymentMethod {
  pay (amount: number) {
    console.log('debit card payment done', amount)
  }
}

class UPIPayment implements PaymentMethod {
  pay (amount: number) {
    console.log('upi payment done', amount)
  }
}

class PaymentProcessor {
    private paymentMethod: PaymentMethod
    constructor(paymentMethod: PaymentMethod) {
        this.paymentMethod = paymentMethod
    }

    processAmount(amount: number) {
        this.paymentMethod.pay(amount)
    }
}

const creditCardPayment = new CreditCardPayment()
const paymentProcessor = new PaymentProcessor(creditCardPayment).processAmount(3000)
