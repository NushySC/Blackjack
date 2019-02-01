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
      this.value = parseInt(this.rank);
    }
    else if (this.rank === "jack", "queen", "king") {
      this.value = 10;
    } else if (this.rank === "ace") {
      this.value = 11;
    }    
    return this.value;
  } 

  update() {
    //document.querySelector(".player-hand .score").textContent = ;
  }

  render () {
    this.element = document.createElement("div");
    this.element.className = `card face-${this.rank}-of-${this.suit}`;
  //  this.element = document.createElement("div");
  //  this.element.className = `card face-revers`;
  //  this.element = document.createElement("div");
  //  this.element.className = `card face-${this.rank}-of-${this.suit}`;
    this.score();
    return this.element;
  }

  mount (parent) {
    parent.appendChild(this.render());
  }
}
