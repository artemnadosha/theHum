import {dataUsersInfo} from "../data/dataUsersInfo.js";
import {renderTabs} from "../tools/renderTabs.js";
import {clearsTabsContent} from "../tools/clearsTabsContent.js";
import {aboutContainerRender} from "./variables.js";
import {aboutContainerControl} from "./variables.js";
import {aboutContainerUsersControl} from "./variables.js";
import {generatedAboutUsItem} from "./generatedHtmlItem.js";
import {generatedAboutUsers} from "./generatedHtmlItem.js";

let countButton = 0;
export const generatedUserInfo = () => {
    dataUsersInfo.forEach(item => {
        renderTabs(item, aboutContainerControl, 'userOne', generatedAboutUsers);
        if (item.dataText === 'userOne') {
            aboutContainerRender.innerHTML = generatedAboutUsItem(item);
        }
        ;
    });

    const aboutUsersItem = document.querySelectorAll('.about-users-img');

    aboutContainerUsersControl.addEventListener('click', event => {
        if (event.target.className !== 'about-users' && event.target.className !== 'wrapper-about-users') {
            aboutUsersItem.forEach(el => el.classList.remove('active'));
            clearsTabsContent(aboutContainerRender);
        }
        ;

        if (event.target.dataset.button === 'button') {
            if (event.target.dataset.name === 'right') {
                countButton++;
                if (countButton > 3) {
                    countButton = 0;
                }
                ;
                aboutContainerRender.innerHTML = generatedAboutUsItem(dataUsersInfo[countButton]);
                aboutContainerControl.children[countButton].classList.add('active');
            } else {
                countButton--;
                if (countButton < 0) {
                    countButton = 3;
                }
                ;
                aboutContainerRender.innerHTML = generatedAboutUsItem(dataUsersInfo[countButton]);
                aboutContainerControl.children[countButton].classList.add('active');
            }
            ;
        }
        ;

        if (event.target.dataset.id) {
            countButton = event.target.dataset.id;
            aboutContainerRender.innerHTML += generatedAboutUsItem(dataUsersInfo[countButton]);
            aboutContainerControl.children[countButton].classList.add('active');
        };
    });
};