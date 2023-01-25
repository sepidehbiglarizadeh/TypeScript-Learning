class KeyValuePair<T> {
  constructor(public key: T, public value: string) {}
}

class KeyValuePair2<K, V> {
  constructor(public key: K, public value: V) {}
}

let pair = new KeyValuePair<string>("name", "Apple");
let pair2 = new KeyValuePair2<string, number>("id", 1);
