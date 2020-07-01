import React from 'react';
import {
    Card,
    CrdName,
    CrdId,
    CrdManager,
    CrdIcon,
    CrdData,
} from './style'

const EmployeeCard = (props) => {

    const onClickFunc = () => {
        if(props.active === props.data.id)
            props.reActionClick(!props.reActive);
        else if(props.active !== props.data.id && props.reActive === true)
            props.reActionClick(!props.reActive);
        
        props.actionClick(props.data.id);
        props.searchFunc(props.data.id);
        }
    
    const switchIcon = props.active !== props.data.id ? false : (props.active === props.data.id && props.reActive ) ? false :  (props.active === props.data.id || props.reActive)

    return <Card onClick={onClickFunc} >
                <CrdIcon active={switchIcon} />
                <CrdData>
                    <CrdId>Id: {props.data.id}</CrdId>
                    <CrdName>Name: {props.data.first} {props.data.last}</CrdName>
                    <CrdManager>Manager: {props.data.manager === 0 ? 'Owner' : props.data.manager }</CrdManager>
                </CrdData>
            </Card>
}

export default EmployeeCard