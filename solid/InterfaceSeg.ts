interface IWorker {
    work(): void
    cook(): void
    wash(): void
}

class Waiter implements IWorker {
  work() {
    console.log('doing work')
  }

  cook(): void {
    throw new Error("I don't cook")
  }

  wash(): void {
    throw new Error("I don't wash")
  }
}


// using ISP ===================================
interface IWorker2 {
    work(): void
}

interface IWaiter extends IWorker2 {
    serveFood(): void
}

class Waiter2 implements IWaiter {
    work() {}
    serveFood(): void {
    }
}

