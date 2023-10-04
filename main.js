var forms = document.getElementById('form');
var items = document.getElementById('items');
var filter = document.getElementById('filter');

forms.addEventListener('submit', addItem);

items.addEventListener('click', removeItem);

filter.addEventListener('keyup', filterItems);

function addItem(e){
    e.preventDefault();
   

    var newElement = document.getElementById('item').value;
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newElement));
    var deleteBtn = document.createElement('button');

    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    items.appendChild(li);

}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            items.removeChild(li);
        }
    }
}

//filter Items
function filterItems(e){
    var text = e.target.value.toLowerCase();


    var ilist = items.getElementsByTagName('li');
  
    Array.from(ilist).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
}