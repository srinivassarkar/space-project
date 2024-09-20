const questions =  [
    {
        question: "What is the largest planet in our solar system?",
        optionA: "Earth",
        optionB: "Jupiter",
        optionC: "Saturn",
        optionD: "Mars",
        correctOption: "optionB"
    },

    {
        question: "Which planet is closest to the Sun?",
        optionA: "Venus",
        optionB: "Earth",
        optionC: "Mercury",
        optionD: "Mars",
        correctOption: "optionC"
    },

    {
        question: "Which planet is known as the Red Planet?",
        optionA: "Venus",
        optionB: "Mars",
        optionC: "Jupiter",
        optionD: "Saturn",
        correctOption: "optionB"
    },

    {
        question: "How many planets are in the solar system?",
        optionA: "Seven",
        optionB: "Eight",
        optionC: "Nine",
        optionD: "Ten",
        correctOption: "optionB"
    },

    {
        question: "What is the smallest planet in the solar system?",
        optionA: "Mercury",
        optionB: "Mars",
        optionC: "Earth",
        optionD: "Neptune",
        correctOption: "optionA"
    },

    {
        question: "Which planet has the most rings?",
        optionA: "Earth",
        optionB: "Jupiter",
        optionC: "Uranus",
        optionD: "Saturn",
        correctOption: "optionD"
    },

    {
        question: "What is the name of the galaxy we live in?",
        optionA: "Andromeda",
        optionB: "Milky Way",
        optionC: "Orion",
        optionD: "Solar",
        correctOption: "optionB"
    },

    {
        question: "Which planet is famous for its beautiful rings?",
        optionA: "Venus",
        optionB: "Mars",
        optionC: "Saturn",
        optionD: "Neptune",
        correctOption: "optionC"
    },

    {
        question: "Which planet is closest to Earth?",
        optionA: "Venus",
        optionB: "Mars",
        optionC: "Jupiter",
        optionD: "Saturn",
        correctOption: "optionA"
    },

    {
        question: "Which planet is known as the blue planet?",
        optionA: "Mars",
        optionB: "Earth",
        optionC: "Neptune",
        optionD: "Venus",
        correctOption: "optionB"
    },

    {
        question: "What is the hottest planet in the solar system?",
        optionA: "Venus",
        optionB: "Mercury",
        optionC: "Mars",
        optionD: "Earth",
        correctOption: "optionA"
    },

    {
        question: "Which planet is farthest from the Sun?",
        optionA: "Uranus",
        optionB: "Pluto",
        optionC: "Neptune",
        optionD: "Jupiter",
        correctOption: "optionC"
    },

    {
        question: "How long does Earth take to orbit the Sun?",
        optionA: "365 days",
        optionB: "24 hours",
        optionC: "30 days",
        optionD: "12 months",
        correctOption: "optionA"
    },

    {
        question: "What is the name of the star at the center of our solar system?",
        optionA: "Moon",
        optionB: "Sun",
        optionC: "Venus",
        optionD: "Sirius",
        correctOption: "optionB"
    },

    {
        question: "Which planet is known for its giant red spot?",
        optionA: "Saturn",
        optionB: "Jupiter",
        optionC: "Mars",
        optionD: "Neptune",
        correctOption: "optionB"
    },

    {
        question: "How many moons does Earth have?",
        optionA: "One",
        optionB: "Two",
        optionC: "Four",
        optionD: "None",
        correctOption: "optionA"
    },

    {
        question: "What is the name of Earth's moon?",
        optionA: "Luna",
        optionB: "Europa",
        optionC: "Titan",
        optionD: "Io",
        correctOption: "optionA"
    },

    {
        question: "Which planet is tilted on its side?",
        optionA: "Jupiter",
        optionB: "Mars",
        optionC: "Uranus",
        optionD: "Neptune",
        correctOption: "optionC"
    },

    {
        question: "Which planet has the most moons?",
        optionA: "Saturn",
        optionB: "Jupiter",
        optionC: "Mars",
        optionD: "Earth",
        correctOption: "optionB"
    },

    {
        question: "Which planet is the coldest in the solar system?",
        optionA: "Neptune",
        optionB: "Uranus",
        optionC: "Jupiter",
        optionD: "Mars",
        correctOption: "optionA"
    },

    {
        question: "What is the name of Mars' largest moon?",
        optionA: "Titan",
        optionB: "Phobos",
        optionC: "Deimos",
        optionD: "Europa",
        correctOption: "optionB"
    },

    {
        question: "What is the distance from Earth to the Sun?",
        optionA: "93 million miles",
        optionB: "50 million miles",
        optionC: "120 million miles",
        optionD: "150 million miles",
        correctOption: "optionA"
    },

    {
        question: "Which planet is known as the morning star?",
        optionA: "Mars",
        optionB: "Venus",
        optionC: "Mercury",
        optionD: "Saturn",
        correctOption: "optionB"
    },

    {
        question: "Which planet takes the longest to orbit the Sun?",
        optionA: "Neptune",
        optionB: "Saturn",
        optionC: "Uranus",
        optionD: "Jupiter",
        correctOption: "optionA"
    }
]

