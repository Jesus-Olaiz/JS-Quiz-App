const a = document.getElementById("a")
const b = document.getElementById("b")
const c = document.getElementById("c")
const d = document.getElementById("d")

const question = document.getElementById("question")
const answers = document.getElementById("answers")
const quizBox = document.getElementById("quizBox")

const next = document.getElementById("next")

const qAndA = [
    ["Inside which HTML element do we put the JavaScript?", `<input type="radio" name="answer" id="a">
    <label for="a"> &#60;scripting&#62;</label>
    <br>
    <input type="radio" name="answer" id="b">
    <label for="b"> &#60;js&#62;</label>
    <br>
    <input type="radio" name="answer" id="c">
    <label for="c"> &#60;javascript&#62;</label>
    <br>
    <input type="radio" name="answer" id="d">
    <label for="d"> &#60;script&#62;</label>`, "d"],
    ["Where is the correct place to insert a JavaScript?", `<input type="radio" name="answer" id="a">
    <label for="a"> Both the &#60;head&#62; and the &#60;body&#62; section are correct</label>
    <br>
    <input type="radio" name="answer" id="b">
    <label for="b">The &#60;body&#62; section</label>
    <br>
    <input type="radio" name="answer" id="c">
    <label for="c">The &#60;head&#62; head</label>
    `, "a"],
    ["What is the correct syntax for referring to an external script called 'xxx.js'?", `<input type="radio" name="answer" id="a">
    <label for="a"> &#60;script href="xxx.js"&#62; </label>
    <br>
    <input type="radio" name="answer" id="b">
    <label for="b"> &#60;script src="xxx.js"&#62; </label>
    <br>
    <input type="radio" name="answer" id="c">
    <label for="c"> &#60;script name="xxx.js"&#62; </label>`, "b"],
    ["The external JavaScript file must contain the <script> tag.", `<input type="radio" name="answer" id="a">
    <label for="a"> False </label>
    <br>
    <input type="radio" name="answer" id="b">
    <label for="b"> True </label>`, "b" ],
    ["How do you write 'Hello World' in an alert box?", `<input type="radio" name="answer" id="a">
    <label for="a"> msgBox("Hello World"); </label>
    <br>
    <input type="radio" name="answer" id="b">
    <label for="b"> msg("Hello World");</label>
    <br>
    <input type="radio" name="answer" id="c">
    <label for="c"> alertBox("Hello World"); </label>
    <br>
    <input type="radio" name="answer" id="d">
    <label for="d"> alert("Hello World"); </label>`, "d"],
    ["How do you create a function in JavaScript?", `<input type="radio" name="answer" id="a">
    <label for="a"> function myFunction() </label>
    <br>
    <input type="radio" name="answer" id="b">
    <label for="b"> function:myFunction() </label>
    <br>
    <input type="radio" name="answer" id="c">
    <label for="c"> function = myFunction() </label>
    `, "a"],
    ["How do you call a function named 'myFunction'?", `<input type="radio" name="answer" id="a">
    <label for="a"> myFunction() </label>
    <br>
    <input type="radio" name="answer" id="b">
    <label for="b"> call function myFunction() </label>
    <br>
    <input type="radio" name="answer" id="c">
    <label for="c"> call myFunction() </label>
    `, "a"],
    ["How to write an IF statement in JavaScript?", `<input type="radio" name="answer" id="a">
    <label for="a"> if i = 5 then </label>
    <br>
    <input type="radio" name="answer" id="b">
    <label for="b"> if i == 5 then </label>
    <br>
    <input type="radio" name="answer" id="c">
    <label for="c"> if i = 5 </label>
    <br>
    <input type="radio" name="answer" id="d">
    <label for="d"> if(i==5) </label>`, "d"],
    ["How to write an IF statement for executing some code if 'i' is NOT equal to 5?", `<input type="radio" name="answer" id="a">
    <label for="a"> if i &#60;&#62; 5 </label>
    <br>
    <input type="radio" name="answer" id="b">
    <label for="b"> if i =! 5 then </label>
    <br>
    <input type="radio" name="answer" id="c">
    <label for="c"> if(i != 5) </label>
    <br>
    <input type="radio" name="answer" id="d">
    <label for="d"> if(i &#60;&#62; 5) </label>`, "c"]
]

var correct = 0

// Set up all the questions and answers inside of arrays. Set the page to load a new set after the next button is hit. Keep track of all the amount of answers answered correctly. Show correctly answered questions at the end.  