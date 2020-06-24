import { createSlice } from '@reduxjs/toolkit'

const listSlice = createSlice({
    name: 'employeeList',
    initialState: [],
    reducers:{
        updateList: ( state, action ) => {
            return action.payload
        }
    }
})

export const { updateList } = listSlice.actions

export default listSlice.reducer