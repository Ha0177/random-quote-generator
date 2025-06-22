const quotes = [
    { text: "I am the reason I still have a chance.", author: "Davind Goggins"},

    { text: "Thus man of all creatures is more than a creature, he is also a creator.", author: "Maxwell Maltz"},

    { text: "Every moment waited is a moment wasted, and each wasted moment degrades your clarity of purpose.", author: "David Deida"},

    { text: "The present and the future depend on learning new habits and new ways of looking at old problems. There simply isn’t any future in digging continually into the past.", author: "Maxwell Maltz"},

    { text: "You make mistakes. Mistakes don’t make you anything.", author: "Maxwell Maltz"},

    { text: "If you are stressfully avoiding your fear, you cannot relax into the fearless.", author: "David Deida"},
];

const quoteElement = document.querySelector('.quote');
const authorElement = document.querySelector('.author p')

function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    const randomQuote = quotes[randomIndex];
    quoteElement.textContent = randomQuote.text;
    authorElement.textContent = randomQuote.author;
}
document.querySelector('.new-quote').addEventListener('click', displayRandomQuote);
displayRandomQuote();