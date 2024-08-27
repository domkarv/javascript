class Circle {
  #radius;

  constructor(radius) {
    this.#radius = radius;
  }

  getArea() {
    return Math.PI * Math.pow(this.#radius, 2);
  }

  getCircumference() {
    return 2 * Math.PI * this.#radius;
  }
}

const circle = new Circle(7);

console.log(circle.getCircumference());
