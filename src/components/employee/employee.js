import React , { useState } from "react";
import {
    EmpListItem,
    EmpItem,
    EmpList
} from './style'
import EmployeeCard from "../employeeCard";
import LinkedLine from "../linkedLine";

const List = (props) => {       
    const hasChildren = (employee) => {
        return employee.children && employee.children.length !== 0;
    } 
    const dataLen = props.data.length;
    
    const [activeButton, setActiveButton] = useState(0)
    const [sameButton, setSameButtom] = useState(false)

    return  props.data.map( (list, i)=> {
        return <EmpList key={list.id} >
                        {props.drawLine && <LinkedLine removeLast={dataLen === i+1}/>}
                        <EmpListItem>
                            <EmpItem>
                                <EmployeeCard withChildren={hasChildren(list)} reActive={sameButton} active={activeButton} reActionClick={setSameButtom} actionClick={setActiveButton} searchFunc={props.action} data={list}/>
                                { (hasChildren(list) && activeButton === list.id && sameButton === false) && <>
                                        <List data={list.children} action={props.action} drawLine={true}/>
                                </>}
                            </EmpItem>
                        </EmpListItem>
                    </EmpList>

    })
}

export default List