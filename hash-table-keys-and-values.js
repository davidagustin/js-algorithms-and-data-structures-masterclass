class HashTable {
  constructor(size = 53) { // 53 is prime number and used for hashing
    this.keyMap = new Array(size); // key map is made by certain size
  }
  // this hash algorithm can prevent overflow
  _hash(key) { // hashing is deterministic and irreversible
    let total = 0; // total starts at zero because number operations will be performed
    let WEIRD_PRIME = 31; // prime number 31 usually prevents collisions
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i]; // Used for ASCII
      let value = char.charCodeAt(0) - 96; // Get an ASCII value
      total = (total * WEIRD_PRIME + value) % this.keyMap.length; // multiplication by a weird prime with an operation done by iterating value and then have modulus performed is a hashing formula
    }
    return total; // return deterministic index
  }

  set(key, value) { // add a new key value tuple to hash table
    let index = this._hash(key); // hash function is utilized to avoid collision of keys
    if (!this.keyMap[index]) { // if there is no bucket made for this index
      this.keyMap[index] = []; // create a bucket
    }
    this.keyMap[index].push([key, value]); // push key value tuple to the bucket array
  }

  get(key) { // retrieve a value with key in O(1) or O(n)
    let index = this._hash(key); // get the unique index for key
    if (this.keyMap[index]) { // if there exist a bucket in the hash table
      for (let i = 0; i < this.keyMap[index].length; i++) { // iterate through bucket
        if (this.keyMap[index][i][0] === key) { // find key of tuple by iterating through the first elements of tuple
          return this.keyMap[index][i][1] // return by finding the index of the bucket and then the index of the tuple and then indexing the value of the tuple
        }
      }
    }
    return undefined; // if not found return undefined
  }

  keys() { // check all buckets to get all key names
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) { // iterate over length of key map
      if (this.keyMap[i]) { // if is a bucket
        for (let j = 0; j < this.keyMap[i].length; j++) { // iterate over the bucket array of tuples
          if (!keysArr.includes(this.keyMap[i][j][0])) { // if the key doesnt exist in keysArr
            keysArr.push(this.keyMap[i][j][0]) // push to keys array
          }
        }
      }
    }
    return keysArr; // return all the keys
  }
  // find all values in hash
  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) { // go through all the buckets
      if (this.keyMap[i]) { // if a bucket exist
        for (let j = 0; j < this.keyMap[i].length; j++) { // iterate through array of tuples of the bucket
          if (!valuesArr.includes(this.keyMap[i][j][1])) { // if the value does not exist in valuesArr
            valuesArr.push(this.keyMap[i][j][1]) // push to valuesArr
          }
        }
      }
    }
    return valuesArr; // return all values
  }
}

let ht = new HashTable(17);
ht.set("maroon", "#800000")
ht.set("yellow", "#FFFF00")
ht.set("olive", "#808000")
ht.set("salmon", "#FA8072")
ht.set("lightcoral", "#F08080")
ht.set("mediumvioletred", "#C71585")
ht.set("plum", "#DDA0DD")
ht.set("purple", "#DDA0DD")
ht.set("violet", "#DDA0DD")


ht.keys().forEach(function (key) {
  console.log(ht.get(key));
});
