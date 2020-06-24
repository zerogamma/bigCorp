import React, { useState, useEffect } from "react"
// import SearchBar from "../components/search-bar/search-bar"
import MainContainer from "../components/mainContainer"
import Title from "../components/title"
import { useDispatch } from 'react-redux'
import { updateList } from '../store/employeeList'
import Api from '../api/api-functions'
// import List from "../components/movie-list/movie-list"


const Movie = () => {
    
    const api = Api()
    const dispatch = useDispatch()
    const [searchValue, setSearchValue] = useState('')

    const search = (value) => {
        setSearchValue(value)
    }

    useEffect( () => { 
        async function fetchData() {
        const movies = searchValue.length ? await api.search(searchValue) : await api.default()
        dispatch(updateList(movies))
        }
        fetchData();
    },[api, dispatch, searchValue])

    return <MainContainer>
            {/* <Title desc='Movie List'/>
            <SearchBar search={search}/>
            <List /> */}
        </MainContainer>
}

export default Movie;
  