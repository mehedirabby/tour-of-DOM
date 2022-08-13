const sections = document.querySelectorAll('section');

for(const section of sections){
    section.style.border = '2px solid lightCoral'
    section.style.margin = '5px'
    section.style.borderRadius = '15px'
    section.style.backgroundColor = 'lightGray'
}
// const placesContainer = document.getElementById('places-container');
// placesContainer.style.backgroundColor = 'lightYellow';

const placesContainer = document.getElementById('places-container');
placesContainer.classList.add('text-center')
placesContainer.classList.remove('large-text')