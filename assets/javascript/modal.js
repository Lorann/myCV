var modal = document.getElementById('modalTitle');
var modalBtn = document.getElementById('modalBtn');
var xcloseBtn = document.getElementsByClassName('x-closeBtn')[0];
var CloseBtn = document.getElementById('CloseBtn');

modalBtn.addEventListener('click', openModal);
function openModal() {
  modal.style.display = 'block'
}

xcloseBtn.addEventListener('click', xcloseModal);
function xcloseModal() {
  modal.style.display = 'none'
}

CloseBtn.addEventListener('click', CloseBtnModal);
function CloseBtnModal() {
  modal.style.display = 'none'
}