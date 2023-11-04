const propuesta = document.getElementById('propuesta');
const propuestaText = document.getElementById('propuestaText');
const backgroundImg = document.getElementById('background-img');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

let contraRespuestas = [
    "Andrea ¿Quieres darme una oportunidad?",
    "¿Lo pensaste bien Andrea? Todavía estás a tiempo",
    "Te imaginas Andrea que todo el tiempo te llene de detalles como este!",
    "Decídete Andrea.\n \n A mi me gustaría vivir enamorado de tí",
    "Si te salgo un 'desgraciado', ya estás acostumbrada. \n \n Pero yo quiero sorprenderte",
    "Un ser así como tú, Andrea, es difícil encontrar, por eso quiero aprovechar la oportunidad",
    "Yo sé que no soy el hombre perfecto, pero sé que juntos vamos a disfrutar mucho",
    "Dale Andrea, que si no tienes palabras, me puedes dar una respuesta en mis labios", 
    "Si tu lo prefieres, puede ser a escondidas"
]
let currentIndex = 0;
let isNoButtonDisabled = false;

function showPropuesta(index) {
    propuestaText.innerHTML = contraRespuestas[index];
    propuesta.style.animation = 'fadeInOut 1s ease-in-out';
    setTimeout(() => {
        propuesta.style.animation = '';
    }, 1000);
}

function changeBackground(index) {
    backgroundImg.src = `tu_url_de_imagen_${index % 3}.jpg`;
}

function disableNoButtonForProportionalTime() {
    noButton.disabled = true;
    const currentPropuesta = contraRespuestas[currentIndex];
    const timeToWait = currentPropuesta.length * 70; 
    setTimeout(() => {
        noButton.disabled = false;
    }, timeToWait);
}


yesButton.addEventListener('click', () => {
    window.location.href = 'tu_url_externo.com';
});

noButton.addEventListener('click', () => {
    if (!isNoButtonDisabled) {
        currentIndex = (currentIndex + 1) % contraRespuestas.length;
        showPropuesta(currentIndex);
        changeBackground(currentIndex);
        disableNoButtonForProportionalTime();
    }
});


showPropuesta(currentIndex);
changeBackground(currentIndex);