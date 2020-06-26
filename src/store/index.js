import { configureStore } from '@reduxjs/toolkit'

import list from './employeeList'

const store = configureStore({
    reducer: { list }
})

export default store