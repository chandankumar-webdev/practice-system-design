class Rectangle {
    protected width: number
    protected height: number
    constructor(width: number, height: number) {
      this.width = width
      this.height = height
    }

    setWidth(width: number) {
      this.width = width
    }

    setHeight(height: number) {
      this.height = height
    }
    
    getArea() {
        return this.width * this.height
    }
}

console.log('wdsf==', new Rectangle(10, 5).getArea())

class Square extends Rectangle {
    constructor(width: number) {
        super(width, width)
    }

    setWidth(width: number) {
        this.width = width
        this.height = width
    }

    setHeight(height: number) {
      this.height = height
      this.width = height
    }
}

(function calArea(shape: Rectangle) {
  shape.setHeight(10)
  shape.setWidth(5)
  console.log('wrong data==', shape.getArea())
})(new Square(2))




// using LSP ======================
interface Shape {
    getArea(): number
}

class Rectangle2 implements Shape {
    constructor(private width: number, private height: number) {}

  public setWidth(width: number): void {
    this.width = width;
  }

  public setHeight(height: number): void {
    this.height = height;
  }

  public getArea(): number {
    return this.width * this.height;
  }
}

class Square2 implements Shape {
    constructor(private size: number) {}
  
    public setSize(size: number): void {
      this.size = size;
    }
  
    public getArea(): number {
      return this.size * this.size;
    }
  }

function calcArea(shape: Shape) {
    console.log('correct way ====', shape.getArea())
}

calcArea(new Rectangle2(3, 4))
calcArea(new Square2(4))
