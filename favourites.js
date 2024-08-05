const wrapper = document.querySelector('.wrapper');

document.addEventListener('DOMContentLoaded', addMovieToFavouritePage);

function addMovieToFavouritePage() {
    let favMovies = JSON.parse(localStorage.getItem('favMoviesArray')) || [];

    favMovies.forEach(movie => {
        let favItem = document.createElement('div');
        favItem.classList.add('fav-movie-item');

        favItem.innerHTML = `
        <div class="fav-movie-poster">
            <img src="${movie.poster}" alt="movie poster">
        </div>
        <div class="fav-movie-info">
            <h3>${movie.title}</h3>
        </div>
        `;

        wrapper.appendChild(favItem);
    });
}
