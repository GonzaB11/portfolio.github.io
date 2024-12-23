function handleSubmit(event) {
    event.preventDefault();
    const form = document.getElementById("miFormulario");
    const button = form.querySelector('.submit-button');

    button.textContent = "Enviado";
    button.classList.add("sent");

    setTimeout(() => {
        form.reset();
        button.textContent = "Send";
        button.classList.remove("sent");
    }, 2000);

    return false;
}