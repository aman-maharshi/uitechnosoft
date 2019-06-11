const modal = document.getElementsByClassName('modal')[0],
      cross = document.getElementById('cross');

cross.addEventListener('click', closeModalWindow)

modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        closeModalWindow();
    } 
})

function closeModalWindow() {
    document.getElementsByClassName('modal-content')[0].style.setProperty('animation-name', 'modalClose');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 750)
}

/*
    TODO: show model when page gets scrolled to bottom
*/