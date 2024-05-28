const wordDisplay = document.getElementById(`word-display`);
const wordInput = document.getElementById(`word-input`);
const startButton = document.getElementById(`start-button`);
const scoreDisplay = document.getElementById(`score`);
const timerDisplay = document.getElementById(`game-timer`)
let currentWord;
let score = 0;
let isPlaying = false;
let time;
let timer;

timerDisplay.hidden=true;

const words = [

    "apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew",
    "iceberg", "jackfruit", "kiwi", "lemon", "mango", "nectarine", "orange", "papaya",
    "quince", "raspberry", "strawberry", "tangerine", "ugli", "vanilla", "watermelon", "xigua",
    "yam", "zucchini", "avocado", "blueberry", "cantaloupe", "dragonfruit", "eggplant", "feijoa",
    "gooseberry", "huckleberry", "imbe", "jabuticaba", "kumquat", "lime", "mulberry", "nutmeg",
    "olive", "pineapple", "quinoa", "rhubarb", "soursop", "tomato", "ugli", "voavanga",
    "walnut", "ximenia", "yellowwood", "zinfandel", "apricot", "blackberry", "coconut", "durian",
    "elderflower", "fig", "grapefruit", "honeycrisp", "indigo", "jicama", "kiwano", "lychee",
    "mandarin", "navel", "olive", "peach", "quandong", "redcurrant", "sapodilla", "tamarind",
    "ugni", "valencia", "wolfberry", "ximenia", "yellowfin", "zucchini", "acerola", "bilberry",
    "clementine", "damson", "evergreen", "fingerlime", "grumichama", "hawthorn", "illawarra",
    "juniper", "kaffir", "loganberry", "mangosteen", "nashi", "oregano", "persimmon", "quenepa",
    "roseapple", "salak", "tangelo", "ume", "viburnum", "waterchestnut", "xylocarp", "yuzu",
    "almond", "butternut", "cashew", "douglas", "elm", "fir", "ginkgo", "hazelnut",
    "ironwood", "jacaranda", "kapok", "larch", "mahogany", "nutmeg", "oak", "pine",
    "quassia", "redwood", "spruce", "tamarack", "umbrella", "vine", "walnut", "xylosma",
    "yellowwood", "zebrawood", "absinthe", "basil", "caraway", "dill", "epazote", "fennel",
    "galangal", "horseradish", "iris", "jasmine", "kale", "lavender", "marjoram", "nasturtium",
    "oregano", "parsley", "quassia", "rosemary", "saffron", "thyme", "umbellifer", "verbena",
    "wasabi", "xanthan", "yerba", "zinger", "angelica", "bay", "chervil", "dandelion",
    "echinacea", "freesia", "gardenia", "hibiscus", "indigo", "juniper", "kudzu", "lemongrass",
    "mint", "nettles", "oregano", "peppermint", "quinine", "rue", "spearmint", "tansy",
    "uva", "vanilla", "wintergreen", "xylopia", "yarrow", "zostera", "arugula", "broccoli",
    "cabbage", "daikon", "endive", "fennel", "garlic", "horseradish", "iceberg", "jicama",
    "kohlrabi", "lettuce", "mustard", "nasturtium", "onion", "parsnip", "quince", "radicchio",
    "shallot", "turnip", "ugni", "violet", "watercress", "xanthan", "yam", "zucchini",
    "alfalfa", "bamboo", "cattail", "dogwood", "eucalyptus", "fir", "gorse", "heather",
    "ivy", "jungle", "kelp", "lotus", "maple", "nerium", "oak", "palm",
    "quaking", "reed", "sycamore", "teak", "umbrella", "vine", "willow", "xerophyllum",
    "yew", "zamia", "arnica", "birch", "cedar", "dogwood", "elm", "fir",
    "ginger", "hazel", "ivy", "juniper", "kiwi", "laurel", "mahogany", "neem",
    "oak", "pine", "quassia", "redwood", "spruce", "tulip", "umbrella", "violet",
    "willow", "xeranthemum", "yellowwood", "zinnia", "amaranth", "buckwheat", "chia", "dahlia",
    "elder", "fennel", "ginkgo", "hawthorn", "iris", "jasmine", "kale", "lavender",
    "mulberry", "nasturtium", "oregano", "papaya", "quinoa", "rose", "safflower", "thyme",
    "umbrella", "verbena", "willow", "xylosma", "yarrow", "zinnia", "aspen", "birch",
    "cedar", "dogwood", "elm", "fir", "gum", "hickory", "ironwood", "jacaranda",
    "kauri", "larch", "mahogany", "neem", "oak", "pine", "quassia", "redwood",
    "spruce", "tulip", "umbrella", "violet", "willow", "xerophyllum", "yellowwood", "zinnia"

];


function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function startGame() {

    time = 30;
    timerDisplay.hidden=false;
    isPlaying = true;
    score = 0;
    wordInput.disabled = false;
    wordInput.focus();
    startButton.hidden = true;
    nextWord();
    timer = setInterval(countdown, 1000);

}

function nextWord() {
    currentWord = getRandomWord();
    wordDisplay.textContent = currentWord;
    wordInput.value = '';
}

function checkInput() {
    if (wordInput.value === currentWord && isPlaying) {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        nextWord();
    }
}

function countdown(){
    if (time > 0 ){
        time--;
        timerDisplay.textContent = `${time}s`;
    } else {
        clearInterval(timer);
        isPlaying = false;
        wordInput.disabled = true;
        startButton.hidden = false;
        wordDisplay.textContent = `Game Over Yo! You got ${score} point(s)!` 
        timerDisplay.hidden=true;
    }
    
}

startButton.addEventListener('click', startGame);
wordInput.addEventListener('input', checkInput);