let keys = document.getElementsByClassName('key')

document.addEventListener('keydown',function(event){
    let keyval = event.key
    var audio = new Audio('sounds/'+keyval+'key.mp3')
    audio.play()
    switch (keyval) {
        case 'a':
            keys[0].classList.add('aeff')
            break;
        case 's':
            keys[1].classList.add('seff')
            break;
        case 'd':
            keys[2].classList.add('deff')
            break;
        case 'f':
            keys[3].classList.add('feff')
            break;
        case 'j':
            keys[4].classList.add('jeff')
            break;  
        case 'k':
            keys[5].classList.add('keff')
            break;
        case 'l':
            keys[6].classList.add('leff')
            break;
        case ';':
            keys[7].classList.add('laseff')
            var audio1 = new Audio('sounds/las.mp3')
            audio1.play()
            break;
    }
})
document.addEventListener('keyup',function(event){
    let keyval = event.key
    switch (keyval) {
        case 'a':
            keys[0].classList.remove('aeff')
            break;
        case 's':
            keys[1].classList.remove('seff')
            break;
        case 'd':
            keys[2].classList.remove('deff')
            break;
        case 'f':
            keys[3].classList.remove('feff')
            break;
        case 'j':
            keys[4].classList.remove('jeff')
            break;  
        case 'k':
            keys[5].classList.remove('keff')
            break;
        case 'l':
            keys[6].classList.remove('leff')
            break;
        case ';':
            keys[7].classList.remove('laseff')
            break; 
    }
})