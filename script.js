const questions = [
  {
    q: "연인이 연락이 늦으면?",
    a: [
      { text: "계속 확인한다", type: "A" },
      { text: "기다린다", type: "B" },
      { text: "나도 신경 안쓴다", type: "C" },
      { text: "관심 없다", type: "D" }
    ]
  },
  {
    q: "싸우면?",
    a: [
      { text: "바로 풀고싶다", type: "A" },
      { text: "대화로 해결", type: "B" },
      { text: "거리 둔다", type: "C" },
      { text: "무시한다", type: "D" }
    ]
  },
  {
    q: "연애에서 중요한건?",
    a: [
      { text: "애정", type: "A" },
      { text: "신뢰", type: "B" },
      { text: "자유", type: "C" },
      { text: "편안함", type: "D" }
    ]
  },
  {
    q: "SNS는?",
    a: [
      { text: "자주 확인", type: "A" },
      { text: "가끔 본다", type: "B" },
      { text: "거의 안봄", type: "C" },
      { text: "관심 없음", type: "D" }
    ]
  },
  {
    q: "연인이 바쁘면?",
    a: [
      { text: "서운하다", type: "A" },
      { text: "이해한다", type: "B" },
      { text: "나도 바쁘게", type: "C" },
      { text: "신경 안씀", type: "D" }
    ]
  },
  {
    q: "데이트는?",
    a: [
      { text: "자주 만나야", type: "A" },
      { text: "적당히", type: "B" },
      { text: "가끔", type: "C" },
      { text: "상관 없음", type: "D" }
    ]
  },
  {
    q: "연애 스타일은?",
    a: [
      { text: "상대 중심", type: "A" },
      { text: "균형", type: "B" },
      { text: "내 중심", type: "C" },
      { text: "무심", type: "D" }
    ]
  },
  {
    q: "이별 후?",
    a: [
      { text: "오래 힘듦", type: "A" },
      { text: "시간 지나 회복", type: "B" },
      { text: "빨리 털어냄", type: "C" },
      { text: "영향 없음", type: "D" }
    ]
  }
];

let current = 0;
let scores = { A:0, B:0, C:0, D:0 };

function startTest() {
  showQuestion();
}

function showQuestion() {
  const q = questions[current];
  let html = `<h2>${q.q}</h2>`;

  q.a.forEach(ans => {
    html += `<button onclick="selectAnswer('${ans.type}')">${ans.text}</button>`;
  });

  document.querySelector('.container').innerHTML = html;
}

function selectAnswer(type) {
  scores[type]++;
  current++;

  if(current < questions.length){
    showQuestion();
  } else {
    const result = Object.keys(scores).reduce((a,b)=> scores[a]>scores[b]?a:b);
    localStorage.setItem("result", result);
    location.href = "result.html";
  }
}
