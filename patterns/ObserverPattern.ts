interface IObserver {
    update(temperature: number): void
}

class TemperatureSensor {
  private observers: IObserver[] = []
  private temperature: number
  constructor(){
    this.temperature = 0
  }

  addObserver(observer: IObserver){
    const exists = this.observers.includes(observer)
    if(!exists) this.observers.push(observer)
    console.log('observer added')
  }

  notify() {
    for (const observer of this.observers) {
        observer.update(this.temperature)
    }
  }

  setTemperature(temperature: number){
    this.temperature = temperature
    console.log('temperature set to', temperature)
    this.notify()
  }
}

class DisplayTemperature implements IObserver {
  update(temperature: number) {
    console.log('current temperature is', temperature)
  }
}

class AlertTemperature implements IObserver {
    update(temperature: number): void {
        if (temperature > 30)
          console.log('temperature is high')
    }
}

const sensor = new TemperatureSensor()
const display = new DisplayTemperature()
const alertTemp = new AlertTemperature()
sensor.addObserver(display)
sensor.addObserver(alertTemp)

sensor.setTemperature(35)
