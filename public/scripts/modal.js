export default function Modal() {

  const elementModalWrapper = document.querySelector(".modal-wrapper");
  const cancelButton = document.querySelector(".buttons .button.grey");

  cancelButton.addEventListener("click", close);

  function open() {
    //funcionalidade de atribuir a class active para a modal
    elementModalWrapper.classList.add("active");
  }
  function close() {
    //funcionalidade de retirar a class active para a modal
    elementModalWrapper.classList.remove("active");
  }

  return {
    open,
    close,
  };
}

