import { createAsyncThunk , createSlice } from '@reduxjs/toolkit'
import Api from '../api/api-functions'
import {addEmployee} from '../utils/function/Utils'
import _ from 'lodash'

export const fetchUserByMangerId = createAsyncThunk(
    'users/fetchUserByMangerId',
    async (managerId, thunkAPI) => {
      const response = managerId.length ? await Api().getManager(managerId) : await Api().default()
      return {'oldState':thunkAPI.getState().list.entities, 'response': response.map(r=> Object.assign({'children':[]},r)) }
    }
  )

const listSlice = createSlice({
    name: 'employeeList',
    initialState:  { entities: []},
    reducers:{
        
    },
    extraReducers: {
      [fetchUserByMangerId.fulfilled]: (state, action) => {
        if(action.meta.arg === "")
            state.entities = (action.payload.response)
        else {
            let clone = _.cloneDeep(...action.payload.oldState);//{...action.payload.oldState[0]};
            addEmployee(clone,action.payload.response,action.meta.arg)
            state.entities = [clone]
            debugger;
        }        
      }
    }
})

export default listSlice.reducer