
//where to add
const placesList = document.getElementById('places-list')
//what to add
const li = document.createElement('li')
li.innerText = 'pahartoli bon'
//added child
placesList.appendChild(li)


const mainContainer = document.getElementById('main-container');



const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My food vlogs;';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'biriani';
ul.appendChild(li1)

const li2 = document.createElement('li');
li2.innerText = 'borhani';
ul.appendChild(li2)


const li3 = document.createElement('li');
li3.innerText = 'salad';
ul.appendChild(li3);
section.appendChild(ul)


mainContainer.appendChild(section)


//-----------------------------------------------------------------
const sectionAdress = document.createElement('section');
sectionAdress.innerHTML = `
            <h2>My dress collection</h2>
            <ul>
                <li>shirt</Li>
                <li>pant</Li>
                <li>t-shirt</Li>
            </ul>
        

`

mainContainer.appendChild(sectionAdress);