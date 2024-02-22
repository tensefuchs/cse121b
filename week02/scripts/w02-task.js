/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'Tense Fuchs';
let currentYear = '2024';
let profilePicture = 'images/gab-yan.jpg';


/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
let imageElement = document.querySelector('img');



/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
currentYear.textContent = `${year}`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', 'Profile Image of ${profilePicture}');





/* Step 5 - Array */

let favoriteFoods = ['Fried Rice', 'Tom Kha Gai', 'Tom Yum Gung', 'Schnitzel'];
foodElement.textContent = favoriteFoods.join(",");
foodElement.innerHTML = favoriteFoods.join(', ') + '<br>' + foodElement.innerHTML;
let singleFavoriteFoods = ('Hamburger');

favoriteFoods.push(singleFavoriteFoods);
foodElement.textContent = favoriteFoods.join(",");
foodElement.innerHTML = favoriteFoods.join(', ') + '<br>' + foodElement.innerHTML;


foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;