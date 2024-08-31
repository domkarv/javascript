class Queue {
  #items;

  constructor() {
    this.#items = [];
  }

  enqueue(val) {
    this.#items.push(val);
  }

  dequeue() {
    this.#items.shift();
  }

  peek() {
    return this.#items[0];
  }

  isEmpty() {
    return this.#items.length === 0;
  }

  size() {
    return this.#items.length;
  }

  print() {
    console.log(this.#items.toString());
  }
}

const qu = new Queue();

qu.enqueue(34);
qu.enqueue(54);
qu.enqueue(76);
qu.enqueue(89);
qu.dequeue();

console.log(qu.peek());

qu.print()