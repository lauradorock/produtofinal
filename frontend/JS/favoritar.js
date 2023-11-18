document.addEventListener('DOMContentLoaded', function() {

    const buttons = document.querySelectorAll('.add-to-favorites');

    buttons.forEach(button => {

        button.addEventListener('click', function(event) {

            let songInfo = this.previousElementSibling.src;

            addToFavorites(songInfo);

            alert('Song added to favorites!');

        });

    });

});
 
function addToFavorites(songInfo) {

    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    favorites.push(songInfo);

    localStorage.setItem('favorites', JSON.stringify(favorites));

}
