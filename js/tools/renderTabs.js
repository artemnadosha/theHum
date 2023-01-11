export const renderTabs = (item, containerControl, defaultDataText, funGenerated) => {
    const isActive = item.dataText === defaultDataText;
    const html = funGenerated(isActive, item);
    containerControl.innerHTML += html;
};