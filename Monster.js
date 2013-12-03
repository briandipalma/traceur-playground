var Character = require("./Character");

//import { Character } from "./Character";

class Monster extends Character {
  constructor(x, y, name) {
    super(x, y, name);
    this.name = name;
    this.health_ = 100;
  }

  attack(character) {
    super.attack(character);
  }

  get isAlive() { return this.health > 0; }
  get health() { return this.health_; }
  set health(value) {
    if (value < 0) throw new Error('Health must be non-negative.');
    this.health_ = value;
  }
}
debugger;
var monster = new Monster(10, 10, "ARGGHH");
var character = new Character(1, 1, "Bob");

console.log(monster.health);

monster.attack(character);
