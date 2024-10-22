// Preguntas Frecuentes
(function(){
    const titleQuestions = [...document.querySelectorAll('.questions__title')];
    console.log(titleQuestions)

    titleQuestions.forEach(question =>{
        question.addEventListener('click', ()=>{
            let height = 0;
            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle('questions__padding--add');
            question.children[0].classList.toggle('questions__arrow--rotate');

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;
        });
    });
})();
function toggleRecentSearches() {
    const recentSearches = document.getElementById('recent-searches');
    const input = document.getElementById('searchInput').value;
    if (input.trim() !== '') {
        recentSearches.style.display = 'block';
    } else {
        recentSearches.style.display = 'none';
    }
}
document.addEventListener('click', function(event) {
    const recentSearches = document.getElementById('recent-searches');
    const searchButton = document.querySelector('.btn-search');
    const searchInput = document.getElementById('searchInput');

    if (!recentSearches.contains(event.target) && !searchButton.contains(event.target) && !searchInput.contains(event.target)) {
        recentSearches.style.display = 'none';
    }
});

function selectQuestion(question) {
    document.getElementById('searchInput').value = question;
    document.getElementById('recent-searches').style.display = 'none'; 
    window.location.href = "#preguntas"; 
}

document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const input = document.getElementById('searchInput').value;
        const preguntas = [
            "¿Qué es InspiraVoc?",
            "¿Cómo funciona la prueba vocacional en esta plataforma?",
            "¿Cómo puedo acceder a una asesoría personalizada con un profesional?",
            "¿Cómo eligen a los profesionales que brindan asesorías?",
            "¿Qué información necesito para comenzar con la prueba vocacional?",
            "¿Qué beneficios tiene realizar una asesoría personalizada con un profesional?"
        ];
        
        if (preguntas.includes(input)) {
            window.location.href = "#preguntas";
        }
    }
});
//Carrusel de Imagnes
let currentIndex = 0;
const intervalTime = 5000; 

function moveSlidefotos(direction) {
    const carrusel = document.querySelector('.carrusel');
    const items = document.querySelectorAll('.carrusel-item');
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = items.length - 1;
    } else if (currentIndex >= items.length) {
        currentIndex = 0;
    }

    carrusel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function autoSlide() {
    moveSlidefotos(1);  
}


let autoSlider = setInterval(autoSlide, intervalTime);


document.querySelector('.carrusel-btn-left').addEventListener('click', () => {
    moveSlidefotos(-1);
    clearInterval(autoSlider);
    autoSlider = setInterval(autoSlide, intervalTime); 
});

document.querySelector('.carrusel-btn-right').addEventListener('click', () => {
    moveSlidefotos(1);
    clearInterval(autoSlider);
    autoSlider = setInterval(autoSlide, intervalTime); 
});

