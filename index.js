const menu = document.getElementById('menu');
const exit = document.getElementById('exit');
const direct = document.getElementById('direct');
const controller = document.getElementById('controller');

controller.addEventListener('click',(event)=>{
    event.preventDefault();
    if(exit.style.display === 'none'){
        menu.style.display = 'none';
        exit.style.display = 'block';
        direct.style.display = 'block';
    } else{
        exit.style.display = 'none';
        menu.style.display = 'block';
        direct.style.display = 'none';
    }
})