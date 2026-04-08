// function makeChai(order: {type: string; sugar: number; strong: boolean}) {
//   console.log(order);
// }

// function serveChai(order: {type: string; sugar: number; strong: boolean}) {
//   console.log(order);
// }

type ChaiOrder = {
  type: string;
  sugar: number;
  strong: boolean;
};

function makeChai(order: ChaiOrder) {
  console.log(order);
}

function serveChai(order: ChaiOrder) {
  console.log(order);
}

// type TeaRecipe = {
//   water: number;
//   milk: number;
// };

interface TeaRecipe {
  water: number;
  milk: number;
}

// class MasalaChai implements TeaRecipe {
//   water = 100;
//   milk = 50;
// }

// type CupSize = "small" | "large";

// class Chai implements CupSize {

// }

interface CupSize {
  size: "small" | "large";
}

class Chai implements CupSize {
  size: "small" | "large" = "large";
}

// type Response = {ok: true} | {ok: false};

// class myRes implements Response {
//   ok: boolean = true;
// }

type TeaType = "masala" | "ginger" | "lemon";

function orderChai(t: TeaType) {
  console.log(t);
}

type BaseChai = { teaLeaves: number };
type Extra = { masala: number };

type MasalaChai = BaseChai & Extra;

const cup: MasalaChai = {
  teaLeaves: 2,
  masala: 1,
};

type User = {
  username: string;
  bio?: string;
};

const u1: User = { username: "Himansu" };
const u2: User = { username: "Himansu", bio: "himansuwebcoder.in" };

type Config = {
  readonly appName: string;
  version: number;
};

const cfg: Config = {
  appName: "Masterji",
  version: 1,
};

// cfg.appName = "ChaiCode"
