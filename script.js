let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextButton = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let navbar = document.getElementsByClassName("nav-links");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

//contains the questions and answers of the quiz which is kept in an array
const quizArray = [
    {
        id: "0",
        question: "What are the key features of a scheduling assistant application, and how do they simplify the scheduling process for users?",
        options: [
        "Automated appointment scheduling, calendar syncing, and reminders",
        "Advanced analytics and reporting, customizable scheduling workflows",
        "Integration with social media platforms, personalized chatbot assistance",
        "Virtual reality meeting rooms, AI-powered scheduling assistants",
        ],
        correct: "Automated appointment scheduling, calendar syncing, and reminders",
    },
    {
        id: "1",
        question: "Can a scheduling assistant application sync with a user's calendar and send reminders for upcoming appointments and meetings?",
        options: [
        "No, scheduling assistant applications can only schedule appointments but cannot sync with calendars or send reminders",
        "Yes, most scheduling assistant applications can sync with popular calendar applications and send reminders via email, SMS, or push notifications",
        "Only some scheduling assistant applications offer calendar syncing and reminders, depending on the pricing plan",
        "Scheduling assistant applications cannot send reminders but can sync with calendars to display upcoming appointments within the application",
        ],
        correct: "Yes, most scheduling assistant applications can sync with popular calendar applications and send reminders via email, SMS, or push notifications"
    },
    {
        id: "2",
        question: "How does a scheduling assistant application handle conflicts or overlaps in scheduling, and can it suggest alternative times or dates?",
        options: [
        "Scheduling assistant applications cannot handle conflicts or overlaps in scheduling, and users must manually resolve any issues",
        "Most scheduling assistant applications offer automated conflict resolution and suggest alternative times or dates based on user preferences",
        "Conflict resolution and alternative suggestions are only available in premium versions of scheduling assistant applications",
        "Scheduling assistant applications can handle conflicts but do not offer suggestions for alternative times or dates",
        ],
        correct: "Most scheduling assistant applications offer automated conflict resolution and suggest alternative times or dates based on user preferences",
    },
    {
        id: "3",
        question: "Are there any privacy or security concerns associated with using a scheduling assistant application, and how are these addressed by the developers?",
        options: [
        "There are no privacy or security concerns associated with using a scheduling assistant application",
        "Developers of scheduling assistant applications adhere to strict privacy and security policies and encrypt user data",
        "Privacy and security concerns vary depending on the application and its developers, and users should research each application before use",
        "Scheduling assistant applications have access to sensitive user data but take necessary measures to protect it, such as two-factor authentication and access controls",
        ],
        correct: "Developers of scheduling assistant applications adhere to strict privacy and security policies and encrypt user data",
    },
    {
        id: "4",
        question: "What are some examples of industries or professions that can benefit from using a scheduling assistant application, and how have these applications improved their productivity or efficiency?",
        options: [
        "Healthcare, education, and legal professions have seen significant productivity improvements from using scheduling assistant applications",
        "Only large corporations with complex scheduling needs benefit from using scheduling assistant applications",
        "Scheduling assistant applications have not shown to improve productivity or efficiency in any industry or profession",
        "Scheduling assistant applications are only useful for scheduling personal appointments and not for professional use",
        ],
        correct: "Healthcare, education, and legal professions have seen significant productivity improvements from using scheduling assistant applications",
    },

];
//waits for the restart button is clicked
restart.addEventListener("click", () => {
    initial();
    //shows the quiz again by removing hide
    displayContainer.classList.remove("hide");
    //the restart button is hidden
    scoreContainer.classList.add("hide");
});
//goes to next question
nextButton.addEventListener("click", (displayNext = () => {
    //tracks question count
    questionCount += 1;
    //checks whether all questions are over
    if (questionCount == quizArray.length){
        //quiz gets hidden
        displayContainer.classList.add("hide");
        //pop up window of score is shown with the restart button
        scoreContainer.classList.remove("hide");

        //pop up window properties
        let popupWidth = 600;
        let popupHeight = 400;
        let left = (screen.width / 2) - (popupWidth / 2);
        let top = (screen.height / 2) - (popupHeight / 2);
        let popupWindow = window.open('', 'Quiz Results', 'height=' + popupHeight + ',width=' + popupWidth + ',left=' + left + ',top=' + top);
        let resultImg;
        let resultText;
        //gives the badges and scores accordingly
        if (scoreCount >= 8){
            resultImg = "gold.png";
            resultText = "Congratulations! You scored " + scoreCount + " out of 10, please claim the points in your next purchase";
        }
        if (scoreCount < 8 && scoreCount >=6){
            resultImg = "silver.png";
            resultText = "Good job! You scored " + scoreCount + " out of 10, please claim the points in your next purchase";
        }
        if (scoreCount < 6){
            resultImg = "bronze.png";
            resultText = "Better luck next time! You scored " + scoreCount + " out of 10, please claim the points in your next purchase";
        }
        //set title
        let htmlContent = "<html><head><title>Quiz Results</title></head>";
        //showing the score and badge
        htmlContent += "<body style='text-align: center;'><h1>Quiz Results</h1>";
        htmlContent += "<img src='" + resultImg + "' alt='' style='width: 100px;'><br>";
        htmlContent += "<p>" + resultText + "</p>";
        htmlContent += "</body></html>";

        popupWindow.document.write(htmlContent);
        popupWindow.focus();
    }
    else{
        //if there are still questions remaining
        countOfQuestion.innerHTML = questionCount + 1 + " of " + quizArray.length + " Question";
        //displaying the question and answer options for the current question
        quizDisplay(questionCount);
        count = 11;
        //stops the timer
        clearInterval(countdown);
        timerDisplay();
    }

})
);
//creates the timer
const timerDisplay = () => {
    //sets the setinterval() to execute a function every second
    countdown = setInterval(() => {
        //the function decreases the count by 1
        count--;
        //shows the time left
        timeLeft.innerHTML = `${count}s`;
        //when the count reaches 0 meaning time is over the next question is shown
        if (count == 0) {
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};
//questioncount is the index of the current quiz card that shd be displayed
const quizDisplay = (questionCount) => {
    //array of all elements in container-mid
    let quizCards = document.querySelectorAll(".container-mid");
    //a card in quizCards
    quizCards.forEach((card) => {
        //hides the cards
        card.classList.add("hide");
    });
    //hide is removed when the quiz card needs to be shown
    quizCards[questionCount].classList.remove("hide");
};
//
function quizCreater(){
    //questions and options appear in a random order each time the quiz is taken
    quizArray.sort(() => Math.random() - 0.5);

    for(let i of quizArray){
        //shuffles the options for each question in the quizArray so that they appear in a random order each time the quiz is taken
        i.options.sort(() => Math.random() - 0.5);
        //creates a new div element that will hold the question and options
        let div = document.createElement("div");
        //sets the display to none so that the div is initially hidden
        div.classList.add("container-mid", "hide");
        //shows the question user is on
        countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
        //new p element to hold the question
        let question_DIV = document.createElement("p");
        //question is css class
        question_DIV.classList.add("question");
        //innerHTML of the question_DIV element is set to the question property of the current object in the quizArray
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);
        //the checker function gets called when one of the buttons is clicked
        //innerHTML of each button element is set to one of the options for the current question in the quizArray
        div.innerHTML += `
        <button class="option-div" onclick="checker(this)">
        ${i.options[0]}</button>
        <button class="option-div" onclick="checker(this)">
        ${i.options[1]}</button>
        <button class="option-div" onclick="checker(this)">
        ${i.options[2]}</button>
        <button class="option-div" onclick="checker(this)">
        ${i.options[3]}</button>
        `;
        //current question and options visible on the webpage
        quizContainer.appendChild(div);
    }
}
//checks user option
function checker(userOption){
    //assigns it the inner text of the userOption button clicked by the user
    let userSolution = userOption.innerText;
    //creates a variable called question and assigns it the HTML element with class container-mid at the index questionCount.
    let question = document.getElementsByClassName("container-mid")[questionCount];
    //assigns it an array of HTML elements with class option-div found within the question element
    let options = question.querySelectorAll(".option-div");
    //checks if userSolution matches the correct answer for the current question in quizArray.
    if(userSolution === quizArray[questionCount].correct){
        //If the user's answer is correct, the correct class is added to the userOption button clicked
        userOption.classList.add("correct");
        scoreCount += 2;

    }else{
        //incorrect class is added to the userOption button clicked by the user
        userOption.classList.add("incorrect");
        scoreCount -=1;
        //stops the score from being negative
        if (scoreCount <= 0){
            scoreCount = 0;
        }

        options.forEach((element) => {
            //If the text of the current option matches the correct answer for the current question in quizArray
            if (element.innerText === quizArray[questionCount].correct){
                //correct class is added to the current option button
                element.classList.add("correct");
            }
        });
    }
    //timer for the current question is stopped
    clearInterval(countdown);
    //All the buttons in options are disabled to prevent the user from changing their answer
    options.forEach((element) => {
        element.disabled = true;
    });
}
//making everything to the initial values
function initial(){
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 11;
    clearInterval(countdown);
    timeLeft.innerHTML = ""
    timerDisplay();
    quizCreater();
    quizDisplay(questionCount);
}
//sets up an event listener for the click event on the start button
startButton.addEventListener("click", () => {
    //adds the hide class to the start screen element, which hides it from view
    startScreen.classList.add("hide");
    //removes the hide class from the display container element,which shows it
    displayContainer.classList.remove("hide");
    initial();
});
//sets up an event listener for when the window loads
window.onload = () => {
    //removes the hide class from the start screen element, which shows it.
    startScreen.classList.remove("hide");
    //adds the hide class to the display container element, which hides it from view
    displayContainer.classList.add("hide");
};