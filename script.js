// This JavaScript code is used to translate the English vocabulary words into Kannada.

function translateVocabulary() {
    const vocabularyList = document.querySelectorAll(".vocabulary");

    for (const vocabulary of vocabularyList) {
        const englishWord = vocabulary.querySelector(".english-word");
        const kannadaWord = vocabulary.querySelector(".kannada-word");

        kannadaWord.textContent = englishWord.textContent.kannada;
    }
}

// Add an event listener to the translate button.

document.getElementById("translate-button").addEventListener("click", translateVocabulary);
