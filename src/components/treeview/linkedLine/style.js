import styled from 'styled-components'
import { baseSvg } from '../../../utils/style/GlobalStyle'

const LineDiv = styled.div`
    width: 1px;
    background-color: black;
    position: relative;
`

export const VerticalDiv = styled(LineDiv)`
    height: 74px;
    bottom: 15px;
    right: 60px;
`
export const HorizontalDiv = styled(LineDiv)`
    height: 61px;
    right: 30px;
    bottom: 46px;
    transform: rotate(90deg);
    margin-bottom: -87px;
`

export const HorizontalDiv2 = styled(HorizontalDiv)`
    margin-bottom: -140px;
`

export const VerticalExtDiv = styled(LineDiv)`
    height: 125px;
    right: 60px;
    bottom: 29px;
    margin-bottom: -178px;
`

export const VerticalLine = styled(baseSvg)`
    height: 450px;
    position: absolute;
    width: 2px;
    margin-left: -60px;
`

