	/*----- constants -----*/
	const suits = ['s', 'c', 'd', 'h'];
	const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];
	const board =[0,0,0,0,0,0,0,0];
    const boardEl= document.getElementById('c0r1');
	/*----- state variables -----*/


	/*----- cached elements  -----*/


	/*----- event listeners -----*/


	/*----- functions -----*/
	
	deck = buildOriginalDeck();
    const firstCard = deck[0]; // Accesses the first card
    boardEl.innerText = firstCard.face + " with value " + firstCard.value;

  
	
	function buildOriginalDeck() {
		const deck = [];
		// Use nested forEach to generate card objects
		suits.forEach(function(suit) {
		  ranks.forEach(function(rank) {
			deck.push({
			  // The 'face' property maps to the library's CSS classes for cards
			  face: `${suit}${rank}`,
			  // Setting the 'value' property for game of blackjack, not war
			  value: Number(rank) || (rank === 'A' ? 11 : 10)
			});
		  });
		});
		return deck;
	  }
	 
	  