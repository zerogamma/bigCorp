import React  from "react";
import {
    LdgIcon,
    LdgContainer
} from './style';



const LoadingBar = (props) => {
    return ( props.isLoading && <LdgContainer>
            <LdgIcon className="loader"></LdgIcon>
        </LdgContainer>
)}

export default LoadingBar;

