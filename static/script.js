document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    let currentIndex = 0;

    function showCard(index, direction) {
        const currentCard = cards[currentIndex];
        const nextCard = cards[index];

        // 현재 카드 슬라이드 아웃
        if (currentCard) {
            currentCard.classList.add("exit");
            currentCard.addEventListener("animationend", () => {
                currentCard.classList.remove("exit", "active", "flipped");
            }, { once: true });
        }

        // 새 카드 슬라이드 인
        nextCard.classList.add("enter", "active");
        nextCard.addEventListener("animationend", () => {
            nextCard.classList.remove("enter");
        }, { once: true });

        currentIndex = index;
    }

    function flipCard() {
        cards[currentIndex].classList.toggle("flipped");
    }

    function nextCard() {
        let newIndex = (currentIndex + 1) % cards.length;
        showCard(newIndex, "right");
    }

    function prevCard() {
        let newIndex = (currentIndex - 1 + cards.length) % cards.length;
        showCard(newIndex, "left");
    }

    function randomCard() {
        let newIndex = Math.floor(Math.random() * cards.length);
        showCard(newIndex);
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

    // 버튼 이벤트
    document.getElementById("nextBtn").addEventListener("click", () => {
        nextCard();   // 오른쪽 버튼 → 다음 카드
    });

    document.getElementById("prevBtn").addEventListener("click", () => {
        prevCard();   // 왼쪽 버튼 → 이전 카드
    });

    // 첫 카드 표시
    showCard(currentIndex);
});
