import React from "react";
import {
    HdContainer,
    TText
} from './style';


const Menu  = (props) => (
                <HdContainer>
                    <TText>{props.title}
                    </TText>
                </HdContainer>
            );

export default Menu;