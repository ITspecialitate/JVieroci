const qustionDataBase = [
  //1
  {
    question: "Cik ir klasiskās šaušanas pozas?",
    option1: "1",
    option2: "2",
    option3: "3",
    option4: "4",
    ans: "answer3",
  },
  //2
  {
    question: "Kura no šīm nav ieroča sastāvdaļa?",
    option1: "Stobrs",
    option2: "Pikatīnī sliede",
    option3: "Atvārsnīte",
    option4: "Magazīna",
    ans: "answer3",
  },
  //3
  {
    question: "Kurš no šiem ir ierocis?",
    option1: "Pistole",
    option2: "Revolveris",
    option3: "Karabīne",
    option4: "Visi iepriekš minētie",
    ans: "answer4",
  },
  //4
  {
    question: "Kurš no šiem nav ieroča iedalījums?",
    option1: "Iedalījums pēc lietojuma vai lietotāja veida",
    option2: "Iedalījums pēc darbības un uzbūves veida",
    option3: "Iedalījums pēc lietošanas mērķa",
    option4: "Iedalījums pēc postījuma",
    ans: "answer4",
  },
  //5
  {
    question: "Klasiskā ierocī var ielikt maksimums ... lodes.",
    option1: "20",
    option2: "21",
    option3: "22",
    option4: "23",
    ans: "answer2",
  },
  // //6
  // {
  //   question: "Kurā gadā tika pārstrādāta Jaunsardzes izglītības programma?",
  //   option1: "2022",
  //   option2: "2021",
  //   option3: "2020",
  //   option4: "2019",
  //   ans: "answer4",
  // },
  // //7
  // {
  //   question: "Kurai pilsētai instruktoru vakance ir līdz šodienai?",
  //   option1: "Daugavpilij",
  //   option2: "Madonai",
  //   option3: "Rīgai",
  //   option4: "Cēsīm",
  //   ans: "answer3",
  // },
  // //8
  // {
  //   question: "Kāds ir Jaunsardzes sauklis?",
  //   option1: "Kopā stiprāki Latvijai",
  //   option2: "Augsim Latvijai",
  //   option3: "Vienotībā",
  //   option4: "Latvija un Brīvība",
  //   ans: "answer2",
  // },
  // //9
  // {
  //   question: "Zem kādas ministrijas ir Jaunsardze?",
  //   option1: "Aizsardzības ministrijas",
  //   option2: "Izglītības un zinātnes ministrijas",
  //   option3: "Iekšlietu ministrijas",
  //   option4: "Arlietu ministrijas",
  //   ans: "answer1",
  // },
  // //10
  // {
  //   question: "Kāda ir Jaunsargu instruktora bruto alga gadā?",
  //   option1: "22 100 līdz 26 260 EUR",
  //   option2: "10 000 līdz 20 000 EUR",
  //   option3: "32 550 līdz 46 250 EUR",
  //   option4: "55 000 līdz 78 150 EUR",
  //   ans: "answer1",
  // },
];

// Getting reference
const questionContainer = document.querySelector("h2");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submitButton = document.querySelector("button");
const usersAnswer = document.querySelectorAll(".answer");
const scoreArea = document.querySelector("#ShowScore");

// This function is rendering all the texts
let questionCount = 0;
let score = 0;
const mainFunc = () => {
  const list = qustionDataBase[questionCount];
  questionContainer.innerText = list.question;
  option1.innerText = list.option1;
  option2.innerText = list.option2;
  option3.innerText = list.option3;
  option4.innerText = list.option4;
};

mainFunc();

// This function is for answer checking
const goCheckAnswer = () => {
  let answers;
  usersAnswer.forEach((data) => {
    if (data.checked) {
      answers = data.id;
    }
  });
  return answers;
};

const deselectAll = () => {
  usersAnswer.forEach((data) => {
    data.checked = false;
  });
};

// Function to get the code based on the score
const getCodeForScore = (score, totalQuestions) => {
  const percentage = (score / totalQuestions) * 100;
  if (percentage === 100) {
    return "Kods: 14956";
  } else if (percentage >= 80) {
    return "Kods: 21056";
  } else if (percentage >= 60) {
    return "Kods: 32036";
  } else if (percentage >= 40) {
    return "Kods: 46046";
  } else if (percentage >= 20) {
    return "Kods: 51038";
  } else {
    return "Kods: 69078";
  }
};

submitButton.addEventListener("click", () => {
  const checkAnswer = goCheckAnswer();
  console.log(checkAnswer);

  if (checkAnswer === qustionDataBase[questionCount].ans) {
    score++;
  }
  questionCount++;
  deselectAll();
  if (questionCount < qustionDataBase.length) {
    mainFunc();
  } else {
    const code = getCodeForScore(score, qustionDataBase.length);
    scoreArea.style.display = "block";
    scoreArea.innerHTML = `
      <h3>Jūsu rezultāts ir ${score} / ${qustionDataBase.length}</h3>
      <p>${code}</p>
      <button class='btn' onclick='location.reload()'>Spēlēt vēlreiz</button>
      `;
  }
});