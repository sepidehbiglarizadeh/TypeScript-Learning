function echo<T extends number | string>(value: T): T {
  return value;
}

// ________________________________________________________

function echo2<T extends { name: string }>(value: T): T {
  return value;
}

echo2({ name: "sepi" });

// _________________________________________________________
interface Person {
  name: string;
}

function echo3<T extends Person>(value: T): T {
  return value;
}

// _________________________________________________________

class Person2 {
  constructor(public name: string) {}
}

function echo4<T extends Person2>(value: T): T {
  return value;
}

echo4(new Person2("sepi"));
