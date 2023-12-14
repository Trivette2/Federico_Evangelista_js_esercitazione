let button = document.querySelector('#btnn');
let wrapper = document.querySelector('#wrapper');

const quiz = {
    'domande': [
        { quesito: "Leonardo merita di diventare insegnante senior?", rispostaCorretta: "Sì" },
        { quesito: "Pescara è la capitale dell'Italia?", rispostaCorretta: "No" },
        { quesito: "Federico è stupido?", rispostaCorretta: "No" },
        { quesito: "Sto riguardando la lezione?", rispostaCorretta: "No" },
        { quesito: "Le risposte precedenti sono corrette?", rispostaCorretta: "No" }
    ],

    button : function () {
        wrapper.innerHTML = "";
        this.domande.forEach((domanda) => {
            let cardDomanda = document.createElement("div");
            cardDomanda.classList.add("card");
            cardDomanda.innerHTML = `
            <h3>${domanda.quesito}</h3>
            <h2>${domanda.rispostaCorretta}</h2>
            `;
            wrapper.appendChild(cardDomanda);
        });
    }
};

let check = false;

button.addEventListener("click", () => {
    if (!check) {
        quiz.button();
        button.innerHTML = "Il gioco è finito";
        check = true;
    } else {
        wrapper.innerHTML = "";
        button.innerHTML = "Sorpresa";
        check = false; 
    }
    
});
