//
let sideMenu = document.getElementById("sideMenu");
let popupOn = document.getElementById("gnb_Btn");
let popupOff = document.getElementById("gnb_Btn_Off");
let isSel = true;

popupOn.addEventListener("click", onClick);
popupOff.addEventListener("click", onClick);

function onClick(addEventListener) {
  console.log("click");

  if (isSel == true) {
    isSel = false;
    gsap.to(sideMenu, { right: 0, duration: 0.2 });
  } else {
    isSel = true;
    gsap.to(sideMenu, { right: -680, duration: 0.2 });
  }
}

document.getElementById("gnb_Btn").addEventListener("click", function () {
  document.getElementById("Black-bg-open").style.display = "block";
});

document.getElementById("gnb_Btn_Off").addEventListener("click", function () {
  document.getElementById("Black-bg-open").style.display = "none";
});



//메인 배너 꽃잎 장식 애니메이션
gsap.to("#flower-top", {
  y: 84,
  duration: 1.5,
  rotation: 0,
});

gsap.to("#flower-utill-deco", {
  y: 30,
  duration: 5.9,
  rotation: 1.2,
  opacity: 1,
});
gsap.to("#flower-left-deco ", {
  y: 60,
  x: 15,
  duration: 3.9,
  opacity: 1,
  rotation: 1.2,
});

gsap.to("#flower-banner-deco-back ", {
  y: -10,
  duration: 1.9,
  opacity: 1,
});

gsap.to("#flower-banner-deco", {
  y: 20,
  duration: 3.9,
  opacity: 1,
});
gsap.to("#flower-banner-right", {
  x: 5,
  duration: 3.9,
  opacity: 1,
});
//
//
//

//시작 메인 타이포그래피 애니메이션

const duration = 0.8;
const numberOfTargets = gsap.utils.toArray(".utill > div").length;
const pause = 1.5;
const stagger = duration + pause;
const delay = stagger * (numberOfTargets - 1) + pause;
const tl = gsap.timeline();

gsap.set(".utill > div", { transformOrigin: "100% 50% -50" });

tl.from(".utill > div", {
  rotationX: 90,
  opacity: 0,
  duration: duration,
  stagger: {
    each: stagger,
    repeatDelay: delay,
  },
});
//
//

//
//메인배너 이미지 애니메이션
gsap.fromTo(
  "#main-banner",
  {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
  },
  {
    duration: 1.9,
    ease: "power4.inOut",
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  },
);
gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  const track = document.querySelector(".carousel-service-inner");
  const viewport = document.querySelector(".carousel-viewport");

  const trackWidth = track.scrollWidth;
  const viewportWidth = viewport.offsetWidth;
  const moveX = trackWidth - viewportWidth;

  gsap.fromTo(
    track,
    {
      x: 250,
    },
    {
      x: -moveX,
      ease: "none",
      scrollTrigger: {
        trigger: ".carousel-wrap",
        start: "top 80%",
        end: "+=1600",
        scrub: 1,
      },
    },
  );
});
//패럴랙스
gsap.registerPlugin(ScrollTrigger);

// 공통 세팅 함수
function makeParallax(selector, moveY) {
  gsap.to(selector, {
    y: moveY, // 아래로 이동
    ease: "none", // 스크롤 패럴랙스는 보통 none이 자연스러움
    scrollTrigger: {
      trigger: "body", // 페이지 전체 스크롤 기준
      start: "top top", // 맨 위부터 시작
      end: "bottom bottom", // 맨 아래까지
      scrub: true, // 스크롤과 같이 움직임
      // markers: true,    // 디버깅 필요하면 켜기
    },
  });
}

// 각각 이동량 다르게 주기
makeParallax(".cosmo-paper", 0);
makeParallax(".cosmo-bubble", 480);
makeParallax(".red-ball", 450);
makeParallax(".red-bubble", 520);
makeParallax(".left-bubble", 240);
makeParallax(".crystal-paper", 200);

window.addEventListener("scroll", function () {
  console.log(this.window.scrollY);
});

//Our solution
gsap.set(".solution-card-left", {
  scaleX: 0,
  x: -80,
});

gsap.set(".solution-card-right", {
  scaleX: 0,
  x: -80,
});

gsap.set(".solution-card-left p", {
  opacity: 0,
  y: 20,
});
gsap.set(".solution-card-left span", {
  opacity: 0,
  y: 20,
});

gsap.set(".solution-card-right p", {
  opacity: 0,
  y: 20,
});
gsap.set(".solution-card-right span", {
  opacity: 0,
  y: 20,
});

const cardTl = gsap.timeline({
  paused: true,
  defaults: {
    ease: "power3.out",
  },
});

cardTl.to(".solution-card-left", {
  scaleX: 1,
  x: 0,
  duration: 0.8,
});

cardTl.to(
  ".solution-card-right",
  {
    scaleX: 1,
    x: 0,
    duration: 0.8,
  },
  "-=0.45",
);

/* 카드가 다 펼쳐진 뒤 텍스트 등장 */
cardTl.to(".solution-card-left p", {
  opacity: 1,
  y: 0,
  duration: 0.4,
});

cardTl.to(
  ".solution-card-right p",
  {
    opacity: 1,
    y: 0,
    duration: 0.4,
  },
  "-=0.2",
);
cardTl.to(".solution-card-left span", {
  opacity: 1,
  y: 0,
  duration: 0.4,
});

cardTl.to(
  ".solution-card-right span",
  {
    opacity: 1,
    y: 0,
    duration: 0.4,
  },
  "-=0.2",
);

function handleScroll() {
  if (window.scrollY >= 3100) {
    cardTl.play();
    window.removeEventListener("scroll", handleScroll);
  }
}

window.addEventListener("scroll", handleScroll);
