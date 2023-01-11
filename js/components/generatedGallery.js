import {dataGallery} from "../data/dataGallery.js";
import {galleryLoad} from "./variables.js";
import {galleryContainerRender} from "./variables.js";
import {loadAnimationTwo} from "./variables.js";
import {generatedEmbeddedContainer} from "./generatedHtmlItem.js";
import {generatedGalleryEmbeddedItem} from "./generatedHtmlItem.js";
import {generatedGalleryItem} from "./generatedHtmlItem.js";
import {scaleImage} from "../tools/scaleImage.js";


const renderGallery = (countGallery) => {

    if(countGallery >= dataGallery.length - 1) {
        countGallery = dataGallery.length - 1;
        galleryLoad.style.display = 'none';
    }

    for (let i = 0; i <= countGallery; i++) {
        if(Array.isArray(dataGallery[i])) {
            const containerItems = generatedEmbeddedContainer(dataGallery[i][0]);
            galleryContainerRender.innerHTML += containerItems;
            const embeddedContainer = document.querySelector(`[data-gallery='${dataGallery[i][0].dataId}']`);
            dataGallery[i].forEach(embEl => {
                if(embEl.classSize) {
                    const itemEmbeddedGallery = generatedGalleryEmbeddedItem(embEl);
                    embeddedContainer.innerHTML += itemEmbeddedGallery;
                };
            });
        } else {
            const itemGallery = generatedGalleryItem(dataGallery[i]);
            galleryContainerRender.innerHTML += itemGallery;
        };
    };

    const containerMasonry = document.querySelector('.gallery');

    const renderMasonry = new Masonry(containerMasonry, {
        itemSelector: '.gallery-item',
        columnWidth: 378,
        gutter: 13,
    });

    scaleImage();
};


let countGallery = 7;

export const generatedGallery = () => {
    renderGallery(countGallery);

    galleryLoad.addEventListener('click', () => {
        galleryLoad.style.display = 'none';
        loadAnimationTwo.style.display = 'block';

        setTimeout(() => {
            loadAnimationTwo.style.display = 'none';
            countGallery += 8;
            galleryLoad.style.display = 'flex';

            const ItemAll = galleryContainerRender.querySelectorAll('*');
            ItemAll.forEach(e => e.remove());
            renderGallery(countGallery);
        },2000);
    });
};



