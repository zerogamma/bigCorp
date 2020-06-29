import React from "react";
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

    return  props.data.map( (list, i)=> {
           return <EmpList key={list.id} >
                        {props.drawLine && <LinkedLine removeLast={dataLen === i+1}/>}
                        <EmpListItem>
                            <EmpItem>
                                <EmployeeCard func={props.action} data={list}/>
                                { hasChildren(list) && <>
                                        <List data={list.children} action={props.action} drawLine={true}/>
                                </>}
                            </EmpItem>
                        </EmpListItem>
                    </EmpList>

    })
}

export default List