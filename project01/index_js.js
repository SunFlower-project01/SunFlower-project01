const buttonLeft = document.querySelector(".button__left");
const buttonRight = document.querySelector(".button__right");
const carousel = document.querySelector(".carousel--hidden");
const images = document.querySelectorAll(".carousel--hidden__image");
const imgTag = document.querySelectorAll("img");

let index = 1; // 이미지의 위치를 지정하는 변수 
let total = images.length; // 이미지 총 개수
let imgWidth = 400; // 가로로 늘리는 것은 비율에 따른 한계가 있음, width : height = 4 : 3 에서 width비율은 늘리지 말 것
let imgHeight = 300;

// 모든 이미지에 가로 세로의 길이를 적용
images.forEach(element => {
  element.style.width = `${imgWidth}px`;  
  element.style.height = `${imgHeight}px`;  
});

// 왼쪽위 꼭지점위치 인덱스 값에 맞게 사진 위치를 이동
carousel.style.transform = `translate(-${imgWidth * index}px)`; 

// 오른쪽 버튼
buttonRight.addEventListener("click", () => {
  // 페이지가 범위를 벗어나지 못하게 index를 제한
  if (index < total - 1) {
    index += 1;
    carousel.style.transform = `translate(-${imgWidth * index}px)`;
  }

  // setTimeout(() => { }, time);)
  // time ms 시간 뒤에  대괄호 안에 코드를 실행한다.
  // 마지막 index에 사진(index가 1과 중복사진)이 도달하면 index가 1인 사진으로 이동한다.
  // 1-2-3-4-1 로 이동해야 하나 1-2-3-(4)-1로 이동하는 문제 해결을 위해 setTimeout을 사용
  // 이동시간을 0s로 설정해서 4에서 1로 순간이동하게 만듦 -> 보는 사람은 무한 순회로 보이게 만듦
  // else에서 0s로 설정한 이동시간을 다시 0.4s로 설정
  if (index === total - 1) {
    setTimeout(() => {
      index = 1;
      carousel.style.transition = "transform 0s ease-out";
      carousel.style.transform = `translate(-${imgWidth * index}px)`;       

    }, 400);
  } else {
    carousel.style.transition = "transform 0.4s ease-out";
  }
});

// 왼쪽 버튼
buttonLeft.addEventListener("click", () => {
  // 페이지가 범위를 벗어나지 못하게 index를 제한
  if (index > 0) {
    index -= 1;
    carousel.style.transform = `translate(-${imgWidth * index}px)`;
  }
  if (index === 0) {
    setTimeout(() => {
      index = total - 2;
      carousel.style.transition = "transform 0s ease-out";
      carousel.style.transform = `translate(-${imgWidth * index}px)`;
    }, 400); // <-- 500이 0.5초 // 클릭을 하는 순간 2,3,4
  }
  else {
    carousel.style.transition = "transform 0.4s ease-out";
  }
});