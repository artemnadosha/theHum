export function scaleImage () {
    const iconScale = document.querySelectorAll('.icon-scale');
    const modalWrapperImage = document.querySelector('.modal-wrapper-image');
    const modalImage = document.querySelector('.modal-image');
    const iconExit = document.querySelector('.icon-exit');

    iconScale.forEach(elem => elem.addEventListener('click', (event) => {
        if(event.target) {
            modalWrapperImage.style.display = 'flex';
            modalImage.src = event.target.dataset.src;
        };
    }));

    iconExit.addEventListener('click', (event => {
        if(event.target) {
            modalWrapperImage.style.display = 'none';
        };
    }));
};