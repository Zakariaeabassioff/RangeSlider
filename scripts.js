//Récupétation des éléments du DOM
const amount = document.querySelector('.amount');
const priceRange = document.getElementById('priceRange');


//en fonction de la valeur du range
priceRange.addEventListener('input', (e) => updatePrice(e.target.value));

//Fonction qui permet de mettre à jour le prix
const updatePrice = (value) => {
    const dollars = Math.floor(value / 100);
    const cents = value % 100;
    if (cents < 10) {
        amount.innerHTML = `${dollars}.0${cents}`;
    } else {
        amount.innerHTML = `${dollars}.${cents}`;
    }
};
