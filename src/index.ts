// in this senario we have 2 end points
// 1- /users
// 2- /products

interface Result<T> {
  data: T | null;
  error: string | null;
}

interface User {
  userName: string;
}

interface Product {
  title: string;
}

function fetch<T>(url: string): Result<T> {
  console.log(url);
  return { data: null, error: null };
}

fetch<User>("url");
fetch<Product>("url");
