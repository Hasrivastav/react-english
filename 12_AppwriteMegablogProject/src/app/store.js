import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: StatusReducers,
  })

  export default store;