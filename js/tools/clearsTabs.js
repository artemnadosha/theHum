export const clearsTabs = (items, classActive) => {
    items.forEach(item => item.classList.remove(classActive));
    event.target.classList.add(classActive);
};


