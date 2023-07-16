'use strict'

/*const resturant = {
    name:'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu : ['Focacia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu:{
            open: 12,
            close: 22,
        },
        fri:
        {
            open: 11,
            close: 23,
        },
        sat: {
            open : 0,
            close: 24,
        },
    },

    order : function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};

const {name, openingHours, categories} = resturant;
console.log(name, openingHours, categories);

const {name: restaurantName, openeingHours : hours, categories : tags} = resturant;
console.log(restaurantName, hours, tags);*/

const getCountryData = function(country) {
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(response => response.json())
    .then(data => console.log(data))
} 

getCountryData('portugal');


/*const header = document.querySelector('.header');

const message = document.createElement('div');
message.classList.add('cookie-message');

message.innerHTML = "We use cookied for imporved functionality and analytics, <button class='btnCloseCookie'> Got it!</button>";
header.prepend(message); //first child of header
header.append(message); //last child of header */
