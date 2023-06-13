function addingEventListener() {
    const button= document.getElementById('button');
    function buttonClick() {
    alert('I was clicked!');
    }
    button.addEventListener('click', buttonClick);
}
addingEventListener();
