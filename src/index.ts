type ComponentOptions = {
  selector: string;
};

function Component(options: ComponentOptions) {
  return (constructor: Function) => {
    console.log("component decorator called");
    constructor.prototype.options = options;
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertDOM = () => {
      console.log("inserting the component in the DOM");
    };
  };
}

@Component({ selector: "#profile-img" })
class ProfileComponent {}
