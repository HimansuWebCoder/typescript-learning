// let subs = 10;
// let subs = "1M";
let subs: number | string = "1M";

let apiRequestStatus: "pending" | "success" | "error" = "pending";

// apiRequestStatus = "hitesh"; ❌
// apiRequestStatus = "success" ✅
// apiRequestStatus = "done"; ❌

let airlineSeat: "aisle" | "window" | "middle" = "aisle";

airlineSeat = "aisle";

const orders = ["12", "20", "28", "42"];

// let currentorder;
// let currentorder: any; // don't use any highly not recommended, avoid always
let currentorder: string | undefined;

for (let order of orders) {
  if (order === "28") {
    currentorder = order;
    break;
  }
  currentorder = "11";
}

// currentorder = 42;
console.log(currentorder);
