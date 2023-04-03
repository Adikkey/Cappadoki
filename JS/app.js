let content_fairy_img = document.querySelectorAll(".content_fairy_img")
let arrow_left_fairy = document.querySelectorAll(".arrow_left_fairy")
let arrow_rigth_fairy = document.querySelectorAll(".arrow_rigth_fairy")
let content_marsh_img = document.querySelectorAll(".content_marsh_img")
let arrow_left_marsh = document.querySelectorAll(".arrow_left_marsh")
let arrow_rigth_marsh = document.querySelectorAll(".arrow_rigth_marsh")
let nav = document.querySelector("nav")

let x = 0
for(let i = 0; i < content_fairy_img.length; i++) {
    content_fairy_img[i].style.display = 'none'
}           
content_fairy_img[0].style.display = "block"


for(let i = 0; i < content_fairy_img.length; i++) {
    arrow_left_fairy[i].addEventListener('click', () => {
        if (x < 2) {
            content_fairy_img[x].style.display = "none"
            x++; 
            content_fairy_img[x].style.display = 'block'
        }
        else {
            content_fairy_img[x].style.display = "none"
            x = 0; 
            content_fairy_img[x].style.display = "block"
        }
    })  
}

for(let i = 0; i < content_fairy_img.length; i++) {
    arrow_rigth_fairy[i].addEventListener('click', () => {
        if (x > 0) {
            content_fairy_img[x].style.display = "none"
            x--; 
            content_fairy_img[x].style.display = 'block'
        }
        else {
            content_fairy_img[x].style.display = "none"
            x = 2; 
            content_fairy_img[x].style.display = "block"
        }
    })
}
// !fgrembokltsrnlhnethblnsgbb,srgbgm;oiwrbjslnbotrghibjetoi;dnbiousgrbuilgrlne ! //

let m = 0
for(let i = 0; i < content_marsh_img.length; i++) {
    content_marsh_img[i].style.display = 'none'
}           
content_marsh_img[0].style.display = "block"


for(let i = 0; i < content_marsh_img.length; i++) {
    arrow_rigth_marsh[i].addEventListener('click', () => {
        if (m < 2) {
            content_marsh_img[m].style.display = "none"
            m++; 
            content_marsh_img[m].style.display = 'block'
        }
        else {
            content_marsh_img[m].style.display = "none"
            m = 0; 
            content_marsh_img[m].style.display = "block"
        }
    })  
}

for(let i = 0; i < content_marsh_img.length; i++) {
    arrow_left_marsh[i].addEventListener('click', () => {
        if (m > 0) {
            content_marsh_img[m].style.display = "none"
            m--; 
            content_marsh_img[m].style.display = 'block'
        }
        else {
            content_marsh_img[m].style.display = "none"
            m = 2; 
            content_marsh_img[m].style.display = "block"
        }
    })
}
// !f,l;dgnbglmropghjosrijnbogrbndoir;bntnorib;roinroinbriobnsroinfoeringbnioenboisrniobnsroinboisrn ! \\
let modal = document.querySelector(".modal")
let marsh_btn = document.querySelector(".marsh_btn")
let btn_dark = document.querySelector(".btn_dark")
let modal__close = document.querySelector(".modal__close")

marsh_btn.addEventListener("click", () => {
    modal.style.display = "block"
})
btn_dark.addEventListener("click", () => {
    modal.style.display = "none"
})
modal__close.addEventListener("click", () => {
    modal.style.display = "none"
})

// //! 42rfegf,remwgmwkmgrfakanday soiduasda

let arrow_up = document.querySelector("#arrow_up")

window.addEventListener("scroll", () => {
    let scroll = window.scrollY
    if (scroll > 200){
        nav.style.background = "linear-gradient(rgba(255, 255, 0, 0.366) , rgba(255, 255, 0, 0.408))"
        arrow_up.style.display = "block"
    }else{
        nav.style.background = "none"
        arrow_up.style.display = "none"
    }
})

arrow_up.addEventListener("click", () => {
    window.scrollTo(0,0)
})
