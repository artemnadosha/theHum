const servicesList = document.querySelector('.services-list');
const servicesItems = servicesList.querySelectorAll('.services-item');
const servicesContentList = document.querySelector('.services-content-list');
const servicesContentItems = servicesContentList.querySelectorAll('.services-content-item');

servicesItems.forEach(el => el.addEventListener('click', e => {
    servicesItems.forEach(item => item.classList.remove('services-item-active'));
    e.target.classList.add('services-item-active');

    servicesContentItems.forEach(contentItem => {
        if(contentItem.dataset.text === e.target.dataset.text) {
            contentItem.classList.add('services-content-item-active')
        } else {
            contentItem.classList.remove('services-content-item-active')
        }
    })
}))





const wrapperBreakingNews = document.querySelector('.wrapper-breaking-news');
const newsList = wrapperBreakingNews.querySelector('.news-list');



const wrapperAboutUs = document.querySelector('.wrapper-about-us');
const aboutUsers = wrapperAboutUs.querySelector('.about-users');
const aboutUsersButton = wrapperAboutUs.querySelectorAll('.button-arrow');
const aboutUs = wrapperAboutUs.querySelector('.about-us');
const wrapperAboutName = wrapperAboutUs.querySelector('.wrapper-about-name');



const dataUsersInfo = [
    {
        userName: 'Hasan Ali',
        userWork: 'UX Designer',
        userImg: './src/img/review-people/people-1.jpg',
        userComment: 'Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.'
    },
    {
        userName: 'Hasan Ali',
        userWork: 'UX Designer',
        userImg: './src/img/review-people/people-2.jpg',
        userComment: 'Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.'
    },
    {
        userName: 'Hasan Ali',
        userWork: 'UX Designer',
        userImg: './src/img/review-people/people-3.png',
        userComment: 'Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.'
    },
    {
        userName: 'Hasan Ali',
        userWork: 'UX Designer',
        userImg: './src/img/review-people/people-4.jpg',
        userComment: 'Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.'
    }
];

const createAboutUser = (objUser) => {

}

aboutUsersInfo.forEach(e => {
    const userImg = document.createElement('img');
    userImg.classList.add('about-users-img')
    userImg.src = e.userImg
    aboutUsers.append(userImg)
})

const aboutUsersImg = wrapperAboutUs.querySelectorAll('.about-users-img');

let count = 0;

aboutUsersImg[count].classList.add('active')

// aboutUsersButton.forEach(el => el.addEventListener('click', e => {
//
//     aboutUsersImg.forEach(e => {
//         e.classList.remove('active')
//     })
//
//     if(e.currentTarget.dataset.name === 'right') {
//         count++
//         if (count > 3) {
//             count = 3
//         }
//         aboutUsersImg[count].classList.add('active')
//     }
//
//     if(e.currentTarget.dataset.name === 'left') {
//         count--
//         if (count < 0) {
//             count = 0
//         }
//         aboutUsersImg[count].classList.add('active')
//     }
// }))

