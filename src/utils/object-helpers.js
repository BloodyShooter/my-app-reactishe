export const updateObjectInArray = (items, itemId, propName, newObjProps) => {
    debugger;
    items.map(u => {
        if (u[propName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u;
    })
};