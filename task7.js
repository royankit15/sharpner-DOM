var itemlist =document.querySelector('#items');
console.log(itemlist.parentNode);
itemlist.parentNode.style.backgroundColor ='#f4f4f4';
console.log(itemlist.parentNode.parentNode.parentNode);

//parent Element

var itemlist =document.querySelector('#items');
console.log(itemlist.parentElement);
itemlist.parentElement.style.backgroundColor ='#f4f4f4';
console.log(itemlist.parentElement.parentElement.parentElement);

// childNodes 
var itemlist =document.querySelector('#items');
console.log(itemlist.childNodes);

// children
console.log(itemlist.children);
console.log(itemlist.children[1]);
itemlist.children[1].style.backgroundColor='yellow';

// FirstChild
console.log(itemlist.firstChild);

// firstElementChild 

console.log(itemlist.firstElementChild);
itemlist.firstElementChild.textContent='hello 1';

// LastChild
console.log(itemlist.lastChild);

// LastElementChild 

console.log(itemlist.lastElementChild);
itemlist.lastElementChild.textContent='hello 1';

//nextsibling

console.log(itemlist.nextSibling);

//nextElementSibling

console.log(itemlist.nextElementSibling);

//previousSibling

console.log(itemlist.previousSibling);

//previousElementSiblings

console.log(itemlist.previousElementSibling);
itemlist.previousElementSibling.style.color= 'green';

// create Element

// create a div 
var newDiv= document.createElement('div');

//Add Class

newDiv.Classname='hello';

//Add id 
 
newDiv.id='hello1';

// Add attr

newDiv.setAttribute('title', 'Hello Div');

// Create text node

var newDivText = document.createTextNode('Hello World');

// Add text to div

newDiv.appendChild(newDivText);

console.log(newDiv);
