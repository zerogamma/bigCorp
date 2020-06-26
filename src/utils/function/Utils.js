export const addEmployee = (listStore,employee,searchValue) => {
    if (!searchValue || searchValue === "")
        return employee || listStore;
    return searchTree(listStore,Number(searchValue),employee);
}

const searchTree = (element, matchingId, newChildren) => {
    debugger;
    if(element.id === matchingId){
         return Object.assign(element,{children:newChildren})
    }else if (element.children != null){
         var i;
         var result = null;
         for(i=0; result == null && i < element.children.length; i++){
              result = searchTree({...element.children[i]}, matchingId,newChildren);
         }
         return element.children.map(r=> r.id === result.id ? r.children = result.children : '');
    }
    return null;
}