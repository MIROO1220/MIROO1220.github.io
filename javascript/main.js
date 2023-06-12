/* 화살표 누르면 사진 이동 */
const slide = document.querySelector('.slide');
const slideWidth = slide.offsetWidth+10; // offsetWidth : 요소의 레이아웃 너비를 반환

function moveRight() {
    slide.scrollLeft += slideWidth;
}
function moveLeft() {
    slide.scrollLeft -= slideWidth;
}

