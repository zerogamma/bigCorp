import styled from 'styled-components'

export const Card = styled.div`
    display: grid;
    border: 1px solid;
    width: 20%;
    padding: 8px;
    margin: 15px 0px;
    grid-template-columns: 10% 90%;
    *{
        pointer-events: none
    }
`
export const CrdName = styled.div``
export const CrdId = styled.div``
export const CrdManager = styled.div``
export const CrdData = styled.div`
    margin-left: 5px;
`

export const CrdIcon = styled.div`
    margin: auto;
    padding-bottom: 12px;
    font-size: 35px;
	&:after {
		${props => !props.active ? `content: "+";` : `content: "–";`}
  }
`

