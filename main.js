const robin = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        belongings: {
            hat: "small",
            sunglasses: "small"
        }
    },
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
}
robin.roll(3)
for (let i = 0; i < robin.inventory.length; i++) {
    console.log(robin.inventory[i])
}
class Character {
    static = MAX_HEALTH = 100
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        const robin = new Character("Robin");
        robin.inventory = ["sword", "potion", "artifact"];
        robin.companion = new Character("Leo");
        robin.companion.type = "Cat";
        robin.companion.companion = new Character("Frank");
        robin.companion.companion.type = "Flea";
        robin.companion.companion.inventory = ["small hat", "sunglasses"]
    }
}
class Adventurer extends Character {
    static Roles = ['fighter', 'healer', 'wizard'];
    constructor(name, role) {
        if (!Adventurer.Roles.includes(role)) {
            throw new Error(`Invalid role: ${role}`);
        }
        super(name);
        // Adventurers have specialized roles.
        this.role = role;
        // Every adventurer starts with a bed and 50 gold coins.
        this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }
    duel(opponent) {
        console.log(`${this.name} vs. ${opponent.name}`);
        this.roll();
        opponent.roll();
        if (this.health > opponent.health) {
            console.log(`${this.name} wins!`);
        } else if (opponent.health > this.health) {
            console.log(`${opponent.name} wins!`);
        } else {
            console.log("It's a tie!");
        }
    }
}
class Companion extends Character {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    suppport () {
        console.log(`${this.name} is being supported...`);
        super.roll();
    }
}
const adRobin = new Character("Robin");
adRobin.inventory = ["sword", "potion", "artifact"];
adRobin.companion = new Character("Leo");
adRobin.companion.type = "Cat";
adRobin.companion.companion = new Character("Frank");
adRobin.companion.companion.type = "Flea";
adRobin.companion.companion.inventory = ["small hat", "sunglasses"]
adRobin.companion.companion.suppport()
class AdventurerFactory {
    constructor (role) {
      this.role = role;
      this.adventurers = [];
    }
    generate (name) {
      const newAdventurer = new Adventurer(name, this.role);
      this.adventurers.push(newAdventurer);
    }
    findByIndex (index) {
      return this.adventurers[index];
    }
    findByName (name) {
      return this.adventurers.find((a) => a.name === name);
    }
  }
  const healers = new AdventurerFactory("Healer");
  const adRobin = healers.generate("Robin");