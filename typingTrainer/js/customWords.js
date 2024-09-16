import { grabIntersection } from "./customLetterLayouts.js"

let html = 
{
  textBox: document.getElementById('textBox'),
  userInput: document.getElementById('userInput'),
  scoreTable: document.getElementById('scoreTable'),
  wordAmount: document.getElementById('wordAmount'),
  keyboard: document.getElementById('keyboard'),
  hand: document.getElementById('hand'),
  row: document.getElementById('row')
}

// Sets defaults
html.keyboard = 'QWERTY'
html.hand = 'Both hands'
html.row = 'All rows'
html.wordAmount = 10

let intersection = grabIntersection()

// Define amount of words
wordAmount.onchange = () =>
{
  html.wordAmount = document.getElementById('wordAmount').value
  intersection = grabIntersection(html.keyboard, html.row, html.hand)
  userInput.focus()
  generate_words()
}
//Defines keyboard layout
keyboard.onchange = () => 
{
  html.keyboard = document.getElementById('keyboard').value
  intersection = grabIntersection(html.keyboard, html.row, html.hand)
  userInput.focus()
  generate_words()
}
// Defines which hand
document.getElementById('hand').onchange = () => 
{
  html.hand = document.getElementById('hand').value
  intersection = grabIntersection(html.keyboard, html.row, html.hand)
  userInput.focus()
  generate_words()
}
// Defines which row to use
document.getElementById('row').onchange = () =>
{
  html.row = document.getElementById('row').value
  intersection = grabIntersection(html.keyboard, html.row, html.hand)
  userInput.focus()
  generate_words()
}


// Listen for changes in user_input.
userInput.addEventListener('input', input_check)
// Changes span color depending on correctness
function input_check()
{
  const allSpans = textBox.querySelectorAll('span')
  const lastCharacterIndex = (allSpans.length - 2)
  let redCounter = 0
  allSpans.forEach((character, index) =>
  {
    // No characters
    if (userInput.value[index] == null)    
    {
      allSpans[index].classList.remove('correct')
      allSpans[index].classList.remove('incorrect')
    }

    // Correct characters
    else if (character.innerHTML == userInput.value[index] && redCounter == 0)  
    {
      allSpans[index].classList.add('correct')
      allSpans[index].classList.remove('incorrect')
    }

    // False characters
    else
    {
      redCounter += 1
      allSpans[index].classList.add('incorrect')
      allSpans[index].classList.remove('correct')
    }
  })

  // Generates new words if the last character is correct
  if (allSpans[lastCharacterIndex].classList.contains('correct'))
  {
    generate_words()
  }
}


// Separates the words into individual characters within spans
function separate_words(word)
{
  textBox.innerHTML = ''
  userInput.value = ''
    
  // Appends characters to the end of textBox
  word.split('').forEach((character) => 
  {
    const new_span = document.createElement('span')
    new_span.innerHTML = character
    textBox.appendChild(new_span) 
  })
}


// Generates random characters that fit customization
function generate_words()
{
  // These are just values I chose to be the min and max word size
  const max_size = 7
  const min_size = 2

  let words = ''
  for (let i = 0; i < wordAmount.value; i++)
  {
    let wordLength = Math.floor(Math.random() * (max_size - min_size) + min_size) // Sets random integer as word length
    for (let j = 0; j < wordLength; j++)
    {
        words += intersection[Math.floor(Math.random() * intersection.length)] // Selects random character from intersection
    }
    words += ' '
  }
  separate_words(words)
}


generate_words()