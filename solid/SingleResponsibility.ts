class Reportt {
  private content: string;
  constructor(content: string) {
    this.content = content
  }

  public getHtmlContent(): string { 
    return `<html><body>${this.content}</body></html>`
  }

  public saveToFile(filename: string): void {
    // Logic to save the report content to a file
    console.log(`Saving report to ${filename}`)
  }
}

const report = new Reportt("This is the report content.")
report.saveToFile("report.html")
console.log(report.getHtmlContent())



// with single responsibilities
class Report2 {
  private content: string
  constructor(content: string) {
    this.content = content
  }

  public getContent() {
    return this.content
  }
}

class GetHtmlContent {
  public format(report: Report2) {
    return `<html> ${report.getContent()}</html>`
  }
}

class SaveContent {
  public saveContent (report: Report2, reportName: string) {
    const htmlContent = new GetHtmlContent().format(report)
    console.log(`saved file ${reportName} with data (${htmlContent})`)
  }
}

const report2 = new Report2('new report 2 data')
const saveContent = new SaveContent().saveContent(report2, 'report2')

