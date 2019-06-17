const modal = document.getElementsByClassName('modal')[0],
      cross = document.getElementById('cross');

let showModal = false;
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

//  MAKING THE MODAL APPEAR AFTER 5 SECONDS OF PAGE LOAD
// setTimeout(()=> {
//     modal.style.display = 'block';
// }, 4000)

// MAKING THE MODAL APPEAR WHEN SCROLL REACHES FOOTER
document.addEventListener('scroll', function(){
    if(scrollY > 2290 && showModal === false) {
        showModal = true;
        modal.style.display = 'block';
    }
})
