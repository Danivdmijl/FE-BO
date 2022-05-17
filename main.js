let arrowButtons = document.getElementsByClassName("arrow");

for(let i = 0; i < arrowButtons.length; i++){
    arrowButtons[i].onclick = function(){
        console.log("Flikker amk sikterlan");
    }
}