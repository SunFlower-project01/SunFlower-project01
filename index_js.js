const buttonLeft = document.querySelector(".button__left");
const buttonRight = document.querySelector(".button__right");
const carousel = document.querySelector(".carousel--hidden");
const images = document.querySelectorAll(".carousel--hidden__image");
const imgTag = document.querySelectorAll("img");

let index = 1; // 이미지의 위치를 지정하는 변수
let total = images.length; // 이미지 총 개수
let imgWidth = 400; // 가로로 늘리는 것은 비율에 따른 한계가 있음, width : height = 4 : 3 에서 width비율은 늘리지 말 것
let imgHeight = 300;


images.forEach(element => {
  element.style.width = `${imgWidth}px`;  
  element.style.height = `${imgHeight}px`;  
});

console.log(document.getElementsByClassName("carousel--hidden__image")) // img 5개의 리스트

// 액자의 길이를 변수로 빼서 구현하고
// 추가 변수 : (액자 - imgwidth ) / 2

carousel.style.transform = `translate(-${imgWidth * index}px)`; // 왼쪽위 꼭지점위치 인덱스 값에 맞게 사진 위치를 이동
buttonRight.addEventListener("click", () => {
  // 클릭을 한 순간 >> after를 누르면 위치가 이동한다.
  // 페이지가 4장 0, 1, 2, 3   => index가 0, 1, 2 일때 아래 if문이 실행 위치가 3까지는 도달
  if (index < total - 1) {
    index += 1;
    carousel.style.transform = `translate(-${imgWidth * index}px)`;
  }
    
  if (index === total - 1) { // 인덱스가 4가 되면 1로 보낸다. 3 -> 1 
    setTimeout(() => {
      index = 1;
      carousel.style.transition = "transform 0s ease-out";
      carousel.style.transform = `translate(-${imgWidth * index}px)`;       

    }, 400); // <-- 500이 0.5초 // 클릭을 하는 순간 2,3,4 0.4초
  }
  else { // index 2
    carousel.style.transition = "transform 0.4s ease-out";
  }
  console.log(index);
});


buttonLeft.addEventListener("click", () => {
  // click이란 이벤트가 발생됐을 때 {}을 구현, ()는 몰라
  // 0 1 2 3 4
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
  console.log(index);
});