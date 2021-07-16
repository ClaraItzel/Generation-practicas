
window.onload=function(){
let nameInput=document.querySelector('#nameInput').value;


/* nameInput.addEventListener('keydown', function(){
    console.log(nameInput.value);
});
 */
let button= document.querySelector('#button');
button.addEventListener('click', event=>{

    let nameHeadeer= document.querySelector('#nameH');
    nameHeadeer.textContent= nameInput;
})
}
