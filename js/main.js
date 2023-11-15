	/*----- constants -----*/
	const suits = ['s', 'c', 'd', 'h'];
	const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];
	const originalDeck = buildOriginalDeck();
    const h2El = document.querySelector('h2');
	/*----- state variables -----*/
	let shuffleDeck = getNewShuffledDeck();
    h2El.innerHTML = '0';
	/*----- cached elements  -----*/
	

	

	/*----- event listeners -----*/
	document.getElementById('drawCardButton').addEventListener('click', function() {
        renderRandomCardInContainer(shuffleDeck, document.getElementById('shuffled-deck-container'));
    });
	

	/*----- functions -----*/
	

	
	function buildOriginalDeck() {
		const deck = [];
	
		suits.forEach(function(suit) {
		  ranks.forEach(function(rank) {
			deck.push({
			 
			  face: `${suit}${rank}`,
			 
			  value: Number(rank) || (rank === 'A' ? 11 : 10)
			});
		  });
		});
		return deck;
	  }
	  function renderRandomCardInContainer(shuffleDeck, container) {
		if (shuffleDeck.length > 0) {
			
			const randomIndex = Math.floor(Math.random() * shuffleDeck.length);
			const randomCard = shuffleDeck[randomIndex];
			const cardHtml = `<div class="card ${randomCard.face}"></div>`;	
			let cardVal = randomCard.value;
			h2El.innerHTML  = parseInt(h2El.innerHTML)+cardVal; 	
			container.innerHTML += cardHtml;
			shuffleDeck.splice(randomIndex, 1);
			
		}
	}

	function getNewShuffledDeck() {
		
		const tempDeck = [...originalDeck];
		const newShuffledDeck = [];
		while (tempDeck.length) {		 
		  const rndIdx = Math.floor(Math.random() * tempDeck.length);	
		  newShuffledDeck.push(tempDeck.splice(rndIdx, 1)[0]);
		}
		return newShuffledDeck;
	  }
	 
	  
	