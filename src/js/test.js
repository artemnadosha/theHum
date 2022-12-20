const dataGallery = [
    {
        size: 'medium',
        classSize: 'width-medium',
        image: './src/img/gallery/img-gallery-medium-1.jpg',
    },
    {
        size: 'large',
        classSize: 'width-large',
        image: './src/img/gallery/img-gallery-large-1.jpg',
    },
    [
        {
            dataId: '1'
        },
        {
            size: 'small',
            classSize: 'width-small',
            image: './src/img/gallery/img-gallery-medium-small-1.jpg',
        },
        {
            size: 'small',
            classSize: 'width-small',
            image: './src/img/gallery/img-gallery-medium-small-2.jpg',
        },
        {
            size: 'very small',
            classSize: 'width-very-small',
            image: './src/img/gallery/img-gallery-small-1.jpg',
        },
        {
            size: 'very small',
            classSize: 'width-very-small',
            image: './src/img/gallery/img-gallery-small-2.jpg',
        },
        {
            size: 'very small',
            classSize: 'width-very-small',
            image: './src/img/gallery/img-gallery-small-3.jpg',
        },
        {
            size: 'very small',
            classSize: 'width-very-small',
            image: './src/img/gallery/img-gallery-small-4.jpg',
        },
        {
            size: 'very small',
            classSize: 'width-very-small',
            image: './src/img/gallery/img-gallery-small-5.jpg',
        },
        {
            size: 'very small',
            classSize: 'width-very-small',
            image: './src/img/gallery/img-gallery-small-6.jpg',
        },
        {
            size: 'very small',
            classSize: 'width-very-small',
            image: './src/img/gallery/img-gallery-small-7.jpg',
        },
        {
            size: 'very small',
            classSize: 'width-very-small',
            image: './src/img/gallery/img-gallery-small-8.jpg',
        },
        {
            size: 'very small',
            classSize: 'width-very-small',
            image: './src/img/gallery/img-gallery-small-9.jpg',
        },
    ],
    {
        size: 'medium',
        classSize: 'width-medium',
        image: './src/img/gallery/img-gallery-medium-2.jpg',
    },
    {
        size: 'medium',
        classSize: 'width-medium',
        image: './src/img/gallery/img-gallery-medium-3.jpg',
    },
    {
        size: 'large',
        classSize: 'width-large',
        image: './src/img/gallery/img-gallery-large-2.jpg',
    },
    {
        size: 'medium',
        classSize: 'width-medium',
        image: './src/img/gallery/img-gallery-medium-4.jpg',
    },
    {
        size: 'medium',
        classSize: 'width-medium',
        image: './src/img/gallery/img-gallery-medium-5.jpg',
    },

];

const galleryContainerRender = document.querySelector('.gallery');
const generatedGalleryItem = (obj) =>
    `<div class="gallery-item ${obj.classSize}"><img src="${obj.image}" alt=""></div>`;

const generatedEmbeddedContainer = (obj) =>
    `<div class="gallery-item embedded-gallery" data-id="${obj.dataId}"></div>`;

const generatedGalleryEmbeddedItem = (obj) =>
    `<div class="embedded-item ${obj.classSize}"><img src="${obj.image}" alt=""></div>`;

dataGallery.forEach(el => {
    if(Array.isArray(el)) {
        const containerItems = generatedEmbeddedContainer(el[0]);
        galleryContainerRender.innerHTML += containerItems
        const embeddedContainer = document.querySelector(`[data-id='${el[0].dataId}']`);
        el.forEach(embEl => {
            if(embEl.classSize) {
                const itemEmbeddedGallery = generatedGalleryEmbeddedItem(embEl);
                embeddedContainer.innerHTML += itemEmbeddedGallery
            }
        })
    } else {
        const itemGallery = generatedGalleryItem(el);
        galleryContainerRender.innerHTML += itemGallery
    }
})

const grid = document.querySelector('.gallery');

const renderMasonry = new Masonry(grid, {
        itemSelector: '.gallery-item',
        columnWidth: 378,
        gutter: 13,

    })
