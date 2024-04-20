const searchInput = document.getElementById('buscar');
const searchButton = document.getElementById('btn-buscar');
const results = document.getElementById('info');

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value;
    if (searchTerm) {
        searchMealByName(searchTerm);
        searchimgs(searchTerm);
    }
});

async function searchimgs(nameimg){
    const apiUrl = 'php/unsplash.php';
    fetch(apiUrl,{
        method: 'POST',
        body: JSON.stringify({ query: nameimg}),
        headers: {
            'Content-Type': 'application/json'
        } 
    })
    .then(response => response.json())
    .then(data => {
        displayCarouselImages(data);
    })
    .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
    });
}

function displayCarouselImages(data) {
    const contentcar=document.getElementById('sec');
    contentcar.innerHTML = '';
    const carouselContainer = document.createElement('div');
    carouselContainer.className='slide-container';

    if (data.results && data.results.length > 0) {
        data.results.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image.urls.regular;
            imgElement.alt = 'Imagen de Unsplash';

            const slideElement = document.createElement('div');
            slideElement.className = 'slide';
            slideElement.appendChild(imgElement);
            carouselContainer.appendChild(slideElement);

            contentcar.appendChild(carouselContainer);
        });
    } else {
        carouselContainer.innerHTML = 'No se encontraron imágenes referente a la comida espesificada.';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    searchMealByName('pie');
});

function searchMealByName(name) {
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayResults(data);
        })
        .catch(error => {
            console.error('Error al buscar comida:', error);
        });
}

function displayResults(data) {
    if (data.meals) {
        results.innerHTML = '';
        data.meals.forEach(meal => {
            const mealName = meal.strMeal;
            const mealImage = meal.strMealThumb;
            const instructions = meal.strInstructions;

            const ingredients = [];
            for (let i = 1; i <= 20; i++) {
                const ingredientName = meal[`strIngredient${i}`];
                const ingredientMeasure = meal[`strMeasure${i}`];
                if (ingredientName && ingredientMeasure) {
                    ingredients.push(`${ingredientMeasure} ${ingredientName}`);
                } else {
                    break;
                }
            }

            results.innerHTML=`
                <img src="${mealImage}" alt="${mealName}" class="muestra"> 
                <div id="comida">
                    <h3>${mealName}</h3>
                    <hr>
                    <div id="ingredientes">
                        <div>
                            <h4>Ingredientes:</h4>
                            <ul>
                                ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                            </ul>
                        </div>
                        <div id="instructios">
                            <h4>Instrucciones de preparación:</h4>
                            <p>${instructions}</p>
                        </div>
                    </div>
                </div>
            `;
            results.appendChild(mealElement);
            console.log(meals);
        });
    } else {
        alert('No se encontraron comidas con ese nombre.');
    }
}

const letras = document.querySelectorAll('.letra');
letras.forEach(letra => {
    letra.addEventListener('click', () => {
        const letraSeleccionada = letra.value;
        searchMealByFirstLetter(letraSeleccionada);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    searchMealByFirstLetter('a'); // Inicia la búsqueda con la letra "A"
});

function searchMealByFirstLetter(letter) {
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayResultsInMas(data);
        })
        .catch(error => {
            console.error('Error al buscar comida por letra:', error);
        });
}

function displayResultsInMas(data) {
    const mas = document.getElementById('mas');

    if (data.meals) {
        mas.innerHTML = '';mas.innerHTML = '';
        data.meals.forEach(meal => {
            const mealName = meal.strMeal;
            const mealImage = meal.strMealThumb;

            // Puedes construir la estructura HTML similar a la que ya tienes
            const mealElement = document.createElement('div');
            mealElement.className = 'con-galeri';
            mealElement.innerHTML = `
                <img src="${mealImage}" alt="${mealName}" class="img-galeri">
                <figcaption>${mealName}</figcaption>
            `;

            mas.appendChild(mealElement);
        });
    } else {
        alert('No se encontraron comidas con esa letra.');
    }
}

const randomButton = document.getElementById('random');
randomButton.addEventListener('click', getRandomMeal);

function getRandomMeal() {
    const apiUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayRandomMeal(data);
        })
        .catch(error => {
            console.error('Error al obtener comida aleatoria:', error);
        });
}

function displayRandomMeal(data) {
    const info = document.getElementById('info');
    info.innerHTML = '';

    if (data.meals) {
        const meal = data.meals[0];
        const mealName = meal.strMeal;
        const mealImage = meal.strMealThumb;
        const instructions = meal.strInstructions;

        const ingredients = [];
        for (let i = 1; i <= 20; i++) {
            const ingredientName = meal[`strIngredient${i}`];
            const ingredientMeasure = meal[`strMeasure${i}`];
            if (ingredientName && ingredientMeasure) {
                ingredients.push(`${ingredientMeasure} ${ingredientName}`);
            } else {
                break;
            }
        }

        info.innerHTML = `
            <img src="${mealImage}" alt="${mealName}" class="muestra">
            <div id="comida">
                <h3>${mealName}</h3>
                <hr>
                <div id="ingredientes">
                    <div>
                        <h4>Ingredientes:</h4>
                        <ul>
                            ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                        </ul>
                    </div>
                    <div id="instructios">
                        <h4>Instrucciones de preparación:</h4>
                        <p>${instructions}</p>
                    </div>
                </div>
            </div>
        `;
    } else {
        alert('No se encontró una comida aleatoria.');
    }
}
