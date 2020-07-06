import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField'

export const SchContainer = styled.div`
    text-align: left;
    margin-bottom: 60px;
`

export const SchBox = styled(TextField)`
    width: 250px;
    border-radius: 5px;
    text-align: center;
`

export const SchButtom = styled(SearchIcon)`
    position: absolute;
    margin-left: 5px;
    margin-top: 5px;
`
