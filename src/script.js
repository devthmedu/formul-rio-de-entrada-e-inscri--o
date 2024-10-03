const signUpBtn = document.getElementById("sign-up-btn");
const signInBtn = document.getElementById("sign-in-btn");
const container = document.querySelector(".container");

signUpBtn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});


signInBtn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});


function validateForm(form) {
    const inputs = form.querySelectorAll("input");
    let valid = true;

    inputs.forEach(input => {
        if (!input.value) {
            valid = false;
            input.classList.add("error");
        } else {
            input.classList.remove("error");
        }
    });

    return valid;
}


document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (validateForm(form)) {
            
            console.log("Formulário válido e enviado!");

            form.reset();
        } else {
            console.log("Por favor, preencha todos os campos.");
        }
    });
});