let shuffledQuestions = []; //empty array to hold shuffled selected questions

function handleQuestions() {
  //function to shuffle and push 10 questions to shuffledQuestions array
  while (shuffledQuestions.length <= 9) {
    const random = questions[Math.floor(Math.random() * questions.length)];
    if (!shuffledQuestions.includes(random)) {
      shuffledQuestions.push(random);
    }
  }
}

let questionNumber = 1;
let playerScore = 0;
let wrongAttempt = 0;
let indexNumber = 0;

// function for displaying next question in the array to dom
function NextQuestion(index) {
  handleQuestions();
  const currentQuestion = shuffledQuestions[index];
  document.getElementById("question-number").innerHTML = questionNumber;
  document.getElementById("player-score").innerHTML = playerScore;
  document.getElementById("display-question").innerHTML =
    currentQuestion.question;
  document.getElementById("option-one-label").innerHTML =
    currentQuestion.optionA;
  document.getElementById("option-two-label").innerHTML =
    currentQuestion.optionB;
  document.getElementById("option-three-label").innerHTML =
    currentQuestion.optionC;
  document.getElementById("option-four-label").innerHTML =
    currentQuestion.optionD;
}

function checkForAnswer() {
  const currentQuestion = shuffledQuestions[indexNumber]; //gets current Question
  const currentQuestionAnswer = currentQuestion.correctOption; //gets current Question's answer
  const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
  let correctOption = null;

  options.forEach((option) => {
    if (option.value === currentQuestionAnswer) {
      //get's correct's radio input with correct answer
      correctOption = option.labels[0].id;
    }
  });

  //checking to make sure a radio input has been checked or an option being chosen
  if (
    options[0].checked === false &&
    options[1].checked === false &&
    options[2].checked === false &&
    options[3].checked === false
  ) {
    document.getElementById("option-modal").style.display = "flex";
  }

  //checking if checked radio button is same as answer
  options.forEach((option) => {
    if (option.checked === true && option.value === currentQuestionAnswer) {
      document.getElementById(correctOption).style.backgroundColor = "green";
      playerScore++;
      indexNumber++;
      //set to delay question number till when next question loads
      setTimeout(() => {
        questionNumber++;
      }, 1000);
    } else if (option.checked && option.value !== currentQuestionAnswer) {
      const wrongLabelId = option.labels[0].id;
      document.getElementById(wrongLabelId).style.backgroundColor = "red";
      document.getElementById(correctOption).style.backgroundColor = "green";
      wrongAttempt++;
      indexNumber++;
      //set to delay question number till when next question loads
      setTimeout(() => {
        questionNumber++;
      }, 1000);
    }
  });
}

//called when the next button is called
function handleNextQuestion() {
  checkForAnswer();
  unCheckRadioButtons();
  //delays next question displaying for a second
  setTimeout(() => {
    if (indexNumber <= 9) {
      NextQuestion(indexNumber);
    } else {
      handleEndGame();
    }
    resetOptionBackground();
  }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
  const options = document.getElementsByName("option");
  options.forEach((option) => {
    document.getElementById(option.labels[0].id).style.backgroundColor = "";
  });
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
  const options = document.getElementsByName("option");
  for (const element of options) {
    element.checked = false;
  }
}

// function for when all questions being answered
function handleEndGame() {
  let remark = null;
  let remarkColor = null;

  // condition check for player remark and remark color
  if (playerScore <= 3) {
    remark = "Bad Grades, Keep Practicing.";
    remarkColor = "red";
  } else if (playerScore >= 4 && playerScore < 7) {
    remark = "Average Grades, You can do better.";
    remarkColor = "orange";
  } else if (playerScore >= 7) {
    remark = "Excellent, Keep the good work going.";
    remarkColor = "green";
  }
  const playerGrade = (playerScore / 10) * 100;

  //data to display to score board
  document.getElementById("remarks").innerHTML = remark;
  document.getElementById("remarks").style.color = remarkColor;
  document.getElementById("grade-percentage").innerHTML = playerGrade;
  document.getElementById("wrong-answers").innerHTML = wrongAttempt;
  document.getElementById("right-answers").innerHTML = playerScore;
  document.getElementById("score-modal").style.display = "flex";
}

//closes score modal and resets game
function closeScoreModal() {
  questionNumber = 1;
  playerScore = 0;
  wrongAttempt = 0;
  indexNumber = 0;
  shuffledQuestions = [];
  NextQuestion(indexNumber);
  document.getElementById("score-modal").style.display = "none";
}

//function to close warning modal
function closeOptionModal() {
  document.getElementById("option-modal").style.display = "none";
}
