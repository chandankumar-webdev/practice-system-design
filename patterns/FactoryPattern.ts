interface Document2 {
    open(): void
    save(): void
}

class Report3 implements Document2 {
    open(): void {
        console.log('open report')
    }
    save() {
        console.log('save report')
    }
}

class Resume implements Document2 {
    open(): void {
        console.log('open resume')
    }
    save() {
        console.log('save resume')
    }
}

abstract class DocumentCreator{
    protected abstract factoryMethod(): Document2

    createAndOpenDocument(){
      const document = this.factoryMethod()
      console.log('document created and opened')
      document.open()
    }
}

class ResumeCreator extends DocumentCreator {
    protected factoryMethod(): Document2 {
        return new Resume()
    }
}

class ReportCreator extends DocumentCreator {
    protected factoryMethod(): Document2 {
        return new Report3()
    }
}

new ResumeCreator().createAndOpenDocument()
new ReportCreator().createAndOpenDocument()
