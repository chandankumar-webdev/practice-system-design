class Email {
    send() {
        console.log('email sent')
    }
}

class Notiflier {
    private emailSender: Email
    constructor() {
        this.emailSender = new Email()
    }

    sendNoti() {
        this.emailSender.send()
    }
}

new Notiflier().sendNoti()


// with DIP =======================================
interface IMessageSender {
    send(message: string): void
}

class EmailSender implements IMessageSender {
   send(message: string): void {
       console.log('email sent', message)
   }
}

class SmsSender implements IMessageSender {
   send(message: string): void {
       console.log('sms sent', message)
   }
}

class Notiflier2 {
    private messageSender: IMessageSender
    constructor(messageSender: IMessageSender) {
        this.messageSender = messageSender
    }

    sendNoti(message: string) {
        this.messageSender.send(message)
    }
}

new Notiflier2(new EmailSender()).sendNoti('this is email data')
new Notiflier2(new SmsSender()).sendNoti('this is sms data')
