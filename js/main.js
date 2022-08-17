var elHeader = document.querySelector(".site-header")
var elBars = document.querySelector(".site-header__menu-btn")
var elBody = document.querySelector("body")

elBars.addEventListener("click", ()=> {
    elHeader.classList.toggle("sitenav-on")
})

elBars.addEventListener("click", ()=> {
    elBody.classList.toggle("site-body")
})