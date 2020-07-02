import React from 'react';
import {
    Card,
    CrdName,
    CrdId,
    CrdManager,
    CrdIcon,
    CrdData,
} from './style'
import _ from 'lodash'


const EmployeeCard = (props) => {

    const onClickFunc = () => {
        const included = _.includes(props.active, props.data.id)

        included ? props.actionClick( () => props.active.filter(item => item !== props.data.id) ) : props.actionClick( () => [...props.active, props.data.id] );

        props.searchFunc(props.data.id);
    }

    return <Card onClick={onClickFunc} >
                <CrdIcon active={ _.includes(props.active, props.data.id)} />
                <CrdData>
                    <CrdId>Id: {props.data.id}</CrdId>
                    <CrdName>Name: {props.data.first} {props.data.last}</CrdName>
                    <CrdManager>Manager: {props.data.manager === 0 ? 'Owner' : props.data.manager }</CrdManager>
                </CrdData>
            </Card>
}

export default EmployeeCard