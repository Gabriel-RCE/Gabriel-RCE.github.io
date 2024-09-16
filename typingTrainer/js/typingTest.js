document.getElementById('testScript').addEventListener('animationend', customizeMessage)
const userInput = document.getElementById('userInput')


let pass = false
let errorCount = 0
let recentlyTyped = -1
let textBox = document.getElementById('textBox')
let testScore = document.getElementById('testScore')

let wpm = document.getElementById('wpmButtons').addEventListener('click', (event) =>
{
  wpm = event.target.id
})

// Listen for changes in userInput.
userInput.addEventListener('input', inputCheck)
// Changes span color depending on correctness
function inputCheck()
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

  totalErrorCheck(allSpans)  
  if (allSpans[lastCharacterIndex].classList.contains('correct'))
  {
    pass = true
  }
}


// Separates the words into individual characters within spans
function separateWords(words)
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


// Counts number of errors
function totalErrorCheck(allSpans)
{
  if (userInput.value.length - 1 > recentlyTyped)
  {
    recentlyTyped = userInput.value.length - 1
    if (userInput.value[recentlyTyped] != allSpans[recentlyTyped].innerHTML)
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


function customizeMessage()
{
  userInput.disabled = true
  let speed = document.getElementById('speed')
  let head = document.getElementById('head')
  let filler1 = document.getElementById('filler1')
  let filler2 = document.getElementById('filler2')
  let mistypes = document.getElementById('mistypes')
  if (pass == true)
  {
    head.innerHTML = 'Congratulations!<br>'
    filler1.innerHTML = 'You managed to type '
    speed.innerHTML = wpm
    filler2.innerHTML = ' Words Per Minute!<br>'
    mistypes.innerHTML = 'Mistypes: ' + errorCount
    speed.classList.add('teal')
    head.classList.add('teal')
  }
  else
  {
    head.innerHTML = 'Oh no!<br>'
    filler1.innerHTML = 'You failed to type '
    speed.innerHTML = wpm
    filler2.innerHTML = ' Words Per Minute...<br> If you want, you can practice more.'
    speed.classList.add('red')
    head.classList.add('red')
  }
}


separateWords(textBox.innerHTML)