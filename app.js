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
            window.addEventListener("animationend", () => {
                backCard.classList.toggle("hide");
                frontCard.classList.toggle("hide");
            });
        });
    });
});