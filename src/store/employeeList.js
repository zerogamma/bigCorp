import { createAsyncThunk , createSlice } from '@reduxjs/toolkit'
import Api from '../api/api-functions'
import {addEmployee} from '../utils/function/Utils'
import _ from 'lodash'

export const fetchUserByMangerId = createAsyncThunk(
    'users/fetchUserByMangerId',
    async (managerId, thunkAPI) => {
      const stateObj = thunkAPI.getState().list;
      
      if (_.includes(stateObj.callHistory, managerId) || managerId === 'cleanUp')
        return {'oldState':stateObj.entities, 'response': 'useOldValue'}
      
      const response = !managerId ? await Api().default() : await Api().getManager(managerId);
      return {'oldState':stateObj.entities, 'response': response.map(r=> Object.assign({'children':[]},r)) }
    }
  )


  export const fetchByUserId = createAsyncThunk(
  'users/fetchByManagerId',
  async (managerId, thunkAPI) => {
    const request = managerId.replace(',','&id=');
    const response = !managerId || managerId === 'cleanUp' ? 
                        thunkAPI.getState().list.entities.length > 0 && managerId !== 'cleanUp' ? await Api().default() : [] 
                        : await Api().getByIds(request);
    
    return {'oldState':[], 'response': response.map(r=> Object.assign({'children':[]},r)) }
  }
)

const listSlice = createSlice({
    name: 'employeeList',
    initialState:  { entities: [] , callHistory: [] ,searchCall: false},
    reducers:{
    },
    extraReducers: {
      [fetchByUserId.fulfilled]:(state, action) => {
        state.entities = action.payload.response;
        state.callHistory = [];
        state.searchCall = true;
      },
      [fetchUserByMangerId.fulfilled]: (state, action) => {
        if(action.payload.response !== 'useOldValue'){
          let newState = [];
          action.meta.arg === "" ? newState = (action.payload.response) :  newState = _.cloneDeep([...action.payload.oldState]);
          
          newState.map( std => addEmployee(std,action.payload.response,action.meta.arg))
          state.entities = newState;
          state.callHistory.push(action.meta.arg)
          state.searchCall = false;
        }
      },
    }
})

export default listSlice.reducer