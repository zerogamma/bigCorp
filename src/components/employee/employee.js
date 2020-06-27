import React from "react";
import {
    EmpListItem,
    EmpItem,
    EmpList
} from './style'
import EmployeeCard from "../employeeCard";

const List = (props) => {       
    const hasChildren = (employee) => {
        return employee.children && employee.children.length !== 0;
    } 

    return  props.data.map( list => {
           return <EmpList key={list.id} >
                        <EmpListItem>
                            <EmpItem>
                                <EmployeeCard func={props.action} data={list}/>
                                { hasChildren(list) && <List data={list.children} action={props.action} />}
                            </EmpItem>
                        </EmpListItem>
                    </EmpList>

    })
}

export default List