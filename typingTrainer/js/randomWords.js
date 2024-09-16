import { uniqueStarwarsWords } from './words.js'

// Defines all elements from 'randomWords.html'
let html =
{
  textBox: document.getElementById('textBox'),
  userInput: document.getElementById('userInput'),
  startingTimer: document.getElementById('startingTimer'),
  scoreTable: document.getElementById('scoreTable'),
  timeTaken: document.getElementById('timeTaken'),
  wordAmount: document.getElementById('wordAmount').value
}

let wpm = 0
let clock = 0
let accuracy = 0
let errorCount = 0
let recentlyTyped = -1
let initialCountDown = 3
let characterAmount = 0
let countUpInterval = ''
let countDownInterval = ''

// Temporarily disables input field
html.userInput.disabled = true

// Resets all elements to default when 'wordAmount' is changed
wordAmount.onchange = (resetToDefaults)


// Listen for changes in html.userInput.
html.userInput.addEventListener('input', inputCheck)
// Changes span color depending on correctness
function inputCheck()
{
  const allSpans = html.textBox.querySelectorAll('span')
  const lastCharacterIndex = (allSpans.length - 2) // -2 removes the final space
  let redCounter = 0
  allSpans.forEach((character, index) =>
  {
    // No characters
    if (html.userInput.value[index] == null)    
    {
      allSpans[index].classList.remove('correct')
      allSpans[index].classList.remove('incorrect')
    }

    // Correct characters
    else if (character.innerHTML == html.userInput.value[index] && redCounter == 0)  
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

  totalErrorCheck(allSpans)

  // Adds score and grabs new words if the last character is correct
  if (allSpans[lastCharacterIndex].classList.contains('correct'))
  {
    characterAmount = allSpans.length - 2
    clearInterval(countUpInterval)
    html.timeTaken.innerHTML = (clock + '!')
    findAccuracy()
    wpm = Math.round(characterAmount / 5 / (clock / 60))
    appendToTable(characterAmount - 2)
    grabWords()
    clock = 0
    countUpInterval = setInterval(countUp, 1000)
    }
}


// Separates the words into individual characters within spans
function separateCharacters(words)
{
  textBox.innerHTML = ''
  userInput.value = ''

  // Appends characters to the end of textBox
  words.split('').forEach((character) => 
  {
    const newSpan = document.createElement('span')
    newSpan.innerHTML = character
    textBox.appendChild(newSpan)
  })
}


// Grabs 'wordAmount' random words from the starwars script
function grabWords()
{
  errorCount = 0
  let words = ''
  for (let i = 0; i < html.wordAmount; i++)
  {
    let random = Math.floor(Math.random() * uniqueStarwarsWords.length)
    words = words.concat(uniqueStarwarsWords[random], ' ')
  }
  separateCharacters(words)
}


// Unlocks input and starts timer after counting down
function countdown()
{
  initialCountDown -= 1
  startingTimer.innerHTML = initialCountDown
  if (initialCountDown == 0)
  {
    clearInterval(countDownInterval)
    
    userInput.disabled = false
    userInput.focus()
    timeTaken.innerHTML = 0
    startingTimer.innerHTML = 'start!'
    countUpInterval = setInterval(countUp, 1000)
    grabWords()
  }
}


document.getElementById('startButton').addEventListener('click', startFreshTimer)
// Fully resets timer
function startFreshTimer()
{
  resetToDefaults()
  startingTimer.innerHTML = initialCountDown
  countDownInterval = setInterval(countdown, 1000)
}


// Counts number of errors
function totalErrorCheck(allSpans)
{
  if (html.userInput.value.length - 1 > recentlyTyped)
  {
    recentlyTyped = html.userInput.value.length - 1
    if (html.userInput.value[recentlyTyped] != allSpans[recentlyTyped].innerHTML)
    {
      errorCount += 1
      console.log(errorCount)
    }
    else
    {
      recentlyTyped = 0
    }
  }
}


function findAccuracy()
{
  accuracy = Math.round(100 - (100 / (characterAmount / errorCount)))
  if (accuracy == -Infinity) { accuracy = 100 }
  else if (accuracy < 0) { accuracy = 0 }
}


// Appends your typing score to the table upon completion
function appendToTable()
{

  let row = html.scoreTable.insertRow(1)
  let cell1 = row.insertCell(0)
  let cell2 = row.insertCell(1)
  let cell3 = row.insertCell(2)
  let cell4 = row.insertCell(3)
  cell1.innerHTML = wordAmount.value + ' words'
  cell2.innerHTML = characterAmount + ' characters'
  cell3.innerHTML = accuracy + '%'
  cell4.innerHTML = wpm + ' wpm'
}


// Counts up to time how long you take
function countUp()
{
  clock += 1
  timeTaken.innerHTML = clock
}


// Resets clocks and values to default
function resetToDefaults()
{
  clearInterval(countUpInterval)
  clearInterval(countDownInterval)
  
  clock = 0
  errorCount = 0
  initialCountDown = 3
  html.userInput.disabled = true
  html.timeTaken.innerHTML = 'timer'
  html.startingTimer.innerHTML = '--Press Start--'
  html.textBox.innerHTML = '(text will appear here)'    
  html.wordAmount = document.getElementById('wordAmount').value
}