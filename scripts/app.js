const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const movieData = document.querySelector('.userInputData');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favouriteMovieTitle');
const movieDataToDisplay = document.querySelector('.favouriteMovieData');

let titleInStorage = localStorage.getItem('title');
let imageUrlInStorage = localStorage.getItem('imageUrl');
let dataInStorage = localStorage.getItem('data')

if(titleInStorage && imageUrlInStorage && dataInStorage) {
    movieTitleToDisplay.textContent = titleInStorage;
    movieDataToDisplay.textContent = dataInStorage;
    container.style.backgroundImage = `url('${imageUrlInStorage}')`;
}



btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = moviePosterUrl.value;
    let dataInput = movieData.value;
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('imageUrl', posterUrlInput);
    localStorage.setItem('data', dataInput);
    movieTitleToDisplay.textContent = movieTitleInput;
    container.style.backgroundImage = `linear-gradient(rgba(98, 98, 152, 0.877), rgba(146, 103, 145, 0.866)),
    url('${posterUrlInput}')`;
    movieDataToDisplay.textContent = dataInput;
    movieTitle.value = '';
    moviePosterUrl.value = '';
    movieData.value = '';
});