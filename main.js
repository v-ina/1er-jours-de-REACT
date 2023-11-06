// Créez en HTML trois "cartes" avec une image, un texte et un bouton (caché par défaut)
// En JS, sélectionnez les "cartes" créées en HTML
// Pour chaque carte, faites un event listener sur le click
// Sélectionnez dans la carte cliquée, le bouton masqué
// Affichez le bouton

const cards = document.querySelectorAll('.card')

cards.forEach((card,ind)=>{
    card.addEventListener('click', ()=>{
        if(cards[ind].children[2].style.display == 'block'){
            cards[ind].children[2].style.display = 'none'
        } else {
            cards[ind].children[2].style.display = 'block'
        }
    })
})

/*
cards.forEach((card,ind)=>{
    card.addEventListener('click', (event)=>{
        if(!btns[ind].classList.contains('btn-hide')){
            btns[ind].classList.add('btn-hide')
        } else {
            btns[ind].classList.remove('btn-hide')
        }
    }) 
})
*/