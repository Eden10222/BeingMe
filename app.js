let current = 0;
let score = 0;

const params = new URLSearchParams(location.search);
const testName = params.get("test");
const test = data[testName];

function showQuestion() {
  document.getElementById("question").innerText = test.questions[current];
  document.getElementById("progress").innerText =
    `${current + 1} / ${test.questions.length}`;
}

window.answer = function(val) {
  score += val;
  current++;

  if (current < test.questions.length) {
    showQuestion();
  } else {
    const resultIndex = score % 4;
    location.href = `result.html?test=${testName}&result=${resultIndex}`;
  }
};

showQuestion();
