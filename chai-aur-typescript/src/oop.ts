// class Chai {
//   flavour: string;
//   price: number;

//   // constructor(flavour: string, price: number) {
//   //   this.flavour = flavour
//   //   this.price = price
//   // }

//   constructor(flavour: string) {
//     this.flavour = flavour;
//     console.log(this);
//   }
// }

// // const masalaChai = new Chai()
// // const masalaChai = new Chai("Ginger", 20)
// const masalaChai = new Chai("Ginger");
// masalaChai.flavour = "masala";

class Chai {
  public flavor: string = "Masala";

  private secretIngredients = "Cardomm";

  reveal() {
    return this.secretIngredients; // ok
  }
}

// const c = new Chai()
// c.reveal()

class Shop {
  protected shopName = "Chai corner";
}

class Branch extends Shop {
  getName() {
    return this.shopName; // OK
  }
}

// new Branch().getName

class Walet {
  #balance = 100;

  getBalance() {
    return this.#balance;
  }
}

const w = new Walet();

class Cup {
  readonly capacity: number = 250;

  constructor(capacity: number) {
    this.capacity = capacity;
  }
}

class ModernChai {
  private _sugar = 2;

  get sugar() {
    return this._sugar;
  }

  set sugar(value: number) {
    if (value > 5) throw new Error("Too sweet");
    this._sugar = value;
  }
}

const c = new ModernChai();
c.sugar = 3;

class EkChai {
  static shopName = "chaicode coffe";

  constructor(public flavour: string) {}
}

console.log(EkChai.shopName);

abstract class Drink {
  abstract make(): void;
}

class MyChai extends Drink {
  make() {
    console.log("Brewing chai");
  }
}

class Heater {
  heat() {}
}

class ChaiMaker {
  constructor(private heater: Heater) {}

  make() {
    this.heater.heat;
  }
}
