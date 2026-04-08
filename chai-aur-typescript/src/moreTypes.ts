// type assertions

let response: any = "42";
// let numericLength:number = response.length;
// let numericLength: number = (response as string).

type Book = {
  name: string;
};

// let bookString = '{"name": "One thing"}'
let bookString = '{"name": "who moved my cheese"}';

// let bookObject = JSON.parse(bookString);
// console.log(bookObject)
let bookObject = JSON.parse(bookString) as Book;
// console.log(bookObject.)

const inputElement = document.getElementById("username") as HTMLInputElement;

let value: any;

value = "chai";
value = [1, 2, 3];
value = 2.5;
value.toUpperCase();

let newValue: unknown;

newValue = "chai";
newValue = [1, 2, 3];
newValue = 2.5;
// newValue.toUpperCase()
if (typeof newValue === "string") {
  newValue.toUpperCase();
}

try {
} catch (error: any) {
  // don't use in production mode
  console.log(error.message);
}

try {
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
  console.log("Error", error);
}

const data: unknown = "chai aur code";
// const strData: string = data
const strData: string = data as string;

// type Role = "admin" | "user";
type Role = "admin" | "user" | "superadmin";

function redirectBasedOnRole(role: Role): void {
  if (role === "admin") {
    console.log("Redirecting to admin dashboard");
    return;
  }

  if (role === "user") {
    console.log("Redirecting to suer dashboard");
    return;
  }
  role;
}

function neverReturn(): never {
  while (true) {}
}
