document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    let currentIndex = 0;

    function showCard(index, direction) {
        const currentCard = cards[currentIndex];
        const nextCard = cards[index];

        // 현재 카드 슬라이드 아웃
        if (currentCard) {
            const exitClass = direction === "right" ? "exit-left" : "exit-right";
            currentCard.classList.add(exitClass);
            currentCard.addEventListener("animationend", () => {
                currentCard.classList.remove(exitClass, "active", "flipped");
            }, { once: true });
        }

        // 새 카드 슬라이드 인
        const enterClass = direction === "right" ? "enter-right" : "enter-left";
        nextCard.classList.add(enterClass, "active");
        nextCard.addEventListener("animationend", () => {
            nextCard.classList.remove(enterClass);
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
        showCard(newIndex, "right"); // 랜덤은 오른쪽 방향으로 기본 처리
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
        //nextCard();
        randomCard();
    });

    document.getElementById("prevBtn").addEventListener("click", () => {
        prevCard();
    });

    // 첫 카드 표시 → 랜덤 모드로 변경
    randomCard();
});
