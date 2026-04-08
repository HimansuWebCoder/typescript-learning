function wrapInArray<T>(item: T): T[] {
  return [item];
}

wrapInArray("masala");
wrapInArray(42);
wrapInArray({ flavor: "ginger" });

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

pair("masala", "test");
pair("masala", 20);
pair("masala", { flavor: "ginger" });

interface Box<T> {
  content: T;
}

// const numberBox: Box<number> = {content: 10}
// const numberBox: Box<number> = {content: "10"}
const numberBox: Box<string> = { content: "10" };

// Partial<T>

// Real world use of Generic

interface ApiPromise<T> {
  status: number;
  data: T;
}

const res: ApiPromise<{ flavor: string }> = {
  status: 200,
  data: { flavor: "masala" },
};

// same as in form or axios or state management
