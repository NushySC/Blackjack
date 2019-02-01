/*
 * A playing card
 */
class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
    this.value;
  }

  score() {
    if (parseInt(this.rank) <= 10) {
      this.value = this.rank;
    }
    else {
      this.value = 11;
    }    
    return this.value;
    console.log(this.value);
  } 

  render () {
    this.element = document.createElement("div");
    this.element.className = `card face-${this.rank}-of-${this.suit}`;
  //  this.element = document.createElement("div");
  //  this.element.className = `card face-revers`;
  //  this.element = document.createElement("div");
  //  this.element.className = `card face-${this.rank}-of-${this.suit}`;
  this.score();
  console.log(this.score());
  return this.element;
  }

  mount (parent) {
    parent.appendChild(this.render());
  }
}
