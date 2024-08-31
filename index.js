class Queue {
  #items;
  #front;
  #rear;

  constructor() {
    this.#items = {};
    this.#front = 0;
    this.#rear = 0;
  }

  enqueue(val) {
    this.#items[this.#rear] = val;
    this.#rear++;
  }

  /**
   * In previous approach we were using array where we used shift method to delete first item in dequeue
   * which has O(n) time complexity, now here it's O(1) using object
   */
  dequeue() {
    delete this.#items[this.#front];
    this.#front++;
  }

  peek() {
    return this.#items[this.#front];
  }

  isEmpty() {
    return this.#front - this.#rear === 0;
  }

  size() {
    return this.#rear - this.#front;
  }

  print() {
    console.log(this.#items);
  }
}

const qu = new Queue();

qu.enqueue(34);
qu.enqueue(54);
qu.enqueue(76);
qu.enqueue(89);

qu.print()

console.log(qu.peek(), qu.size(), qu.isEmpty());

qu.dequeue();

qu.print()
