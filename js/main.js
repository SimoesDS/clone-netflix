const carrouselElement = document.getElementById('owl-carousel');

for (const data of database) {
    const div = document.createElement('div')
    div.setAttribute('class', 'item');
    
    const img = document.createElement('img')
    img.setAttribute('src', data.image);
    
    div.appendChild(img);
    carrouselElement.appendChild(div);
}