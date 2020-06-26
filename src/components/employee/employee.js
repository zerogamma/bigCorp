import React from "react";
import {
    EmpListItem,
    EmpItem,
    EmpList
} from './style'

const List = (props) => {       
    const hasChildren = (employee) => {
        return employee.children && employee.children.length !== 0;
    } 

    return  props.data.map( list => {
           return <EmpList key={list.id} >
                        <EmpListItem>
                            <EmpItem onClick={props.action} id={list.id}>
                                {list.first} {list.last} - {list.manager}
                                { hasChildren(list) && <List data={list.children} action={props.action} />}
                            </EmpItem>
                        </EmpListItem>
                    </EmpList>

    })
}


// {list.children && 
//     <ELList> {
//         list.children.map( children =>     
//             <ELListItem key={children.id}>
//                     <ELItem onClick={action} id={children.id}>
//                         {children.first} {children.last} - {children.manager}
//                     </ELItem>
//             </ELListItem>)}
//     </ELList>}

export default List