export const addEmployee = (listStore,employee,searchValue) => {
    if (!searchValue || searchValue === "")
        return employee || listStore;
    searchTree(listStore,Number(searchValue),employee);
    return listStore;
}

const searchTree = (element, matchingId, newChildren) => {
    if(element.id === matchingId){
         return Object.assign(element,{children:newChildren})
    }else if (element.children.length !== 0){
        let result = null;
        for(let i = 0; result == null && i < element.children.length; i++) {
            result = searchTree({...element.children[i]}, matchingId,newChildren);
        }
        return result ? element.children.map(r=> r.id === result.id ? r.children = result.children : '') : null;
    }
    return null;
}