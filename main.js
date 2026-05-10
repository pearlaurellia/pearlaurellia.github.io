
let navlinks = document.querySelectorAll(".navigationlist a")
let currentpage = window.location.pathname

navlinks.forEach(link => {
    if (link.getAttribute("href") === currentpage.split("/").pop()) {
        link.style.color = "#4f7942"
        link.style.fontWeight = "700"
    }
})


let faders = document.querySelectorAll(
    ".blogblock, .bloghtmlpreview, .susunitem, .biodata, .contactbuttons a, .aboutmepicture"
)

let appearance = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible")
            appearance.unobserve(entry.target)
        }
    })
}, { threshold: 0.1 })

faders.forEach(el => {
    el.classList.add("hidden")
    appearance.observe(el)
})


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        let target = document.querySelector(this.getAttribute("href"))
        if (!target) return
        e.preventDefault()
        target.scrollIntoView({ behavior: "smooth" })
    })
})


let header = document.querySelector("header")

window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
        header.style.boxShadow = "0 4px 12px rgba(0,0,0,0.12)"
    } else {
        header.style.boxShadow = "0 4px 6px rgba(43, 43, 43, 0.2)"
    }
})


let lightbox = document.createElement("div")
lightbox.id = "lightbox"
lightbox.innerHTML = `<div id="lightboxinner"><img id="lightboximg"><button id="lightboxclose">✕</button></div>`
document.body.appendChild(lightbox)

let susunitems = document.querySelectorAll(".susunitem img")

susunitems.forEach(img => {
    img.style.cursor = "pointer"
    img.addEventListener("click", () => {
        document.getElementById("lightboximg").src = img.src
        lightbox.classList.add("open")
    })
})

document.getElementById("lightboxclose").addEventListener("click", () => {
    lightbox.classList.remove("open")
})

lightbox.addEventListener("click", function(e) {
    if (e.target === lightbox) lightbox.classList.remove("open")
})