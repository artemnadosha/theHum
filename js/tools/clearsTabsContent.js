export const clearsTabsContent = (containerTabsItem) => {
    const ItemAll = containerTabsItem.querySelectorAll('*');
    ItemAll.forEach(e => e.remove());
};