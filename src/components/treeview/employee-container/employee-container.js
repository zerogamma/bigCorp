import React from "react";
import { useSelector } from 'react-redux'
import { 
    ELContainer,
} from './style'

import Employee from '../employee-list'

const List = (props) => {
    const listStore = useSelector( state => state.list.entities )
    const searchCall = useSelector( state => state.list.searchCall )
    
    return <ELContainer>
                <Employee searchCall={searchCall} data={listStore} action={props.search}/>                    
            </ELContainer>
}

export default List