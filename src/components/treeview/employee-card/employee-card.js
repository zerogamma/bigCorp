import React from 'react';
import {
    Card,
    CrdText,
    CrdData,
    CrdEmployeeInfo,
    CrdPrimaryData,
    CrdSecondaryData,
    CrdAddIcon,
    CrdRemoveIcon
} from './style'
import _ from 'lodash'


const EmployeeCard = (props) => {

    const onClickFunc = () => {
        
        props.searchFunc(props.data.id , 'list');
        
        const included = _.includes(props.active, props.data.id)
        included ? props.actionClick( () => props.active.filter(item => item !== props.data.id) ) : props.actionClick( () => [...props.active, props.data.id] );
    }

    return <Card onClick={onClickFunc} >
                { _.includes(props.active, props.data.id) ? <CrdRemoveIcon /> : <CrdAddIcon />}
                <CrdData>
                    <CrdText>Id: <span>{props.data.id}</span></CrdText>
                    <CrdEmployeeInfo>
                        <CrdPrimaryData>
                            <CrdText>Name: <span>{props.data.first} {props.data.last}</span></CrdText>
                            <CrdText>Manager: <span>{props.data.manager === 0 ? 'Owner' : props.data.manager }</span></CrdText>
                        </CrdPrimaryData>
                        <CrdSecondaryData>
                            <CrdText>Department: <span>{props.data.department}</span></CrdText>
                            <CrdText>Office: <span>{props.data.office}</span></CrdText>
                        </CrdSecondaryData>
                    </CrdEmployeeInfo>
                </CrdData>
            </Card>
}

export default EmployeeCard