class LNode {
  value;
  next;

  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  #size;
  #head;

  // some of this methods can be implemented more easily by maintaining `tail` pointer

  constructor() {
    this.#head = null;
    this.#size = 0;
  }

  getSize() {
    return this.#size;
  }

  isEmpty() {
    return this.#size === 0;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Linked list is empty");
      return;
    }

    let curr = this.#head;
    let el = "";

    while (curr !== null) {
      el += curr.value + " ";
      curr = curr.next;
    }

    console.log(el);
  }

  prepend(val) {
    const node = new LNode(val);

    if (this.isEmpty()) {
      this.#head = node;
    } else {
      node.next = this.#head;
      this.#head = node;
    }

    this.#size++;
  }

  append(val) {
    const node = new LNode(val);

    if (this.isEmpty()) {
      this.#head = node;
    } else {
      let curr = this.#head;

      while (curr.next !== null) {
        curr = curr.next;
      }

      curr.next = node;
    }

    this.#size++;
  }

  insert(val, idx) {
    if (idx > this.#size || idx < 0) {
      console.log("Invalid index");
      return;
    }

    if (idx === 0) {
      this.prepend(val);
      return;
    }

    if (idx === this.#size) {
      this.append(val);
      return;
    }

    const node = new LNode(val);
    let prev = this.#head;

    for (let prt = 0; prt !== idx - 1; prt++) {
      prev = prev.next;
    }

    node.next = prev.next;
    prev.next = node;

    this.#size++;
  }

  removeByIndex(idx) {
    if (idx < 0 || idx >= this.#size) {
      console.log("Invalid index");
      return;
    }

    if (idx === 0) {
      this.#head = this.#head.next;
    } else {
      let prev = this.#head;
      for (let prt = 0; prt < idx - 1; prt++) {
        prev = prev.next;
      }

      prev.next = prev.next.next;
    }

    this.#size--;
  }

  search(val) {
    if (this.isEmpty()) {
      return -1;
    }

    let curr = this.#head;
    for (let i = 0; i < this.#size; i++) {
      if (curr.value === val) {
        return i;
      }
      curr = curr.next;
    }

    return -1;
  }

  reverse() {
    let prev = null;
    let curr = this.#head;

    while (curr !== null) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    this.#head = prev;
  }
}

const ll = new LinkedList();

ll.insert(92, 0);
ll.insert(45, 0);
ll.insert(98, 0);
ll.insert(23, 0);

ll.print()

ll.reverse()

ll.print()
