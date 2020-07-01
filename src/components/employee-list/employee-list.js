import React from "react";
import { useSelector } from 'react-redux'
import { 
    ELContainer,
} from './style'

import Employee from '../employee'

const List = (props) => {
    const listStore = useSelector( state => state.list.entities )
    
    return <ELContainer>
                <Employee data={listStore} action={props.search}/>                    
            </ELContainer>
}

export default List