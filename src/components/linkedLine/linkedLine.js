import React from "react";
import {
    VerticalDiv,
    HorizontalDiv,
    HorizontalDiv2,
    VerticalExtDiv,
    VerticalLine,
} from './style'

const LinkedLine = (props) => {       

    const yValue = props.drawExtra ? props.childrenSize > 0 ?  250 : 0 : 0;
    const finaleValue = `M 0,0 L 0,${yValue}`
    return <>
            <VerticalDiv />
            { !props.removeLast ? <><HorizontalDiv /><VerticalExtDiv /><VerticalLine><path d={finaleValue} strokeDasharray= "10 5" strokeWidth="1" stroke="black" /></VerticalLine> </> : <HorizontalDiv2 />}
           </>
}

export default LinkedLine