document.addEventListener('DOMContentLoaded', function() {
    const favoriteSection = document.getElementById('favoriteSection');
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
 
    favorites.forEach(favorite => {
        let songElement = document.createElement('div');
        songElement.className = 'favorite-song';
        songElement.innerHTML = `<iframe src="${favorite}" width="100%" height="102" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
        favoriteSection.appendChild(songElement);
    });
});