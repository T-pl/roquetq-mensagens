import  Modal from './modal.js';

const modal = Modal();

const modalTitle = document.querySelector('.modal h2');
const modalDescription = document.querySelector('.modal p');
const modalButton = document.querySelector('.modal .excluir');

const checkButtons = document.querySelectorAll(".actions a.check");


checkButtons.forEach(button => {
  button.addEventListener("click", handleClick)
})


const deleteButtons = document.querySelectorAll(".actions a.delete");

deleteButtons.forEach(buttonDelete => {
  buttonDelete.addEventListener("click", (event) => handleClick(event, false))
})


function handleClick(event, check = true) {
  event.preventDefault()
  const textos = check ? "Marcar como lida" : "Excluir ";
 
  
  modalTitle.innerHTML = `${textos} essa pergunta?`;
  modalDescription.innerHTML = check ? `Você realmente quer ${textos.toLowerCase()} como lida?` : `Tem certeza que deseja ${textos.toLowerCase()} essa pergunta?`;
  modalButton.innerHTML = `Sim, ${textos.toLowerCase()}`;
  check ? modalButton.classList.remove("red") : modalButton.classList.add("red"); 
  
  modal.openModal()
  
}