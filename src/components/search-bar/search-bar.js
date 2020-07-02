import React , { useRef } from "react";
import {
    SchBox,
    SchButtom,
    SchContainer
} from './style';

const SearchBar = (props) => {
    const inputValueRef = useRef(null);

    const action = () => (props.search(inputValueRef.current.value))
    const handleKeyPress = (target) => {
       if (target.charCode === 13)
            action();
    }

    return (
    <SchContainer>
        <SchBox  ref={inputValueRef} onKeyPress={handleKeyPress} placeholder="Manager ID"/>
        <SchButtom onClick={ action }>Search</SchButtom>
    </SchContainer>
)}

export default SearchBar;