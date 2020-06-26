import React from "react";
import { useSelector } from 'react-redux'
import { 
    ELContainer,
} from './style'

import Employee from '../employee'

const List = (props) => {
    const listStore = useSelector( state => state.list.entities )
    const action = (event) => {
        props.search(event.target.id);
    };

    return <ELContainer>
                <Employee data={listStore} action={action}/>                    
            </ELContainer>
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