let count = 0;
const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(button){
    button.addEventListener('click', function(event){
        const styles = event.currentTarget.classList
        if (styles.contains('decrease')) {
            count--
        }else if (styles.contains('increase')) {
            count++
        }else if (styles.contains('decrease10')){
            count = count - 10
        }else if (styles.contains('increase10')){
            count = count + 10
        }else {
            count = 0
        }
        if (count > 0) {
            value.style.color = 'green';
        }
        if (count < 0) {
            value.style.color = 'red';
        }
        if (count === 0) {
            value.style.color = '#222'
        }
        value.textContent = count;
    });
})