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

        let newState = [];
        action.meta.arg === "" ? newState = (action.payload.response) :  newState = _.cloneDeep(...action.payload.oldState);
        
        addEmployee(newState,action.payload.response,action.meta.arg)

        state.entities = Array.isArray(newState) ? newState : [newState];
        debugger;
      }
    }
})

export default listSlice.reducer