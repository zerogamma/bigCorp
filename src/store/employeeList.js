import { createAsyncThunk , createSlice } from '@reduxjs/toolkit'
import Api from '../api/api-functions'
import {addEmployee} from '../utils/function/Utils'
import _ from 'lodash'

export const fetchUserByMangerId = createAsyncThunk(
    'users/fetchUserByMangerId',
    async (managerId, thunkAPI) => {
      const stateObj = thunkAPI.getState().list;
      
      if (_.includes(stateObj.callHistory, managerId))
        return {'oldState':stateObj.entities, 'response': 'useOldValue'}
      
      const response = !managerId ? await Api().default() : await Api().getManager(managerId);
      return {'oldState':stateObj.entities, 'response': response.map(r=> Object.assign({'children':[]},r)) }
    }
  )

const listSlice = createSlice({
    name: 'employeeList',
    initialState:  { entities: [] , callHistory: []},
    reducers:{
    },
    extraReducers: {
      [fetchUserByMangerId.fulfilled]: (state, action) => {

        if(action.payload.response !== 'useOldValue'){
          let newState = [];
          action.meta.arg === "" ? newState = (action.payload.response) :  newState = _.cloneDeep(...action.payload.oldState);
          
          addEmployee(newState,action.payload.response,action.meta.arg)

          state.entities = Array.isArray(newState) ? newState : [newState];
          state.callHistory.push(action.meta.arg)
        }
      }
    }
})

export default listSlice.reducer