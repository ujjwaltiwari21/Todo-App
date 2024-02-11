let input = document.getElementById('inp')
let task = document.querySelector('.text');

function Add(){
    if(input.value == ''){
        alert('Enter tour Task');
    }
    else{
        var  newEle = document.createElement('li');
        newEle.innerHTML = `${input.value}`;
        task.appendChild(newEle);
        input.value = '';
        
    }
}

function Del(){
    let del = document.querySelector('.text li:last-child');
    del.remove()
}