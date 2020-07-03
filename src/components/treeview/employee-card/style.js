import styled from 'styled-components'
import MaterialCard from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export const Card = styled(MaterialCard)`
    display: grid;
    border: 1px solid;
    width: fit-content;
    padding: 8px;
    margin: 15px 0px;
    grid-template-columns: 10% 90%;
    *{
        pointer-events: none
    }
`

export const CrdText = styled(Typography)`
    font-style: italic;
    color:grey;

    span{
        color:black;
        font-weight: 500;
    }
`

export const CrdEmployeeInfo = styled.div`
    display: grid;
    grid-template-columns: 60% 40%;
    width: 340px;
`
export const CrdPrimaryData = styled.div``
export const CrdSecondaryData = styled.div``

export const CrdData = styled(CardContent)`
    margin-left: 5px;
`

export const CrdIcon = styled.div`
    margin: auto;
    padding-bottom: 12px;
    font-size: 35px;
    width:10px;
	&:after {
		${props => !props.active ? `content: "+";` : `content: "–";`}
  }
`

