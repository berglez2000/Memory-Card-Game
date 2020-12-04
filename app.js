window.addEventListener("load", (event) => {
    event.preventDefault();

    // Variables
    const cards = document.querySelectorAll(".card");
    let allCards = ["angular", "css", "nodejs", "python", "udemy", "vue", "angular", "css", "nodejs", "python", "udemy", "vue"];
    const frontCards = document.querySelectorAll(".front-face");
    const backCards = document.querySelectorAll(".back-face");


    // Shuffle Cards
    const shuffleCards = () => {
        frontCards.forEach((card, index) => {
            let random = Math.floor(Math.random() * allCards.length);
            let randomCard = allCards[random];
            card.src = `img/${randomCard}.png`;
            allCards.splice(random, 1);
        });    
    }

    // Flip cards
    

});