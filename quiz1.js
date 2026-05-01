let current = 0;

let score = {
  A: 0,
  B: 0
};

const questions = [
  { q: "주말에 뭐해?" },
  { q: "친구가 부르면?" }
];

function showQuestion() {
  document.getElementById("question").innerText = questions[current].q;
}

function answer(type) {
  score[type]++;
  current++;

  if (current < questions.length) {
    showQuestion();
  } else {
    let result = score.A > score.B ? "A" : "B";
    location.href = `result.html?type=${result}`;
  }
}

showQuestion();
