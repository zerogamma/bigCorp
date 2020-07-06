import styled from 'styled-components'
import MaterialCard from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

export const Card = styled(MaterialCard)`
    display: grid;
    border: 1px solid;
    width: fit-content;
    padding: 8px;
    margin: 15px 0px;
    grid-template-columns: 10% 90%;
    gap: 5px;
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
    width: 360px;
    padding-left: 10px;
    padding-top: 10px;
`
export const CrdPrimaryData = styled.div``
export const CrdSecondaryData = styled.div``

export const CrdData = styled(CardContent)`
    border-left: 1px solid;
`
export const CrdAddIcon = styled(AddCircleIcon)`
    margin: auto;
`

export const CrdRemoveIcon = styled(RemoveCircleIcon)`
    margin: auto;
`

