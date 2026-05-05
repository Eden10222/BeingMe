// 결과 데이터
const results = {
  A: {
    title: "🔥 집착형",
    desc: "사랑에 깊이 몰입하는 타입\n상대에게 애정을 많이 표현함\n하지만 불안감이 큰 편\n감정 기복이 있을 수 있음\n안정감이 중요함",
    img: "images/A.png"
  },
  B: {
    title: "💖 안정형",
    desc: "가장 이상적인 연애 스타일\n감정과 이성의 균형이 좋음\n갈등 해결 능력이 뛰어남\n신뢰 중심 관계\n장기 연애에 강함",
    img: "images/B.png"
  },
  C: {
    title: "🌪 회피형",
    desc: "자유를 중요하게 생각\n혼자 있는 시간 필요\n감정 표현이 적은 편\n가까워질수록 거리 둠\n신뢰 형성이 중요",
    img: "images/C.png"
  },
  D: {
    title: "❄ 무심형",
    desc: "감정 기복이 거의 없음\n연애에 큰 의미를 두지 않음\n편안한 관계 선호\n표현이 부족할 수 있음\n자연스러운 흐름 추구",
    img: "images/D.png"
  }
};

// 결과 가져오기
const type = localStorage.getItem("result");
const data = results[type];

// 화면 출력
document.getElementById("title").innerText = data.title;
document.getElementById("desc").innerText = data.desc;

// 🔥 결과 이미지 표시 (이거 중요)
document.getElementById("result-img").src = data.img;

// 🔥 이미지 자동 생성
generateImage();


// =====================
// 🎨 캔버스 이미지 생성
// =====================
function generateImage() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  const bg = new Image();
  bg.src = "images/bg.png";

  bg.onload = function () {
    // 배경
    ctx.drawImage(bg, 0, 0, 1080, 1080);

    // 타이틀
    ctx.fillStyle = "#000";
    ctx.font = "bold 60px Arial";
    ctx.textAlign = "center";
    ctx.fillText(data.title, 540, 200);

    // 본문
    ctx.font = "40px Arial";
    const lines = data.desc.split("\n");

    lines.forEach((line, i) => {
      ctx.fillText(line, 540, 400 + i * 80);
    });

    // 하단 문구 (바이럴 포인트🔥)
    ctx.font = "bold 36px Arial";
    ctx.fillStyle = "#ff4d6d";
    ctx.fillText("💘 연애패턴 테스트 결과", 540, 950);
  };
}


// =====================
// 📥 이미지 다운로드
// =====================
function downloadImage() {
  const canvas = document.getElementById("canvas");

  const link = document.createElement("a");
  link.download = "love-test-result.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
}


// =====================
// 📤 카카오 공유
// =====================
function shareKakao(){
  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: data.title,
      description: "💘 내 연애패턴 테스트 결과",
      imageUrl: window.location.origin + "/images/thumb.png", // ⚠️ 너는 png임!
      link: {
        mobileWebUrl: window.location.href,
        webUrl: window.location.href,
      },
    },
  });
}
