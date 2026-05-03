let current = 0;
let score = 0;

const params = new URLSearchParams(location.search);
const testName = params.get("test");

if (testName && data[testName]) {
  const test = data[testName];

  function showQuestion() {
    const q = document.getElementById("question");
    if (!q) return;

    q.innerText = test.questions[current];
    document.getElementById("progress").innerText =
      `${current + 1} / ${test.questions.length}`;
  }

  window.answer = function(type) {
    if (type === "A") score++;
    current++;

    if (current < test.questions.length) {
      showQuestion();
    } else {
      const resultIndex = score % 4;
      location.href = `result.html?test=${testName}&result=${resultIndex}`;
    }
  };

  showQuestion();
}
