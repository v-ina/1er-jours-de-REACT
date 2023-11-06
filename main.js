// Créez en HTML trois "cartes" avec une image, un texte et un bouton (caché par défaut)
// En JS, sélectionnez les "cartes" créées en HTML
// Pour chaque carte, faites un event listener sur le click
// Sélectionnez dans la carte cliquée, le bouton masqué
// Affichez le bouton

const cards = document.querySelectorAll('.card')
console.log(cards[0].children[2]);
cards.forEach((card,ind)=>{
    card.addEventListener('click', ()=>{
        cards[ind].children[2].style.display = 'block'
    })
})
