// Créez en HTML trois "cartes" avec une image, un texte et un bouton (caché par défaut)
// En JS, sélectionnez les "cartes" créées en HTML
// Pour chaque carte, faites un event listener sur le click
// Sélectionnez dans la carte cliquée, le bouton masqué
// Affichez le bouton



const cards = document.querySelectorAll('.card')
// j'ai importé tout les élements qui contient une classe 'card' en tableaux, et donné un nom pour ce tableau

cards.forEach((card,ind)=>{
    // forEach pour mettre addEventListener a tout les elements de tableau "cards" 
    // j'ai ajouté ind pour le 2eme parametre pour choisir son enfant btn, au lieu d'importer boutons 

    card.addEventListener('click', ()=>{
        // quand on clique, il y aura une event qui va apparaitre. en facon de fonction de-souss
        if(cards[ind].children[2].style.display == 'block'){
            cards[ind].children[2].style.display = 'none'
            // si un style de btn est 'block' , je le donne 'none' pour marsquer
        } else {
            cards[ind].children[2].style.display = 'block'
            // si un style de btn est déjà marsqué, je le donne 'block' pour afficher
        }
    })
})

// le cas je gere le toggle avec une classe

cards.forEach((card,ind)=>{
    card.addEventListener('click', (event)=>{
        if(!btns[ind].classList.contains('btn-hide')){
            btns[ind].classList.add('btn-hide')
        } else {
            btns[ind].classList.remove('btn-hide')
        }
    }) 
})
