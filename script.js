const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const livesBar = document.getElementById('lives');
const message = document.getElementById('message');

let livesCount = 3;

yesButton.addEventListener('click', () => {
    message.textContent = "¡Felicidades! Andrea está emocionada por tu respuesta.";
});

noButton.addEventListener('click', () => {
    if (livesCount > 0) {
        livesCount--;
        livesBar.style.width = (livesCount / 3) * 100 + "%";
        message.textContent = `¿Estás segura que no quieres darle una oportunidad? ¡Todavía estás a tiempo de cambiar tu decisión!`;
    } else {
        message.textContent = "Tus oportunidades se han agotado.";
        noButton.disabled = true;
    }
});
