const buton = document.querySelector('.js-button');
console.log(buton.classList.contains('js-button'));

function changeButtonGaming() {
    const play = document.querySelector('.gaming-button');
 /*   if (play.innerText === 'Gaming') {
        play.innerHTML = 'Playing...';  
    }else{
        play.innerHTML = 'Gaming';
    }
*/
    if (!play.classList.contains('on-off-button-clicked')) {
        play.classList.add('on-off-button-clicked');
    }else{
        play.classList.remove('on-off-button-clicked');
    }
   
}
function changeButtonMusic() {
    const play = document.querySelector('.music-button');
/*    if (play.innerText === 'Music') {
        play.innerHTML = 'Playing...';  
    }else{
        play.innerHTML = 'Music';
    }
*/
    if (!play.classList.contains('on-off-button-clicked')) {
        play.classList.add('on-off-button-clicked');
    }else{
        play.classList.remove('on-off-button-clicked');
    }
   
}
function changeButtonTech() {
    const play = document.querySelector('.tech-button');
 /*   if (play.innerText === 'Tech') {
        play.innerHTML = 'Making...';  
    }else{
        play.innerHTML = 'Tech';
    }
*/
    if (!play.classList.contains('on-off-button-clicked')) {
        play.classList.add('on-off-button-clicked');
    }else{
        play.classList.remove('on-off-button-clicked');
    }

}

document.querySelectorAll(".on-off-button").forEach((answer) => {
    //getting .answer from HTML and adding a click function
    answer.addEventListener("click", (event) => {
        if (event.target.dataset) {
            document.querySelectorAll(".on-off-button").forEach(e => e.classList.remove('on-off-button-clicked'))
            answer.classList.add('on-off-button-clicked')
        }
        if (event.target.dataset.correct == "true") {
            correctAnswer++
        }
    });
});