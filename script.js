const userIcon = document.getElementById('user-icon');
const userDropdown = document.getElementById('user-dropdown');

userIcon.addEventListener('click', () => {
    if (userDropdown.classList.contains('closed')) {
        userDropdown.classList.remove('closed');
        userDropdown.classList.add('open');
    } else {
        userDropdown.classList.remove('open');
        userDropdown.classList.add('closed');
    }
});

const cartIcon = document.getElementById('cart-icon');
const cartDropdown = document.getElementById('cart-dropdown');

cartIcon.addEventListener('click', () => {
    if (cartDropdown.classList.contains('closed')) {
        cartDropdown.classList.remove('closed');
        cartDropdown.classList.add('open');
    } else {
        cartDropdown.classList.remove('open');
        cartDropdown.classList.add('closed');
    }
});