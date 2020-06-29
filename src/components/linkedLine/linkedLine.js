import React from "react";
import {
    VerticalDiv,
    HorizontalDiv,
    HorizontalDiv2,
    HorizontalExtDiv,
} from './style'

const LinkedLine = (props) => {       
    return <>
            <VerticalDiv />
            { !props.removeLast ? <><HorizontalDiv /><HorizontalExtDiv /></> : <HorizontalDiv2 />}
           </>
}

export default LinkedLine