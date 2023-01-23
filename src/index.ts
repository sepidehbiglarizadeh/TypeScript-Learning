function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log("invalid argument");
}

greet(undefined);
