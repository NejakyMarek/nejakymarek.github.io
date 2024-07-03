let paragraphs = document.querySelectorAll('p');

paragraphs.forEach(function(oneSuspect){
    if (oneSuspect.textContent.toLocaleLowerCase().includes('koc')) {
        oneSuspect.remove();
    }
})