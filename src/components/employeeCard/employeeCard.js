import React from "react";
import {
    Card,
    CrdName,
    CrdId,
    CrdManager,
} from './style'

const card = (props) => {
           return <Card onClick={props.func} id={props.data.id}>
                    <CrdId>Id: {props.data.id}</CrdId>
                    <CrdName>Name: {props.data.first} {props.data.last}</CrdName>
                    <CrdManager>Manager: {props.data.manager === 0 ? 'Owner' : props.data.manager }</CrdManager>
                </Card>
}

export default card