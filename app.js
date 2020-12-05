window.addEventListener("load", (event) => {
    event.preventDefault();

    // Variables
    const cards = document.querySelectorAll(".card");
    let allCards = ["angular", "css", "nodejs", "python", "udemy", "vue", "angular", "css", "nodejs", "python", "udemy", "vue"];
    const frontCards = document.querySelectorAll(".front-face");
    const backCards = document.querySelectorAll(".back-face");
    let openedCards = [];
    let correctCards = [];


    const checkCards = () => {
        cards.forEach(card => {
            const frontCard = card.children[1];
            const backCard = card.children[0];

            if (backCard.classList.contains("hide")){
                if (openedCards.includes(frontCard.src)){
                    backCard.classList.toggle("hide");
                    frontCard.classList.toggle("hide");
                }
            }
        });
    }


    // Shuffle Cards
    const shuffleCards = () => {
        frontCards.forEach((card, index) => {
            let random = Math.floor(Math.random() * allCards.length);
            let randomCard = allCards[random];
            card.src = `img/${randomCard}.png`;
            allCards.splice(random, 1);
        });    
    }

    shuffleCards();

    // Flip cards
    cards.forEach((card, index) => {
        const backCard = card.children[0];
        const frontCard = card.children[1];

        backCard.addEventListener("click", () => {
            // Flip animation
            if (backCard.style.animation){
                backCard.style.animation = "";
            } else {
                backCard.style.animation = "flipCard 0.5s ease forwards";
            }

            // Show front-face
            backCard.classList.toggle("hide");
            frontCard.classList.toggle("hide");
            // Append to array
            openedCards.push(frontCard.src);

            if (openedCards.length === 2){
                if (openedCards[0] === openedCards[1]){
                    // Same cards
                    console.log("You found two same cards");
                    correctCards.push(openedCards[0], openedCards[1]);
                    openedCards.splice(0, openedCards.length);
                    
                } else{
                    //Diffrent cards
                    console.log("You didn't found same cards");
                    checkCards();
                    openedCards.splice(0, openedCards.length);
                }
            }
        });
    });
});