
export default function Modal() {

  const cancelButton = document.querySelector('.cancel')
  cancelButton.addEventListener("click", closeModal)
  
  const excluirButton = document.querySelector('.excluir')
  excluirButton.addEventListener("click", closeModal)

  function openModal() {
    // Ativa a class active 
    document.querySelector('.modal-wrapper').classList.add("active")
  }
  function closeModal() {
    // Desativa a class active 
    document.querySelector('.modal-wrapper').classList.remove("active")
  }

  return {
    openModal,
    closeModal
  }
}