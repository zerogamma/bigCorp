import styled from 'styled-components'
import treeImg from '../../../content/img/tree.jpg'

export const LayoutContainer = styled.div`
    position: relative;
    height: fit-content;
    background-image: linear-gradient( #ecedef 0%, #f9f9f9 51%, #FFFFFF 75%);
`
export const MainContent = styled.div`
    position: relative;
    margin: 35px 50px;
    min-height: 100%;
    height: 100%;
    display:grid;
    grid-template-columns: 70% 30%;
`

export const Content = styled.div``

export const ImgContent = styled.div`
    background-image: url(${treeImg});
    background-repeat: no-repeat;
    height: 645px;
    background-size: contain;
    background-position-y: center;
`
