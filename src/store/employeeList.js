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


  export const fetchByManagerId = createAsyncThunk(
  'users/fetchByManagerId',
  async (managerId, thunkAPI) => {
    const request = managerId.replace(',','&id=');
    const response = !managerId ? await Api().default() : await Api().getByIds(request);
    return {'oldState':[], 'response': response.map(r=> Object.assign({'children':[]},r)) }
  }
)

const listSlice = createSlice({
    name: 'employeeList',
    initialState:  { entities: [] , callHistory: []},
    reducers:{
    },
    extraReducers: {
      [fetchByManagerId.fulfilled]:(state, action) => {
        state.entities = action.payload.response;
        state.callHistory = [];
      },
      [fetchUserByMangerId.fulfilled]: (state, action) => {
        if(action.payload.response !== 'useOldValue'){
          let newState = [];
          action.meta.arg === "" ? newState = (action.payload.response) :  newState = _.cloneDeep([...action.payload.oldState]);
          
          newState.map( std => addEmployee(std,action.payload.response,action.meta.arg))
          state.entities = newState;
          state.callHistory.push(action.meta.arg)
        }
      },
    }
})

export default listSlice.reducer