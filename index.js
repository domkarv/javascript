class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }

    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    this.table[index] = value;
  }

  get(key) {
    const index = this.hash(key);
    return this.table[index];
  }

  remove(key) {
    const index = this.hash(key);
    this.table[index] = undefined;
  }

  display() {
    for (let i = 0; i < this.size; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const ht = new HashTable(50);

ht.set("name", "Omkar Date");
ht.set("age", 21);
ht.set("role", "admin");

// Example of collision
ht.set("stop", "mumbai");
ht.set("post", "developer");

// above both will generate same hash key as per our hash function
// hash key generation totally depends on hash function implementation


console.log(ht.get("name"));

ht.remove("role")

ht.display()