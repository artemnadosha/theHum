import {dataWork} from "../data/dataWork.js";
import {renderTabs} from "../tools/renderTabs.js";
import {clearsTabs} from "../tools/clearsTabs.js";
import {clearsTabsContent} from "../tools/clearsTabsContent.js";
import {workContainerRender} from "./variables.js";
import {workContainerControl} from "./variables.js";
import {workLoad} from "./variables.js";
import {wrapperButtonLoad} from "./variables.js";
import {loadAnimation} from "./variables.js";
import {generatedWorkItemAll} from "./generatedHtmlItem.js";
import {generatedWorkItem} from "./generatedHtmlItem.js";
import {generatedWorkItemContent} from "./generatedHtmlItem.js";

let countRow = 6;
export const generatedWork = () => {
    dataWork.forEach(item => {
        renderTabs(item, workContainerControl, 'All', generatedWorkItem);

        if (item.images) {
            item.images.forEach(el => {
                workContainerRender.innerHTML += generatedWorkItemAll(el, item);
            });
        }
        ;
    });

    const workNavItem = document.querySelectorAll('.work-nav-item');

    workNavItem.forEach(el => el.addEventListener('click', event => {
        clearsTabs(workNavItem, 'active');
        clearsTabsContent(workContainerRender);

        const itemWorkFilter = dataWork.filter(el => el.dataText === event.target.dataset.text)[0];

        if (event.target.dataset.text === 'All') {
            dataWork.forEach(item => {
                if (item.images) {
                    item.images.forEach(el => {
                        workContainerRender.innerHTML += generatedWorkItemAll(el, item);
                    })
                }
                ;
            });
        } else {
            itemWorkFilter.images.forEach(elem => {
                workContainerRender.innerHTML += generatedWorkItemContent(elem, event.target.dataset.text, event.target.textContent);
            });
        }
        ;

        countRow = 6;
        workContainerRender.style.gridTemplateRows = `repeat(3, 1fr)`;
        wrapperButtonLoad.style.display = 'flex';

        if (workContainerRender.children.length - 1 <= 12) {
            wrapperButtonLoad.style.display = 'none';
        }
        ;
    }));

    workLoad.addEventListener('click', () => {
        workLoad.style.display = 'none';
        loadAnimation.style.display = 'block';
        setTimeout(() => {
            loadAnimation.style.display = 'none';
            workLoad.style.display = 'flex';
            workContainerRender.style.gridTemplateRows = `repeat(${countRow}, 1fr`;
            if (countRow * 4 <= workContainerRender.children.length - 1) {
                countRow += 3;
            } else {
                wrapperButtonLoad.style.display = 'none';
            }
            ;
        }, 2000);
    });
};