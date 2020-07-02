import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';

export const SchContainer = styled.div`
    text-align: center;
    margin-bottom: 25px;
`

export const SchBox = styled.input`
    width: 100px;
    border-radius: 5px;
    background-color: #8cbae9;
    text-align: center;
`

export const SchButtom = styled(SearchIcon)`
    position: absolute;
    margin-left: 5px;
`


// search: {
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: fade(theme.palette.common.white, 0.15),
//     '&:hover': {
//       backgroundColor: fade(theme.palette.common.white, 0.25),
//     },
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing(3),
//       width: 'auto',
//     },
//   },
//   searchIcon: {
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },