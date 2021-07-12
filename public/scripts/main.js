import Modal from "./modal.js";
const modal = Modal();

// ELEMENTOS //////////////////////////////////////////////////////////////////////////////////////
const modalTitle = document.querySelector(".modal h2");
const modalDescription = document.querySelector(".modal p");
const modalButton = document.querySelector(".modal button");
const checkButtons = document.querySelectorAll(".actions a.check");
const deleteButtons = document.querySelectorAll(".actions a.delete");

// FUNÇÕES ///////////////////////////////////////////////////////////////////////////////////////

const handleClick = function (event, check = true) {
  event.preventDefault();
  // Elements
  const text = check ? " marcar como lida" : " excluir ";
  const slug = check ? "check" : "delete";
  const roomId = document.querySelector("#room-id").dataset.id;
  const questionId = event.target.dataset.id;

  const form = document.querySelector(".modal form");
  

  //Mudar H2 para Marcar como lida
  modalTitle.innerHTML = check ? "Marcar como lida" : "Excluir pergunta";

  // Mudar P para Marcar como lida
  modalDescription.innerHTML = `Tem certeza que deseja ${text} esta pergunta?`;

  // Mudar Button para Marcar como lida
  modalButton.innerHTML = `Sim, ${text}`;

  // Mudar cor do botao de confirmar
  check
    ? modalButton.classList.remove("red")
    : modalButton.classList.add("red");

  //
  form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`);

  // Abrir modal
  modal.open();
};

// FUNCIONALIDADES ///////////////////////////////////////////////////////////////////////////////

// Abrir modal ao clicar no botao de pergunta lida
checkButtons.forEach((button) => {
  button.addEventListener("click", handleClick);
});

// Abrir modal ao clicar no botao de excluir pergunta
deleteButtons.forEach((button) => {
  button.addEventListener("click", (event) => handleClick(event, false));
});
