const question = document.getElementById("question")
const answers = document.getElementById("answers")
const quizBox = document.getElementById("quizBox")
const start = document.getElementById("start")

const next = document.getElementById("next")

// array of all the questions and answers, also which answer is correct
const qAndA = [
    ["Inside which HTML element do we put the JavaScript?", `<input type="radio" name="answer" class="answer" id="a">
    <label for="a"> &#60;scripting&#62;</label>
    <br>
    <input type="radio" name="answer" class="answer" id="b">
    <label for="b"> &#60;js&#62;</label>
    <br>
    <input type="radio" name="answer" class="answer" id="c">
    <label for="c"> &#60;javascript&#62;</label>
    <br>
    <input type="radio" name="answer" class="answer" id="d">
    <label for="d"> &#60;script&#62;</label>`, "d"],
    ["Where is the correct place to insert a JavaScript?", `<input type="radio" name="answer" class="answer" id="a">
    <label for="a"> Both the &#60;head&#62; and the &#60;body&#62; section are correct</label>
    <br>
    <input type="radio" name="answer" class="answer" id="b">
    <label for="b">The &#60;body&#62; section</label>
    <br>
    <input type="radio" name="answer" class="answer" id="c">
    <label for="c">The &#60;head&#62; head</label>
    `, "a"],
    ["What is the correct syntax for referring to an external script called 'xxx.js'?", `<input type="radio" name="answer" class="answer" id="a">
    <label for="a"> &#60;script href="xxx.js"&#62; </label>
    <br>
    <input type="radio" name="answer" class="answer" id="b">
    <label for="b"> &#60;script src="xxx.js"&#62; </label>
    <br>
    <input type="radio" name="answer" class="answer" id="c">
    <label for="c"> &#60;script name="xxx.js"&#62; </label>`, "b"],
    ["The external JavaScript file must contain the <script> tag.", `<input type="radio" name="answer" class="answer" id="a">
    <label for="a"> False </label>
    <br>
    <input type="radio" name="answer" class="answer" id="b">
    <label for="b"> True </label>`, "b" ],
    ["How do you write 'Hello World' in an alert box?", `<input type="radio" name="answer" class="answer" id="a">
    <label for="a"> msgBox("Hello World"); </label>
    <br>
    <input type="radio" name="answer" class="answer" id="b">
    <label for="b"> msg("Hello World");</label>
    <br>
    <input type="radio" name="answer" class="answer" id="c">
    <label for="c"> alertBox("Hello World"); </label>
    <br>
    <input type="radio" name="answer" class="answer" id="d">
    <label for="d"> alert("Hello World"); </label>`, "d"],
    ["How do you create a function in JavaScript?", `<input type="radio" name="answer" class="answer" id="a">
    <label for="a"> function myFunction() </label>
    <br>
    <input type="radio" name="answer" class="answer" id="b">
    <label for="b"> function:myFunction() </label>
    <br>
    <input type="radio" name="answer" class="answer" id="c">
    <label for="c"> function = myFunction() </label>
    `, "a"],
    ["How do you call a function named 'myFunction'?", `<input type="radio" name="answer" class="answer" id="a">
    <label for="a"> myFunction() </label>
    <br>
    <input type="radio" name="answer" class="answer" id="b">
    <label for="b"> call function myFunction() </label>
    <br>
    <input type="radio" name="answer" class="answer" id="c">
    <label for="c"> call myFunction() </label>
    `, "a"],
    ["How to write an IF statement in JavaScript?", `<input type="radio" name="answer" class="answer" id="a">
    <label for="a"> if i = 5 then </label>
    <br>
    <input type="radio" name="answer" class="answer" id="b">
    <label for="b"> if i == 5 then </label>
    <br>
    <input type="radio" name="answer" class="answer" id="c">
    <label for="c"> if i = 5 </label>
    <br>
    <input type="radio" name="answer" class="answer" id="d">
    <label for="d"> if(i==5) </label>`, "d"],
    ["How to write an IF statement for executing some code if 'i' is NOT equal to 5?", `<input type="radio" name="answer" class="answer" id="a">
    <label for="a"> if i &#60;&#62; 5 </label>
    <br>
    <input type="radio" name="answer" class="answer" id="b">
    <label for="b"> if i =! 5 then </label>
    <br>
    <input type="radio" name="answer" class="answer" id="c">
    <label for="c"> if(i != 5) </label>
    <br>
    <input type="radio" name="answer" class="answer" id="d">
    <label for="d"> if(i &#60;&#62; 5) </label>`, "c"],
    ["What is JavaScript?", `<input type="radio" name="answer" class="answer" id="a">
    <label for="a"> A programming language primarily used for web development </label>
    <br>
    <input type="radio" name="answer" class="answer" id="b">
    <label for="b"> The written language used on the island of Java </label>
    <br>
    <input type="radio" name="answer" class="answer" id="c">
    <label for="c"> An inside joke used by the actors in the famous play "The Script of Java" </label>
    <br>
    <input type="radio" name="answer" class="answer" id="d">
    <label for="d"> The title to the Starbucks employee anthem </label>`, "a"]
]


 
// setting variables to track. q is for question so we can track where we are in the array, Correct is for the amount of questions answered correctly
let q = 0
correct = 0


// initiating a start event listener so the quiz can begin
start.addEventListener("click", () => {

    quizBox.removeChild(start)

    question.textContent = qAndA[q][0]
    answers.innerHTML = qAndA[q][1]

    question.style.display = "block"
    answers.style.display = "block"
    next.style.display = "block"

    let input = document.querySelectorAll(".answer")
    input.forEach(element => {
        element.addEventListener("input", () => {
            if (element.id === qAndA[q][2]) {
                ++correct
            }
        })
    }); 
})

// making the next question appear and keeping score of the amount of each question answered correctly.

next.addEventListener("click", () => {
    if ( (q <= 8) ){
        ++q    
    
        question.textContent = qAndA[q][0]
        answers.innerHTML = qAndA[q][1]
    
        let input = document.querySelectorAll(".answer")
        input.forEach(element => {
            element.addEventListener("input", () => {
                if (element.id === qAndA[q][2]) {
                    ++correct
                }
            })
        }); 
         
// Summarizing the quiz with a final statement letting the user know how many the got correct with some words of encouragment 

    } else if (q = 9) {
        if (correct <= 3) {
            quizBox.innerHTML = `<h1>You should definitely take some time to look over some JavaScript documentation. You only got ${correct} question(s) correct. But NEVER give up. You can do this!</h1>`
        } else if ((correct <= 6) && (correct >= 4)){
            quizBox.innerHTML = `<h1>You didn't do terribly, but you definitely can improve. You got a total of ${correct} questions correct. Keep doing your best and never give up!</h1>`
        } else if ((correct >= 7) && (correct <= 8)){
            quizBox.innerHTML = `<h1>You did great! You got a total of ${correct} questions correct. Just focus a bit on the fundamentals and you will definitely get there! Keep coding!</h1>`
        } else {
            quizBox.innerHTML = `<h1>This little quiz was made for beginners and you just tore it up! Great job! You got a total of ${correct} questions correct. Get out there and start building some awesome things!</h1>`
        }
        
    }
    
})


    


