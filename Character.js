
class Character {
  constructor(x, y, name) {
    this.x = x;
    this.y = y;
    this.name = name;
  }
  attack(character) {
    console.log('attacking', character);
  }
  
  toString() {
    return this.name;
  }
}

module.exports = Character;
