const button = document.querySelector('#changeColor');
const container = document.querySelector('#container');

button.addEventListener('click',function(evt){
    container.style.backgroundColor = makeRandomColor();
    evt.stopPropagation();//prevents the event from bubbling up any further
})
container.addEventListener('click', function(){
    container.classList.toggle('hide');
})

const makeRandomColor = ()=>{
     const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}


// till here if click on the div apart from the button, everything inside the div gets hidden
// if click on the button, background color changes and everything inside the div gets hidden
// the change is colour is not visible but can be inspected