import { userSlice } from './UserSlice'
import { authSlice } from './AuthSlice'

import { accountRequestSlice } from './AccountRequestSlice'
import { thunk } from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'
import { requestSlice } from './DataActivitySlice'
export const store = configureStore({
	reducer: {
		user: userSlice.reducer,

		auth: authSlice.reducer,
		accountRequest: accountRequestSlice.reducer,
		request: requestSlice.reducer
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk)
})
