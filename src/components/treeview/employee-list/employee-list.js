import React , { useState } from "react";
import {
    EmpListItem,
    EmpItem,
    EmpList
} from './style'
import EmployeeCard from "../employee-card";
import LinkedLine from "../linkedLine";
import _ from 'lodash';


const List = (props) => {       
    const hasChildren = (employee) => {
        return employee.children && employee.children.length !== 0;
    } 
    
    const dataLen = props.data.length;

    const [activeButton, setActiveButton] = useState([])
    const [sameButton, setSameButtom] = useState(false)
    const [treeCall, setTreeCall] = useState(false)

    const innerCall = (func, typeCall) => {
        setActiveButton(func())
    }

    if (props.searchCall !== undefined)
        if(activeButton.length !== 0 && props.searchCall === true)
            innerCall(()=>[])

    return  props.data.map( (list, i)=> {
        const isInclude = _.includes(activeButton, list.id)
        return <EmpList key={list.id} >
                        {props.drawLine && <LinkedLine drawExtra={isInclude} childrenSize={list.children.length} removeLast={dataLen === i+1}/>}
                        <EmpListItem>
                            <EmpItem>
                                <EmployeeCard 
                                    reActive={sameButton} 
                                    active={activeButton} 
                                    reActionClick={setSameButtom} 
                                    actionClick={innerCall} 
                                    searchFunc={props.action} 
                                    data={list}/>
                                { (hasChildren(list) && isInclude) && <>
                                        <List data={list.children} action={props.action} drawLine={true}/>
                                </>}
                            </EmpItem>
                        </EmpListItem>
                    </EmpList>

    })
}

export default List