//choose a random color
const button = document.getElementById("button");
const body = document.querySelector("body");
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];

button.addEventListener("click", function(){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    //color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}


/*

for (let i = 0; i < 198; i++) {

	let color = '#'+Math.floor(Math.random()*16777215).toString(16);
	
	output.innerHTML += `<div class="colors" style="background-color:` + color + `">` + color + `</div>`;

}
*/