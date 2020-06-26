import React, { useState, useEffect } from "react"
import MainContainer from "../components/mainContainer"
import { useDispatch } from 'react-redux'
import { fetchUserByMangerId } from '../store/employeeList'
import Api from '../api/api-functions'
import List from "../components/employee-list"

const Employee = () => {
    const api = Api()
    const dispatch = useDispatch()
    const [searchValue, setSearchValue] = useState('')

    const search = (value) => {
        setSearchValue(value)
    }

    useEffect( () => { 
        async function fetchData() {
        dispatch(fetchUserByMangerId(searchValue))
        }
        fetchData();
    },[api, dispatch, searchValue])

    return <MainContainer>
            <List search={search}/> 
        </MainContainer>
}

export default Employee;
  