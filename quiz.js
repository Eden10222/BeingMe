let current = 0;
let score = 0;

// 테스트별 질문 + 결과
const data = {

  animal: {
    questions: [
      "혼자 있는 게 좋다",
      "조용한 환경이 좋다",
      "사람 많은 곳은 피한다",
      "계획 없이 행동 안 한다",
      "감정보다 이성",
      "낯가림 있다",
      "집에 있는 걸 좋아한다",
      "신중하게 행동한다"
    ],
    results: [
      { title: "🐯 호랑이형", desc: "카리스마 리더" },
      { title: "🦊 여우형", desc: "영리하고 계산적" },
      { title: "🐱 고양이형", desc: "독립적이고 조용" },
      { title: "🐶 강아지형", desc: "활발하고 사교적" },
      { title: "🐻 곰형", desc: "느긋하고 안정적" },
      { title: "🐼 판다형", desc: "귀엽고 평화주의" },
      { title: "🐰 토끼형", desc: "소심하고 예민" },
      { title: "🦁 사자형", desc: "리더십 강함" }
    ]
  },

  love: {
    questions: [
      "좋아하면 바로 표현한다",
      "연락 자주 한다",
      "질투 많은 편",
      "감정 표현 많다",
      "데이트 계획 세운다",
      "상대에게 맞춘다",
      "혼자 있는 것도 중요",
      "연애에 진심이다"
    ],
    results: [
      { title: "🔥 직진형", desc: "돌진 스타일" },
      { title: "💭 신중형", desc: "천천히 접근" },
      { title: "💘 집착형", desc: "올인 스타일" },
      { title: "😎 쿨형", desc: "거리 유지" },
      { title: "🎯 전략형", desc: "계산적 연애" },
      { title: "🌿 안정형", desc: "편안한 연애" },
      { title: "✨ 감성형", desc: "감정 중심" },
      { title: "🧠 분석형", desc: "이성 중심" }
    ]
  },

  mbti: {
    questions: [
      "사람 만나는 게 좋다",
      "외출 자주 한다",
      "말이 많은 편",
      "활동적인 편",
      "새로운 사람 좋아",
      "혼자보다 함께",
      "모임 좋아함",
      "에너지 넘침"
    ],
    results: [
      { title: "E 극강형", desc: "완전 외향" },
      { title: "E형", desc: "외향적" },
      { title: "중간형", desc: "균형" },
      { title: "I형", desc: "내향적" },
      { title: "I 극강형", desc: "완전 내향" },
      { title: "변덕형", desc: "상황 따라" },
      { title: "사회형", desc: "사람 중심" },
      { title: "혼자형", desc: "혼자 최고" }
    ]
  },

  job: {
    questions: [
      "리더 역할 좋아",
      "책임감 강함",
      "목표 지향적",
      "계획 세움",
      "사람 관리 잘함",
      "결단력 있음",
      "경쟁 좋아",
      "성과 중요"
    ],
    results: [
      { title: "CEO형", desc: "리더" },
      { title: "기획자형", desc: "전략가" },
      { title: "전문가형", desc: "집중형" },
      { title: "크리에이터형", desc: "창의적" },
      { title: "관리자형", desc: "안정적" },
      { title: "도전자형", desc: "모험가" },
      { title: "분석가형", desc: "논리적" },
      { title: "지원형", desc: "서포터" }
    ]
  },

  stress: {
    questions: [
      "스트레스 자주 받음",
      "화 잘 참음",
      "혼자 해결함",
      "감정 표현 적음",
      "예민한 편",
      "걱정 많음",
      "잠 영향 받음",
      "피로 쉽게 느낌"
    ],
    results: [
      { title: "💣 폭발형", desc: "쌓이다 터짐" },
      { title: "😶 참는형", desc: "속으로 삭임" },
      { title: "💭 고민형", desc: "계속 생각" },
      { title: "🏃 회피형", desc: "피함" },
      { title: "😭 감정형", desc: "표출함" },
      { title: "🧠 분석형", desc: "이성적 처리" },
      { title: "🌿 안정형", desc: "잘 컨트롤" },
      { title: "⚡ 예민형", desc: "빠르게 반응" }
    ]
  }

};

// 현재 테스트 가져오기
const test = data[testName];
const questions = test.questions;

function showQuestion() {
  document.getElementById("question").innerText = questions[current];
}

function answer(type) {
  if (type === "A") score++;
  current++;

  if (current < questions.length) {
    showQuestion();
  } else {
    const index = Math.min(Math.floor(score), 7);
    location.href = `result.html?test=${testName}&result=${index}`;
  }
}

showQuestion();
