function Component(constructor: Function) {
  console.log("component decorator called");
  constructor.prototype.uniqueId = Date.now();
  constructor.prototype.insertDOM = () => {
    console.log("inserting the component in the DOM");
  };
}

@Component
class ProfileComponent {
  
}
