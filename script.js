const questions = [
  {
    text: "사람 많은 곳이 좋다",
    options: [
      { text: "YES", type: "E" },
      { text: "NO", type: "I" }
    ]
  },
  {
    text: "계획을 세운다",
    options: [
      { text: "YES", type: "J" },
      { text: "NO", type: "P" }
    ]
  }
];

let current = 0;
let score = { E:0, I:0, S:0, N:0, T:0, F:0, J:0, P:0 };

function startTest() {
  document.getElementById("start").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  showQuestion();
}

function showQuestion() {
  let q = questions[current];
  document.getElementById("question").innerText = q.text;

  let html = "";
  q.options.forEach((opt, i) => {
    html += `<button onclick="answer(${i})">${opt.text}</button>`;
  });

  document.getElementById("options").innerHTML = html;
}

function answer(i) {
  let type = questions[current].options[i].type;
  score[type]++;

  current++;

  if (current < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("result").style.display = "block";

  let result =
    (score.E > score.I ? "E" : "I") +
    (score.S > score.N ? "S" : "N") +
    (score.T > score.F ? "T" : "F") +
    (score.J > score.P ? "J" : "P");

  document.getElementById("resultType").innerText = result;
  document.getElementById("resultDesc").innerText = "당신은 " + result + " 유형입니다.";
}

function restart() {
  current = 0;
  score = { E:0, I:0, S:0, N:0, T:0, F:0, J:0, P:0 };

  document.getElementById("result").style.display = "none";
  document.getElementById("start").style.display = "block";
}
