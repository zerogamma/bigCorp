import React , { useRef } from "react";
import {
    SchBox,
    SchButtom,
    SchContainer
} from './style';


const SearchBar = (props) => {
    const inputValueRef = useRef(null);

    const action = () => (props.search(inputValueRef.current.value, 'bar'))
    const handleKeyPress = (target) => {
       if (target.charCode === 13)
            action();
    }

    return (
    <SchContainer>
        <SchBox  inputRef={inputValueRef} onKeyPress={handleKeyPress} placeholder={props.placeholder} />
        <SchButtom onClick={ action }>Search</SchButtom>
    </SchContainer>
)}

export default SearchBar;

