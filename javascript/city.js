/* 메뉴 하나 누르면 해당 메뉴만 보이게 */
const home = document.querySelector(".home");
const place = document.querySelector(".place");
const food = document.querySelector(".food");
const festival = document.querySelector(".festival");
const homeHome = document.querySelector(".homeHome");
const homePlace = document.querySelector(".homePlace");
const homeFood = document.querySelector(".homeFood");
const homeFestival = document.querySelector(".homeFestival");
function showHome() {
    home.style.display = "block";
    food.style.display = "none";
    festival.style.display = "none";
    place.style.display = "none";

    homeHome.style.backgroundColor = "#5e69a7";
    homePlace.style.backgroundColor = "#cadbff";
    homeFood.style.backgroundColor = "#cadbff";
    homeFestival.style.backgroundColor = "#cadbff";
}
function showPlace() {
    home.style.display = "none";
    food.style.display = "none";
    festival.style.display = "none";
    place.style.display = "block";

    homeHome.style.backgroundColor = "#cadbff";
    homePlace.style.backgroundColor = "#5e69a7";
    homeFood.style.backgroundColor = "#cadbff";
    homeFestival.style.backgroundColor = "#cadbff";
};
function showFood() {
    home.style.display = "none";
    food.style.display = "block";
    festival.style.display = "none";
    place.style.display = "none";

    homeHome.style.backgroundColor = "#cadbff";
    homePlace.style.backgroundColor = "#cadbff";
    homeFood.style.backgroundColor = "#5e69a7";
    homeFestival.style.backgroundColor = "#cadbff";
};
function showFestival() {
    home.style.display = "none";
    food.style.display = "none";
    festival.style.display = "block";
    place.style.display = "none";

    homeHome.style.backgroundColor = "#cadbff";
    homePlace.style.backgroundColor = "#cadbff"
    homeFood.style.backgroundColor = "#cadbff";
    homeFestival.style.backgroundColor = "#5e69a7";
};

/* welcome 인사 */
function welcome(text) {
    let i = 0;
    const txt = text;

    function test() {
        if (i < txt.length) {
            document.getElementById("welcome").innerHTML += txt.charAt(i);
            i++;
            setTimeout(test, 200);
        }
    }
    test();
};