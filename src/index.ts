function Component(value: number) {
  return (constructor: Function) => {
    console.log("component decorator called");
    constructor.prototype.options = value;
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertDOM = () => {
      console.log("inserting the component in the DOM");
    };
  };
}

@Component(2)
class ProfileComponent {}
