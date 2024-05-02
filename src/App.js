//boton agregar lista

const toggleBtn= document.querySelector('#toggleBtn');
const divList = document.querySelector('.listHolder');


toggleBtn.addEventListener('click', () => {

    if (divList.style.display === 'none') {
        divList.style.display = 'block';
        toggleBtn.innerHTML = 'Hide List';

    }
    else {
        divList.style.display = 'none';
        toggleBtn.innerHTML ="Show List";
    }
});



//boton agregar

const addInput = document.querySelector('#addInput');
const addBtn = document.querySelector('#addBtn');

function addLists(){
if (addInput.value === ''){
    alert('ENTER INPUT TO PROCEED');
}
else{
    const ul =divList.querySelector('ul');
    const li = document.createElement('li');
    li.innerHTML = addInput.value;
    addInput.value = '';
    ul.appendChild(li);
    createBtn(li);

}}

addBtn.addEventListener('click', () => {
    addLists();
})



//boton borrar

const listUI =document.querySelector('.list');
const lis = listUI.children;

function createBtn(li){

    const remove = document.createElement('button');
    remove.className = 'btn-icon remove';
    li.appendChild(remove);


    return li;
}


for (var i = 0; i< lis.length; i++) {
    createBtn(lis[i]);
}




//para que funcionen los botones

divList.addEventListener('click', (event) => {

    if (event.target.tagName === 'BUTTON'){
        const button = event.target;
        const li = button.parentNode;
        const ul = li.parentNode;
    

    if (button.className === 'btn-icon remove'){
        ul.removeChild(li);
    }}
});



//el navbar


