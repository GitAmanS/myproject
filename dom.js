var header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000';

var items = document.getElementsByClassName('list-group-item');

for(var i =0; i<items.length; i++){
    items[i].style.fontWeight = 'bold';
}
var additems = document.getElementsByClassName('title')[0];

additems.style.color = 'green';
additems.style.fontWeight = 'bold';

var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.color = 'green';

var allEl = document.querySelectorAll('.list-group-item');



var bytag = document.getElementsByTagName('li');

for(var i = 0; i<bytag.length; i++){
    bytag[i].style.border = '1px solid black';
}