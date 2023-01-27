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

function Pipe(constructor: Function) {
  console.log("pipe decorator called");
  constructor.prototype.pipe = true;
}

@Pipe
@Component({ selector: "#profile-img" })
class ProfileComponent {}
