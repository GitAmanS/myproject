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