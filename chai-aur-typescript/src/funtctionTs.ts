function makeChai(type: string, cups: number) {
  console.log(`Making ${cups} cups of ${type}`);
}

// makeChai("Masala", "2") // catch error
makeChai("Masala", 2);

// function getChaiPrice(): number {
//   return 25;
// return "25 rupees"
// }

// Automatically type predict infer but recommend add otherwise it feel like any
function getChaiPrice() {
  return 25;
  // return "25 rupees"
}

function makeOrder(order: string) {
  if (!order) return null;
  return order;
}

// function makeOrder(order: string):string {
//   if(!order) return null
//   return order
// }

function logChai(): void {
  console.log("Chai is ready");
}

// function orderChai(type?: string) {

// }

function orderChai(type: string = "Masala") {}

function createChai(order: {
  type: string;
  sugar: number;
  size: "small" | "large";
}): number {
  return 4;
}
