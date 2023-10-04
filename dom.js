var header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000';

var items = document.getElementsByClassName('list-group-item');

for(var i =0; i<items.length; i++){
    items[i].style.fontWeight = 'bold';
}
var additems = document.getElementsByClassName('title')[0];

additems.style.color = 'green';
additems.style.fontWeight = 'bold';

var thirdItem = document.querySelector('.list-group-item:nth-child(2)');
thirdItem.style.color = 'green';





var allitems = document.querySelectorAll('li:nth-child(odd)');

for(var i =0;i<allitems.length; i++){
    allitems[i].style.backgroundColor  = 'green';
}

var itemList = document.querySelector('#items');
itemList.parentElement.style.backgroundColor = '#f4f4f4';

//childnode

console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';

console.log(itemList.firstChild);
console.log(itemList.firstElementChild);

itemList.firstElementChild.textContent = 'Hellow 1';

itemList.lastElementChild.textContent = 'hellow last';

console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);

console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';

var newDiv = document.createElement('div');
newDiv.className = 'hello';

newDiv.id = 'hello';

var newDivText = document.createTextNode('Hello');
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

container.insertBefore(newDivText, h1);

var li = document.querySelector('ul li')
itemList.insertBefore(newDivText,li);
