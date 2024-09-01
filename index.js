class CircularQueue {
  #items;
  #capacity;
  #front;
  #rear;
  #currentLength;

  constructor(capacity) {
    this.#items = new Array(capacity);
    this.#capacity = capacity;
    this.#rear = -1;
    this.#front = -1;
    this.#currentLength = 0;
  }

  isEmpty() {
    return this.#currentLength === 0;
  }

  isFull() {
    return this.#currentLength === this.#capacity;
  }

  print() {
    if (this.isEmpty()) {
      console.log('Queue is Empty.');
      return;
    }

    let i = NaN;
    let el = ''

    for (i = this.#front; i !== this.#rear; i = (i + 1) % this.#capacity) {
      el += (this.#items[i]) + " ";
    }
    el += (this.#items[i]);

    console.log(el);
  }

  enqueue(val) {
    if (!this.isFull()) {
      this.#rear = (this.#rear + 1) % this.#capacity;
      this.#items[this.#rear] = val;
      this.#currentLength++;
      if (this.#front === -1) {
        this.#front = 0;
      }
    } else {
      console.log('Queue is full.');
    }
  }

  dequeue() {

    if (this.isEmpty()) {
      return null;
    }

    delete this.#items[this.#front];
    this.#front++;
    this.#currentLength--;

    if (this.isEmpty()) {
      this.#front = -1;
      this.#rear = -1;
    }
  }

}

const cqu = new CircularQueue(6)

cqu.enqueue(43)
cqu.enqueue(67)
cqu.enqueue(43)
cqu.enqueue(67)
cqu.enqueue(78)
cqu.enqueue(78)

cqu.dequeue()
cqu.dequeue()
cqu.dequeue()

cqu.enqueue(234)

cqu.print();