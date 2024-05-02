let count = 1;
document.getElementById('radio1').checked = true;
setInterval(function () {
    nextImage() 
}, 5000)


function menuShow() {
    let menuMobile = document.querySelector('.mobile_menu');
    if (menuMobile.classList.contains('open')) { 
        menuMobile.classList.remove('open');
        document.querySelector('icon').src = '#';

    } else {
        menuMobile.classList.add('open');
        document.querySelector('icon').src = '#';
    }
}

function nextImage() {
    count++;
    if(count > 3){
        count = 1;
    }
    document.getElementById('radio' + count).checked= true;
}
function mostrar_texto() {
    
    if(radio.checked = true) {
       let  mostrar_texto = document.querySelector('style', 'display: block;')
    }
}