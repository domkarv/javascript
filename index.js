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

    const bucket = this.table[index];

    if (!this.table[index]) {
      this.table[index] = [[key, value]];
    } else {
      const sameKeyExists = bucket.find((item) => item[0] === key);

      if (sameKeyExists) {
        sameKeyExists[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }

  get(key) {
    const index = this.hash(key);

    const bucket = this.table[index];

    if (!bucket) return undefined;

    const keyItem = bucket.find((item) => item[0] === key);

    if (!keyItem) return undefined;

    return keyItem;
  }

  remove(key) {
    const index = this.hash(key);

    const bucket = this.table[index];

    if (bucket) {
      const keyItem = bucket.find((item) => item[0] === key);
      if (keyItem) {
        bucket.splice(bucket.indexOf(keyItem), 1);
      }
    }
  }

  display() {
    for (let i = 0; i < this.size; i++) {
      if (this.table[i] && this.table[i].length) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const ht = new HashTable(50);

ht.set("name", "Omkar Date");
ht.set("name", "Date Omkar");
ht.set("age", 21);
ht.set("role", "admin");

/* Example of collision */
ht.set("stop", "mumbai");
ht.set("post", "developer");

// above both will generate same hash key as per our hash function
// hash key generation totally depends on hash function implementation

ht.display()

console.log(ht.get("name"));

ht.remove("stop")

ht.display()
