import styled from 'styled-components'

const LineDiv = styled.div`
    width: 1px;
    background-color: black;
    position: relative;
`

export const VerticalDiv = styled(LineDiv)`
    height: 32px;
    bottom: 15px;
    right: 28px;
`
export const HorizontalDiv = styled(LineDiv)`
    height: 28px;
    right: 14px;
    bottom: 29px;
    transform: rotate(90deg);
    margin-bottom: -24px;
`

export const HorizontalDiv2 = styled(HorizontalDiv)`
    margin-bottom: -80px;
`

export const HorizontalExtDiv = styled(LineDiv)`
    height: 68px;
    right: 28px;
    bottom: 29px;
    margin-bottom: -116px;
`

