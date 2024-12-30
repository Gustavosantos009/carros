let prevButton = document.getElementById("prev")
let nextButton = document.getElementById("next")
let content = document.querySelector(".content")
let items = document.querySelectorAll(".list .item")
let indicators = document.querySelector(".indicators")
let dots = indicators.querySelectorAll("ul li")

let active = 0
let firstPosition = 0
let lastPosition = items.length - 1

function setSlider() {
    let itemOld = document.querySelector(".list .item.active");
    itemOld.classList.remove("active")

    let dotsOld = indicators.querySelector("ul li.active")
    dotsOld.classList.remove("active")
    dots[active].classList.add("active")

    indicators.querySelector(".number").innerHTML = "0" +(active + 1 )

}

prevButton.onclick = () => {
    active = active - 1 <firstPosition ? lastPosition : active - 1
    setSlider()
    items[active].classList.add("active")


}
nextButton.onclick = () => {

    active = active + 1 > lastPosition ? 0 : active + 1
    setSlider()
    items[active].classList.add("active")
}