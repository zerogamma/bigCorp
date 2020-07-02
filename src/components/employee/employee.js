import React , { useState } from "react";
import {
    EmpListItem,
    EmpItem,
    EmpList
} from './style'
import EmployeeCard from "../employeeCard";
import LinkedLine from "../linkedLine";
import _ from 'lodash'

const List = (props) => {       
    const hasChildren = (employee) => {
        return employee.children && employee.children.length !== 0;
    } 
    const dataLen = props.data.length;
    
    const [activeButton, setActiveButton] = useState([])
    const [sameButton, setSameButtom] = useState(false)


    //_.includes(stateObj.callHistory, managerId)
    return  props.data.map( (list, i)=> {
        return <EmpList key={list.id} >
                        {props.drawLine && <LinkedLine removeLast={dataLen === i+1}/>}
                        <EmpListItem>
                            <EmpItem>
                                <EmployeeCard 
                                    reActive={sameButton} 
                                    active={activeButton} 
                                    reActionClick={setSameButtom} 
                                    actionClick={setActiveButton} 
                                    searchFunc={props.action} 
                                    data={list}/>
                                { (hasChildren(list) && _.includes(activeButton, list.id)) && <>
                                        <List data={list.children} action={props.action} drawLine={true}/>
                                </>}
                            </EmpItem>
                        </EmpListItem>
                    </EmpList>

    })
}

export default List