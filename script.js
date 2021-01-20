const icons = document.querySelectorAll('.section-1-icons i' )


// after 4 seconds the icon will be removed 
setInterval(() => {

    const icon = document.querySelectorAll('.section-1-icons change')

    icon.classList.remove('change')
    // icon.nextElementSibling.classList.add('change')

}, 1000)