const questions = [
  { text: "사람 많은 곳이 편하다", options: [{text:"YES",type:"E"},{text:"NO",type:"I"}]},
  { text: "혼자 있는 시간이 좋다", options: [{text:"YES",type:"I"},{text:"NO",type:"E"}]},

  { text: "즉흥적인 여행이 좋다", options: [{text:"YES",type:"P"},{text:"NO",type:"J"}]},
  { text: "계획 세우는 걸 좋아한다", options: [{text:"YES",type:"J"},{text:"NO",type:"P"}]},

  { text: "감정보다 논리가 중요하다", options: [{text:"YES",type:"T"},{text:"NO",type:"F"}]},
  { text: "사람 감정이 더 중요하다", options: [{text:"YES",type:"F"},{text:"NO",type:"T"}]},

  { text: "현실적인 편이다", options: [{text:"YES",type:"S"},{text:"NO",type:"N"}]},
  { text: "상상력이 풍부하다", options: [{text:"YES",type:"N"},{text:"NO",type:"S"}]},

  { text: "새로운 사람 만나는 게 좋다", options: [{text:"YES",type:"E"},{text:"NO",type:"I"}]},
  { text: "혼자 집중하는 게 좋다", options: [{text:"YES",type:"I"},{text:"NO",type:"E"}]}
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

function getResult() {
  return (
    (score.E > score.I ? "E" : "I") +
    (score.S > score.N ? "S" : "N") +
    (score.T > score.F ? "T" : "F") +
    (score.J > score.P ? "J" : "P")
  );
}

function showResult() {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("result").style.display = "block";

  let result = getResult();

  const desc = {
    INFP: "감성적인 이상주의자",
    ENFP: "열정적인 활동가",
    ISTJ: "책임감 있는 관리자",
    ESFP: "즉흥적인 연예인",
    INTJ: "전략가형 인물",
    INTP: "논리적인 사색가"
  };

  document.getElementById("resultType").innerText = result;
  document.getElementById("resultDesc").innerText =
    desc[result] || "독특한 성격 유형!";
}

function restart() {
  current = 0;
  score = { E:0, I:0, S:0, N:0, T:0, F:0, J:0, P:0 };

  document.getElementById("result").style.display = "none";
  document.getElementById("start").style.display = "block";
}
