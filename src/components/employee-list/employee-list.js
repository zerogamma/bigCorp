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

export default List