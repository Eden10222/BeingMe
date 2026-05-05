const results = {
  A: {
    title: "🔥 집착형",
    desc: "사랑에 깊이 몰입\n애정 표현 많음\n불안감 있음\n감정 기복 있음\n안정감 중요"
  },
  B: {
    title: "💖 안정형",
    desc: "이상적인 연애\n균형 잘 맞음\n갈등 해결 능력\n신뢰 중심\n장기 연애 적합"
  },
  C: {
    title: "🌪 회피형",
    desc: "자유 중요\n혼자 시간 필요\n감정 표현 적음\n거리 두는 스타일\n신뢰 중요"
  },
  D: {
    title: "❄ 무심형",
    desc: "감정 기복 적음\n연애에 무심\n편안함 추구\n표현 부족\n자연스러움"
  }
};

const type = localStorage.getItem("result");
const data = results[type];

document.getElementById("title").innerText = data.title;
document.getElementById("desc").innerText = data.desc;

generateImage();

function generateImage() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  const bg = new Image();
  bg.src = "images/bg.png";

  bg.onload = function () {
    ctx.drawImage(bg, 0, 0, 1080, 1080);

    ctx.fillStyle = "#000";
    ctx.font = "bold 60px Arial";
    ctx.textAlign = "center";
    ctx.fillText(data.title, 540, 200);

    ctx.font = "40px Arial";
    const lines = data.desc.split("\\n");

    lines.forEach((line, i) => {
      ctx.fillText(line, 540, 400 + i * 80);
    });
  };
}

function downloadImage() {
  const canvas = document.getElementById("canvas");
  const link = document.createElement("a");
  link.download = "result.png";
  link.href = canvas.toDataURL();
  link.click();
}

function shareKakao(){
  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: data.title,
      description: "연애패턴 테스트 결과",
      imageUrl: window.location.origin + "/images/thumb.jpg",
      link: {
        mobileWebUrl: window.location.href,
        webUrl: window.location.href,
      },
    },
  });
}
