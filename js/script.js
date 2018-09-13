// catching the targeted DOM elements..
var selectedSec = document.getElementById('input-seconds');
var changingWord = document.getElementById('changing-word');
var insertedWord = document.getElementById('insert-word');
var message = document.getElementById('message');
var timeLeft = document.getElementById('time');
var scores = document.getElementById('score');
var seconds = 0;
var score = 0;

// randomly changing words:
const words = [
'hat',
'river',
'lucky',
'statue',
'generate',
'stubborn',
'cocktail',
'runaway',
'joke',
'developer',
'establishment',
'hero',
'javascript',
'nutrition',
'revolver',
'echo',
'siblings',
'investigate',
'massager',
'rerank',
'noesis',
'apprize',
'pothouse',
'estopping',
'spawn',
'subfamily',
'benthamic',
'mysia',
'favism',
'frondeur',
'lampless',
'yuzovka',
'errantry',
'brahms',
'terrorism',
'alcathous',
'ashburton',
'encke',
'bryozoa',
'signalise',
'winner',
'ossetic',
'bitting',
'linotype',
'wordsmith',
'preen',
'cutler',
'madwort',
'tutelar',
'heredity',
'erode',
'allision',
'colubrid',
'worms',
'slote',
'gabor',
'abecedary',
'fatten',
'dextrin',
'steward',
'waffness',
'raaf',
'columba',
'kation',
'soothsaid',
'unrived',
'spellable',
'dulcinea',
'horrendous',
'symptom',
'laughter',
'magic',
'master',
'space',
'evolution',
'parallax',
'python',
'django',
'angular',
'backbone',
'ember',
'node',
'bootstrap',
'ocean',
'landscape',
  ];

  
function randomWord(){
    let random = Math.floor(Math.random() * words.length);
    changingWord.textContent = words[random];
}
// firslt call this when page loads..
window.addEventListener('load', randomWord);

// dispkay the selected value:
var SecValue =  selectedSec.value;
timeLeft.textContent = SecValue;
seconds = SecValue;

// also when change occure on selectedSec:
selectedSec.addEventListener('change', function(){
    SecValue = this.value;
    timeLeft.textContent = SecValue;
    seconds = SecValue;
    insertedWord.value = '';
    insertedWord.blur();
    score = 0;
    scores.textContent = score;
    randomWord();
});


// when input field is focused
insertedWord.addEventListener('focus',countDownAndCheck);
function countDownAndCheck(){
    score = 0;
    seconds = SecValue;
    timeLeft.textContent= seconds;
    scores.textContent = score;
    insertedWord.value = '';
    if(insertedWord.className === 'wrong'){
        insertedWord.removeAttribute('class');
        message.textContent = '';
        message.removeAttribute('class');
    }
    var interval = setInterval(function(){
        if (seconds > 0){
            seconds--
        }else if(seconds === 0){
            clearInterval(interval);
            insertedWord.blur();
            insertedWord.className = 'wrong';
            message.textContent = 'game over !!';
            message.className = 'wrong';
        }
        timeLeft.textContent = seconds;
    }, 1000);
}

// when any key is pressed down:
insertedWord.addEventListener('keydown', function(){
    if(insertedWord.value === changingWord.textContent){
        score++;
        scores.textContent = score;
        randomWord();
        insertedWord.value = '';
        insertedWord.setAttribute('class', 'right');
        message.textContent = 'Correct !!';
        message.setAttribute('class', 'right');
        seconds = selectedSec.value;
        timeLeft.textContent = seconds;
    }else{
        insertedWord.className = '';
        message.textContent = '';
        message.className = '';
    }
});








