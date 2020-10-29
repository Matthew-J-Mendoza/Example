let button = document.getElementsByClassName("btn");
let changeMe = document.getElementById("changeMe");


// run through a loop and add an event listener

for(i = 0 ; i <button.length; i++){
    button[i].addEventListener('click', function(e){
        alert("You clicked on "+ e.target.innerText);
        //[this.remove();] how to remove elements
        changingText(e.target.innerText);
    });
}



function changingText(textToChange){
    switch(textToChange){
        case "Danger":
            changeMe.innerText = "Oh god"
            break;
    }

}