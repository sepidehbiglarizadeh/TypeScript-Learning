interface Product {
  name: string;
  price: number;
}

type ReadonlyProduct = {
  readonly [k in keyof Product]: Product[k];
};

let product: ReadonlyProduct = {
  name: "a",
  price: 1,
};
