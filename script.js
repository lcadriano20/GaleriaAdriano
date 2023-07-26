// SELECIONAR OS ITENS DO HTML

const galleryItems  = document.querySelectorAll(".gallery-item")
const lightbox      = document.querySelector('.lightbox')
const lightboxImage = document.querySelector(".lightbox-image")
const lightboxClose = document.querySelector(".lightbox-close")

// FUNÇÃO DE ABRIR O LIGHTBOX 
galleryItems.forEach((item)=> {
    item.addEventListener("click",() => {
        const imageUrl = item.querySelector(".gallery-image").getAttribute('data-src')

        lightboxImage.setAttribute("src",imageUrl)

        lightbox.style.display = "flex"
    })
})

lightboxClose.addEventListener("click",() =>{
    lightbox.style.display = "none"
})

