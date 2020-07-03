import React, { useState, useEffect } from "react"
import { useDispatch } from 'react-redux'
import { fetchUserByMangerId , fetchByUserId } from '../store/employeeList'
import List from "../components/treeview/employee-container"
import MainContainer from "../components/common/mainContainer"
import SearchBar from '../components/common/search-bar'

const Employee = () => {
    const dispatch = useDispatch()
    const [searchValue, setSearchValue] = useState('')
    const [searchBarValue, setSearchBarValue] = useState('')

    const search = (value , type) => {
        switch(type){
            case 'list':
                setSearchValue(value);
                break;
            case 'bar':
                setSearchBarValue(value); 
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        async function fetchDataForBar() {
            dispatch(fetchByUserId(searchBarValue))
            }
            fetchDataForBar();
            return function cleanup(){
                setSearchBarValue('cleanUp') 
            }
    },[dispatch,searchBarValue])

    useEffect( () => { 
        async function fetchData() {
            dispatch(fetchUserByMangerId(searchValue))
        }
        fetchData();
        return function cleanup(){
            setSearchValue('cleanUp') 
        }
    },[dispatch, searchValue])

   

    return <MainContainer>
                <SearchBar search={search} placeholder='UsersId (MultiSearch e.g: 1,2,3)' />
                <List search={search} /> 
            </MainContainer>
}

export default Employee;
  