// *********** Selecting Elements in the DOM *************//

// document.getElementById('');
const title = document.getElementById('main-heading'); // you have to put this in some variable

console.log(title);

// getElementByClassName('');
const listItem = document.getElementsByClassName('list-item');

console.log(listItem);

// getElementByTagName('');
const listItemByTag = document.getElementsByTagName('li');

console.log(listItemByTag);

// querySelector(''); 
// this is to select 'First' item in any id or class or tag
const containerQuerySel = document.querySelector('ul');

console.log(containerQuerySel);

// querySelectorAll()
// NodeList return karase, // @what is NodeList?@
const containerQuerySelAll = document.querySelectorAll('ul')

console.log(containerQuerySelAll);


// ********* Styling an Element ***************//

// first make it into variable of what we want to change, then variable-name.style.Propertu-that-we-want-to-change 
title.style.color = 'red';

const listItemByQuerySelAll = document.querySelectorAll('.list-item');
console.log(listItemByQuerySelAll);

//listItemByQuerySelAll.style.fontSize = '2rem'; // not working because it's try to apply INLINE style to all of them, we have to loop them to all list items

for(i = 0; i < listItemByQuerySelAll.length; i++) {
    listItemByQuerySelAll[i].style.fontSize = '1.5rem';
}


// ********** Creating Elements *************//

const CreatingElementsUl = document.querySelector('ul');
const CreatingElementsLi = document.createElement('li');

// adding elements use append()
CreatingElementsUl.append(CreatingElementsLi);

// modifying elements use 

const firstListItem = document.querySelector('.list-item');
console.log(firstListItem.innerText);
console.log(firstListItem.textContent);
console.log(firstListItem.innerHTML);

CreatingElementsLi.innerText = 'X-Men';