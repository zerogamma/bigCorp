import React from "react";
import { useSelector } from 'react-redux'
import { 
    ELContainer,
    ELList,
    ELListItem,
    ELItem
} from './style'

const List = (props) => {
    const listStore = useSelector( state => state.list.entities )
    const action = (event) => {
        props.search(event.target.id);
    };
    return <ELContainer>
                    <ELList>
                        {
                            listStore.map( list => {
                               return <ELListItem key={list.id}>
                                        <ELItem onClick={action} id={list.id}>
                                            {list.first} {list.last} - {list.manager}
                                            {list.children && <ELList> {
                                            list.children.map( children =>     
                                                <ELListItem key={children.id}>
                                                        <ELItem onClick={action} id={children.id}>
                                                            {children.first} {children.last} - {children.manager}
                                                        </ELItem>
                                                </ELListItem>
                                            )}
                                            </ELList>}
                                        </ELItem>
                                      </ELListItem>
                            })
                        }
                    </ELList>
    </ELContainer>
}

export default List