import { configureStore, combineReducers } from "@reduxjs/toolkit"
import favoriteReducer from "./favorite/favorite.slice"
import { rootReducer } from "./root-reducer"
import { userApi } from "./user/user.api"
import { adminApi } from "./admin/admin.api"
import { categoryApi } from "./category/category.api"

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
    }).concat(
      userApi.middleware,
      adminApi.middleware,
      categoryApi.middleware

    ),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
