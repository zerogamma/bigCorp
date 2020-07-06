import React, { useState, useEffect } from "react"
import { useDispatch } from 'react-redux'
import { fetchUserByMangerId , fetchByUserId } from '../store/employeeList'
import List from "../components/treeview/employee-container"
import MainContainer from "../components/common/mainContainer"
import SearchBar from '../components/common/search-bar'
import LoadingBar from '../components/common/loading-bar'

const Employee = () => {
    const dispatch = useDispatch()
    const [searchValue, setSearchValue] = useState('')
    const [searchBarValue, setSearchBarValue] = useState('')
    const [isLoading, setIsLoading] = useState(false)


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
            async function fetch(){
                dispatch(fetchByUserId(searchBarValue))
            }
            try {
                await Promise.all([fetch()]);
              } catch (err) {
                console.error(err);
              } finally {
                setIsLoading(false);
              }
        }
            
        setIsLoading(true);
        fetchDataForBar();
        return function cleanup(){
            setSearchBarValue('cleanUp');
        }
    },[dispatch,searchBarValue])

    useEffect( () => { 
        async function fetchData() {
            async function fetch(){
                dispatch(fetchUserByMangerId(searchValue));
            }
            try {
                await Promise.all([fetch()]);
              } catch (err) {
                console.error(err);
              } finally {
                setIsLoading(false);
              }
        }
        setIsLoading(true);
        fetchData();
        return function cleanup(){
            setSearchValue('cleanUp');
        }
    },[dispatch, searchValue])

   

    return <MainContainer>
                <SearchBar search={search} placeholder='User Id (MultiSearch e.g: 1,2,3)' />
                <LoadingBar isLoading={isLoading}/>
                <List search={search} /> 
            </MainContainer>
}

export default Employee;
  