import {dataServices} from '../data/dataServices.js';
import {renderTabs} from "../tools/renderTabs.js";
import {clearsTabs} from "../tools/clearsTabs.js";
import {clearsTabsContent} from "../tools/clearsTabsContent.js";
import {servicesContainerRender} from "./variables.js";
import {servicesContainerControl} from "./variables.js";
import {generatedServicesItem} from "./generatedHtmlItem.js";
import {generatedServicesItemContent} from "./generatedHtmlItem.js";

export const generatedServices = () => {
    dataServices.forEach(item => {
        renderTabs(item, servicesContainerControl, 'web-design', generatedServicesItem);
        if(item.dataText === 'web-design'){
        servicesContainerRender.innerHTML = generatedServicesItemContent(item.dataText, item.textContent, item.images);
        };
    });

    const servicesItem = document.querySelectorAll('.services-item');

    servicesItem.forEach(el => el.addEventListener('click', event => {
        clearsTabs(servicesItem, 'active');
        clearsTabsContent(servicesContainerRender);

        const itemServicesFilter = dataServices.filter(el => el.dataText === event.target.dataset.text)[0];
        servicesContainerRender.innerHTML += generatedServicesItemContent(event.target.dataset.text, itemServicesFilter.textContent, itemServicesFilter.images);
    }));
};