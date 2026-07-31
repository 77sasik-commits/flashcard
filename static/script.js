document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    let currentIndex = 0;

    function showCard(index) {
        cards.forEach((card, i) => {
            card.classList.remove("active", "flipped");
            if (i === index) {
                card.classList.add("active");
            }
        });
    }

    function flipCard() {
        cards[currentIndex].classList.toggle("flipped");
    }

    function nextCard() {
        currentIndex = (currentIndex + 1) % cards.length;
        showCard(currentIndex);
    }

    function prevCard() {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        showCard(currentIndex);
    }

    function randomCard() {
        currentIndex = Math.floor(Math.random() * cards.length);
        showCard(currentIndex);
    }

    // 클릭 → 카드 뒤집기
    cards.forEach(card => {
        card.addEventListener("click", flipCard);
    });

    // 키보드 이벤트
    document.addEventListener("keydown", (e) => {
        if (e.code === "Space") {
            e.preventDefault();
            flipCard();
        }
        if (e.code === "ArrowRight") {
            nextCard();
        }
        if (e.code === "ArrowLeft") {
            prevCard();
        }
        if (e.code === "KeyR") {
            randomCard();
        }
    });

    // 첫 카드 표시
    showCard(currentIndex);
});
