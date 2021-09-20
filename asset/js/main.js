const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.modal')
function showBuyTicket() {
    modal.classList.add('open')
}
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTicket)
}   