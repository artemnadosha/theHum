import {dataNews} from "../data/dataNews.js";
import {newsContainerRender} from './variables.js';
import {generatedNewsItem} from "./generatedHtmlItem.js";
export const generatedNews = () => dataNews.forEach(e => newsContainerRender.innerHTML += generatedNewsItem(e));