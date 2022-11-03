// Selecting Elements in the DOM

// document.getElementById('');
const title = document.getElementById('main-heading'); // you have to put this in some variable

console.log(title);

// getElementByClassName()
const listItem = document.getElementsByClassName('list-item');

console.log(listItem);

// getElementByTagName('');
const listItemByTag = document.getElementsByTagName('li');

console.log(listItemByTag);

// querySelector() 
// this is to select 'First' item in any id or class or tag
const containerQuerySel = document.querySelector('ul');

console.log(containerQuerySel);

// querySelectorAll()
// NodeList return karase, // @what is NodeList?@
const containerQuerySelAll = document.querySelectorAll('ul')

console.log(containerQuerySelAll);

