# Introduction
    This is Type Trainer——my Final Project for CS50.

    When I first started CS50, my typing speed was below average.
    The issue was that I'd never learned proper touch typing, so
    shortly before I started the course, I switched to a different
    keyboard layout called DVORAK (as opposed to QWERTY).

    Here's the problem that I (and likely many others) had. Every
    typing practice site I went to were geared toward the QWERTY
    layout. 

    My solution was a simple website that allows you to customize
    the difficulty of the randomly generated letters along with
    your preferred keyboard.



# Website Creation
    I'll start off the design description of the website by
    saying the only history I had with HTML, CSS, and JavaScript
    was the Finance problem set in CS50. Despite this, I made sure
    not to use anyone's code, though I did go to many forums and
    used a language teaching site (W3Schools) to at least learn
    what functions exist in the three languages I used.

    In the JavaScript files, I didn't export many of the functions
    to reuse in the others. This is for two reasons:
    1. The functions may vary slightly in each file
    2. Exporting one function causes the whole file to be read, thus re-running it.


##  Getting random words
###     scriptSeparater.py
            My first idea for this project was to use words from the
            Starwars script, mainly because I thought that it'd be funny,
            but also because it was a place that I could generate random
            words from.

            To make this a reality, I copied the movie script and wrote
            a program with Python that picks out every word and puts it
            in a Javascript array in the file 'words.js'. I made sure that
            each word only appeared once in the array.


##  Title Page
###     index.html
            Contains buttons that links to the other three pages. I
            wanted to keep the header style the same across all pages in
            order to prevent your eyes from having to shift too much.
            It just makes the whole site look cleaner.


##  Customizable Word Practice
###     customWords.html
            This is the heart of the website. Here you can practice
            the basics of typing with full control over your keyboard
            layout, which hand you want to use, and which row.

###     customWords.js
            Contains a function that adds a class (which makes the
            character you typed either red or green) depending on if
            you typed it right. This was the first thing I worked on
            in JavaScript, and because I knew next to nothing about it,
            getting momentum while creating it was difficult.

####        customLetterLayouts.js
                Next was to generate words spanning 7-2 random letters that
                fit the user's criteria. The only solution that came to my
                head was to hard-code every possible combination. I 
                understand that I should try to avoid doing this wherever
                possible, but I just didn't see anothing way.
    

##  Non-Customizable Word Practice
###     randomWords.html
            This page is about testing out what you learned from the
            custom letters practice, but this time with real words
            randomly pulled from 'words.js' instead of jibberish letters.

            Of course this time I made sure to add some stats
            so you can see how you do. A table at the bottom shows four
            things each time you complete a phrase:
            Word Count, Character Count, Accuracy, and Speed. 

                Word Count = number of words in the phrase you completed

                Character Count = number of Characters in the prase you completed

                Accuracy = percentage of characters typed right the first time.

                Speed = number of words you typed per minute.

###     randomWords.js
            Has a similar type-check function to 'randomLetters.js', but
            it also keeps track of the number of characters you typed
            wrong.
    

##  Typing Test
###     typingTest.html
            The next step up from word practice. Here is where you have a
            go at maintaining your typing speed over a long period in a 
            Starwars intro looking format. This was by far the most
            time consuming part to make. Getting the text to scroll at
            the right angle and do so at a speed corresponding to the
            speed that you desire was really challenging. I never managed
            to get the animation to work properly on all window sizes,
            so I added text at the top of the test page that reads:
            'best played in 16:9 fullscreen.'

###     typingTest.js
            Has the same type-check function as 'randomWords.js'. This
            is because after the text finishes scrolling, a results
            box shows up and tells you if you passed or not and
            how many characters you mistyped.