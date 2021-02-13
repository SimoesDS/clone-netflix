const carrouselElement = document.getElementById('owl-carousel');
const mainMovieElement = document.getElementsByClassName('filme-principal')[0];
const titleElement = document.getElementsByClassName('titulo')[0];
const synopisElement = document.getElementsByClassName('sinopse')[0];

const handlerMainMovie = ({ title, synopsis, imdb, genre, image}) => {
    mainMovieElement.style.backgroundImage = `url('${image}')`;
    titleElement.textContent = title;
    synopisElement.textContent = synopsis;
};

database.forEach(({ title, synopsis, imdb, genre, image}) => {
    const div = document.createElement('div')
    div.setAttribute('class', 'item');
    
    const img = document.createElement('img')
    img.setAttribute('src', image);
    img.addEventListener('click', () => {
        handlerMainMovie({ title, synopsis, imdb, genre, image});
    })
    
    div.appendChild(img);
    carrouselElement.appendChild(div);
});