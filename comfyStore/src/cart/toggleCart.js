import { getElement } from '../utils.js';

const cartOverlqy = getElement('.cart-overlay');
const closeCartBtn = getElement('.cart-close');
const toggleCartBtn = getElement('.toggle-cart');

toggleCartBtn.addEventListener('click',()=>{
    cartOverlqy.classList.add('show');
});

closeCartBtn.addEventListener('click', ()=>{
    cartOverlqy.classList.remove('show');
});


export const openCart = () => {
    cartOverlqy.classList.add('show');
};
