import React from 'react';
import {
    Card,
    CrdText,
    CrdData,
    CrdEmployeeInfo,
    CrdPrimaryData,
    CrdSecondaryData,
    CrdAddIcon,
    CrdRemoveIcon,
    SpringCard
} from './style'
import _ from 'lodash'
import { useSpring } from 'react-spring'


const EmployeeCard = (props) => {

    const onClickFunc = () => {
        
        props.searchFunc(props.data.id , 'list');
        
        const included = _.includes(props.active, props.data.id)
        included ? props.actionClick( () => props.active.filter(item => item !== props.data.id) ) : props.actionClick( () => [...props.active, props.data.id] );
    }
    console.log('inner Height'+ window.innerHeight + ' inner widht ' +window.innerWidth)
    const calc = (x, y) => [-( window.innerHeight / 5) / 20, (x - window.innerWidth / 5) / 20, 0.9]
    const trans = (x, y, s) => `perspective(1200px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
    const [propsSpring, set] = useSpring(() => ({ xys: [0, 0, 1], config: 1, tension: 1000, friction: 1000  }))

    return <SpringCard  
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: propsSpring.xys.interpolate(trans) }}
            >
            <Card onClick={onClickFunc} >
                    { _.includes(props.active, props.data.id) ? <CrdRemoveIcon /> : <CrdAddIcon />}
                    <CrdData>
                        <CrdText>Id: <span>{props.data.id}</span></CrdText>
                        <CrdEmployeeInfo>
                            <CrdPrimaryData>
                                <CrdText>Name: <span>{props.data.first} {props.data.last}</span></CrdText>
                                <CrdText>Manager: <span>{props.data.manager === 0 ? 'Owner' : props.data.manager }</span></CrdText>
                            </CrdPrimaryData>
                            <CrdSecondaryData>
                                <CrdText>Department: <span>{props.data.department}</span></CrdText>
                                <CrdText>Office: <span>{props.data.office}</span></CrdText>
                            </CrdSecondaryData>
                        </CrdEmployeeInfo>
                    </CrdData>
                </Card>
        </SpringCard>
}

export default EmployeeCard