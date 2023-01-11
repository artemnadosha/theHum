import {generatedServices} from "./components/generatedServices.js";
import {generatedWork} from "./components/generatedWork.js";
import {generatedNews} from "./components/generatedNews.js";
import {generatedUserInfo} from "./components/generatedUserInfo.js";
import {generatedGallery} from "./components/generatedGallery.js";

window.addEventListener('load', () => {
    generatedServices();
    generatedWork();
    generatedNews();
    generatedUserInfo();
    generatedGallery();
});