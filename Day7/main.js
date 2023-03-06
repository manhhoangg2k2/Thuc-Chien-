var content = document.querySelector('.content');
var input = document.querySelector('.content input')
var removeAll = document.querySelector('.remove_all')

var tags=['Nodejs'];

function render(){
    content.innerHTML='';
    for(let i=0;i<tags.length;i++){
        const tag=tags[i];
        content.innerHTML+=`<li>
                                ${tag} 
                                <i class="fa-sharp fa-solid fa-xmark" onclick="removeTag(${i})"></i>
                            </li>`;
    }
    content.appendChild(input);
    input.focus();
}

render();

input.addEventListener('keydown', function(event){
    if(event.key=='Enter'){
        tags.push(input.value);
        render();
        input.value='';
    }
})

function removeTag(index){
    tags.splice(index,1);
    render();
}

removeAll.addEventListener('click', function(){
    tags=[];
    render();
})