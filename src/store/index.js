import { configureStore } from '@reduxjs/toolkit'

import list from './profileList'

const store = configureStore({
    reducer: { list }
})

export default store