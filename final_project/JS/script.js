function addToFavorites(movie) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.includes(movie)) {
        favorites.push(movie);
        alert(`${movie} added to favorites!`);
    } else {
        favorites = favorites.filter(fav => fav !== movie);
        alert(`${movie} removed from favorites!`);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

window.onload = function() {
    let favoritesList = document.getElementById('favorites-list');
    if (favoritesList) {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        favorites.forEach(movie => {
            let li = document.createElement('li');
            li.textContent = movie;
            favoritesList.appendChild(li);
        });
    }
}
