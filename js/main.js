	/*----- constants -----*/
	const suits = ['s', 'c', 'd', 'h'];
	const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];
	const originalDeck = buildOriginalDeck();
    const h2El = document.querySelector('h2');
	const h3El = document.querySelector('h3');
	let playerScore=0;
    let dealerScore=0;
	let isGameOver = false;
	let isCardAce = false;

	/*----- state variables -----*/
	let shuffleDeck = getNewShuffledDeck();
    h2El.innerHTML = '0';
	/*----- cached elements  -----*/
	

	

	/*----- event listeners -----*/
	document.getElementById('drawCardButton').addEventListener('click', function() {
        renderRandomCardInContainer(shuffleDeck, document.getElementById('shuffled-deck-container'));
    });
	
    document.getElementById('resetButton').addEventListener('click',function(){
		resetGame(shuffleDeck, document.getElementById('shuffled-deck-container'));

	});
		
    document.getElementById('stayButton').addEventListener('click',function(){
		turnPlayer(shuffleDeck, document.getElementById('shuffled-deck-container'));

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
		if(isGameOver){return;}
		else if (shuffleDeck.length > 0) {
			
			const randomIndex = Math.floor(Math.random() * shuffleDeck.length);
			const randomCard = shuffleDeck[randomIndex];
			const cardHtml = `<div class="card ${randomCard.face}"></div>`;	
			let cardVal = randomCard.value;
			if(randomCard.value === 11 ){isCardAce = true;}
			
			h2El.innerHTML  = parseInt(h2El.innerHTML)+cardVal; 
			container.innerHTML += cardHtml;			
			shuffleDeck.splice(randomIndex, 1);
			validateScore(h2El);
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

	  function resetGame(shuffleDeck, container){
		container.innerHTML='';
		h2El.innerHTML='0';
		h3El.innerHTML = "Player's Turn";
        isGameOver = false;
		isCardAce = false;
		alert("PlayerScore:"+playerScore);
		alert("DealerScore:"+dealerScore);
		playerScore=0;
		dealerScore=0;
	  } 
	  function validateScore(h2El){        
	
        if(h2El.innerHTML == 21 && isCardAce === false)
		{
			h2El.innerHTML = h2El.innerHTML +', you won.'; isGameOver = true;
		}
		if(h2El.innerHTML == 21 && isCardAce === true)
		{
			h2El.innerHTML = h2El.innerHTML +', you won.'; isGameOver = true;
		}
		if(h2El.innerHTML > 21 && isCardAce === false)
		{
			h2El.innerHTML = h2El.innerHTML +', you lost.';isGameOver = true;
		}
		if(h2El.innerHTML > 21 && isCardAce === true)
		{
			h2El.innerHTML = h2El.innerHTML-10;
			if(h2El.innerHTML == 21){h2El.innerHTML +', you won.';isGameOver = true;}
			if(h2El.innerHTML < 21){isGameOver = false;isCardAce = false}
			if(h2El.innerHTML > 21){h2El.innerHTML +', you lost.';isGameOver = true;}
		}
		
	  }
	  function turnPlayer(shuffleDeck, container) {
		if (h3El.innerHTML == "Player's Turn") {
			h3El.innerHTML = "Dealer's Turn";
			playerScore = parseInt(h2El.innerHTML);
			container.innerHTML = ''			
			h2El.innerHTML = '0';		
		}
		if (h3El.innerHTML == "Dealer's Turn") {
			dealerScore = parseInt(h2El.innerHTML);
			
		}
	}
	
	