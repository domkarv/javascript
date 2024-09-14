class Animal {
  private name: string;

  constructor({ name }: { name: string }) {
    this.name = name;
  }

  get Name() {
    return this.name;
  }

  set Name(name: string) {
    this.name = name;
  }
}

const dog = new Animal({ name: "Tiger" });

console.log(dog.Name);
