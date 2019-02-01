document.addEventListener('DOMContentLoaded', () => {
  // Create and shuffle a new deck of cards
  const deck = new Deck();
  deck.shuffle();
  
  deck.showCardsDealer();
  const card1 = deck.showCardsPlayer();
  const card2 = deck.showCardsPlayer();
  let cardsInHand = [card1, card2];
  let sum = 0;
    for (let i = 0; i < cardsInHand.length; i++) {
      sum += cardsInHand[i].value;
  }
  document.querySelector(".score-player").textContent = sum;
  //console.log(sum);
  const hitBtn = document.querySelector(".js-hit");
  hitBtn.addEventListener('click', () => {
    const card3 = deck.showCardsPlayer();
    let cardsInHandPlayer = [...cardsInHand, card3];
    sum += card3.value;
    document.querySelector(".score-player").textContent = sum;
    //let sum2 = 0;
    //for (let i = 0; i < cardsInHandPlayer.length; i++) {
    //  sum2 += cardsInHandPlayer[i].value;
   console.log(sum);
  });
});