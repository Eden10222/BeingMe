let current = 0;

let score = { A: 0, B: 0 };

const questions = [
  "나는 혼자가 편하다",
  "나는 계획형이다",
  "나는 감정보다 이성을 따른다",
  "나는 새로운 걸 좋아한다",
  "나는 사람 만나는 걸 좋아한다",
  "나는 즉흥적이다",
  "나는 감정 표현이 많다",
  "나는 안정이 중요하다"
];

function showQuestion() {
  document.getElementById("question").innerText = questions[current];
}

function answer(type) {
  score[type]++;
  current++;

  if (current < questions.length) {
    showQuestion();
  } else {
    let result = score.A > score.B ? "A" : "B";
    location.href = `result.html?type=${result}&test=${testName}`;
  }
}

showQuestion();
