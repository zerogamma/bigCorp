import React, { useState, useEffect } from "react"
import MainContainer from "../components/mainContainer"
import { useDispatch } from 'react-redux'
import { fetchUserByMangerId , fetchByManagerId } from '../store/employeeList'
import List from "../components/employee-list"
import SearchBar from '../components/search-bar'

const Employee = () => {
    const dispatch = useDispatch()
    const [searchValue, setSearchValue] = useState('')
    const [searchBarValue, setSearchBarValue] = useState('')

    const search = (value) => {
        setSearchValue(value)
    }

    const searchBar = (value) => {
        setSearchBarValue(value)
    }

    useEffect(() => {
        async function fetchDataForBar() {
            dispatch(fetchByManagerId(searchBarValue))
            }
            fetchDataForBar();
    },[dispatch,searchBarValue])

    useEffect( () => { 
        async function fetchData() {
        dispatch(fetchUserByMangerId(searchValue))
        }
        fetchData();
    },[dispatch, searchValue])

   

    return <MainContainer>
                <SearchBar search={searchBar}/>
                <List search={search}/> 
            </MainContainer>
}

export default Employee;
  