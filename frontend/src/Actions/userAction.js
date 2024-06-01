/* eslint-disable no-unused-expressions */
// import swal from 'sweetalert'
import swal from 'sweetalert'
import * as UserApi from './../Apis/UserRequest'
import { authActions } from '../store/AuthSlice'

import { userActions } from './../store/UserSlice'

export const activateToggle = id => async dispatch => {
	dispatch(authActions.handleLoading())

	try {
		// dispatch(authUiActions.changeAsLoading())
		const { data } = await UserApi.activateToggle(id)
		if (data.success) {
			dispatch(userActions.activateToggle(id))
			swal('Successfully Update the state', 'Your Request completed', 'success')
		} else {
			swal('Oops! Something Wrong', 'Try again please!', 'error')
		}
	} catch (error) {
		console.log(error)

		if (error.response?.status === 400) {
			swal('Oops! Something Wrong', error.response.data.message, 'error')
		} else if (error.response?.status === 404) {
			swal("You don't have Account", error.response.data.message, 'error')
		} else if (error.response?.status === 409) {
			swal('Oops! Something Wrong', error.response.data.message, 'error')
		} else if (error.response?.status === 408) {
			swal('Oops! You have no access', error.response.data.message, 'error')
		} else if (error.response?.status === 500) {
			swal('Internal Server Error', error.response.data.message, 'error')
		}
	}
	dispatch(authActions.handleLoading())
}

export const createUser = formData => async dispatch => {
	dispatch(authActions.handleLoading())
	try {
		// dispatch(uiActions.changeAsLoading())
		const { data } = await UserApi.createCustomer(formData)
		if (data.success) {
			dispatch(userActions.createUser(formData))
		} else {
			swal('Oops! Something Wrong', 'Try again please!', 'error')
		}

		// dispatch(uiActions.changeAsLoading())
	} catch (error) {
		if (error.response?.status === 400) {
			swal('Oops! Something Wrong', error.response.data.message, 'error')
		} else if (error.response?.status === 404) {
			swal("You don't have Account", error.response.data.message, 'error')
		} else if (error.response?.status === 409) {
			swal('Oops! Something Wrong', error.response.data.message, 'error')
		} else if (error.response?.status === 408) {
			swal('Oops! You have no access', error.response.data.message, 'error')
		} else if (error.response?.status === 500) {
			swal('Internal Server Error', error.response.data.message, 'error')
		}
	}
	dispatch(authActions.handleLoading())
}

export const getUsers = () => async (dispatch, getState) => {
	dispatch(authActions.handleLoading())

	try {
		// dispatch(uiActions.changeAsLoading())
		const { data } = await UserApi.getCustomers()
		if (data.success) {
			dispatch(userActions.getUsers(data.data))
		} else {
			swal('Oops! Something Wrong', 'Try again please!', 'error')
		}
		// dispatch(uiActions.changeAsLoading())
	} catch (error) {
		if (error.response?.status === 400) {
			swal('Oops! Something Wrong', error.response.data.message, 'error')
		} else if (error.response?.status === 404) {
			swal("You don't have Account", error.response.data.message, 'error')
		} else if (error.response?.status === 409) {
			swal('Oops! Something Wrong', error.response.data.message, 'error')
		} else if (error.response?.status === 408) {
			swal('Oops! You have no access', error.response.data.message, 'error')
		} else if (error.response?.status === 500) {
			swal('Internal Server Error', error.response.data.message, 'error')
		}
	} finally {
		// Dispatch an action to handle loading state (assuming you have authActions.handleLoading())
		dispatch(authActions.handleLoading())
	}
}

export const getUserActivities = () => async (dispatch, getState) => {
	dispatch(authActions.handleLoading())

	try {
		// dispatch(uiActions.changeAsLoading())
		const { data } = await UserApi.getUserActivities()
		if (data.success) {
			console.log('====================================')
			console.log(data)
			console.log('====================================')
			dispatch(userActions.getUserActivities(data.product))
		} else {
			swal('Oops! Something Wrong', 'Try again please!', 'error')
		}
		// dispatch(uiActions.changeAsLoading())
	} catch (error) {
		if (error.response?.status === 400) {
			swal('Oops! Something Wrong', error.response.data.message, 'error')
		} else if (error.response?.status === 404) {
			swal("You don't have Account", error.response.data.message, 'error')
		} else if (error.response?.status === 409) {
			swal('Oops! Something Wrong', error.response.data.message, 'error')
		} else if (error.response?.status === 408) {
			swal('Oops! You have no access', error.response.data.message, 'error')
		} else if (error.response?.status === 500) {
			swal('Internal Server Error', error.response.data.message, 'error')
		}
	} finally {
		// Dispatch an action to handle loading state (assuming you have authActions.handleLoading())
		dispatch(authActions.handleLoading())
	}
}
export const getUser = id => async dispatch => {
	dispatch(authActions.handleLoading())
	try {
		const { data } = await UserApi.getCustomer(id)
	} catch (error) {
		console.log(error)

		if (error.response?.status === 400) {
			swal('Oops! Something Wrong', error.response.data.message, 'error')
		} else if (error.response?.status === 404) {
			swal("You don't have Account", error.response.data.message, 'error')
		} else if (error.response?.status === 409) {
			swal('Oops! Something Wrong', error.response.data.message, 'error')
		} else if (error.response?.status === 408) {
			swal('Oops! You have no access', error.response.data.message, 'error')
		} else if (error.response?.status === 500) {
			swal('Internal Server Error', error.response.data.message, 'error')
		}
	}
	dispatch(authActions.handleLoading())
}
export const updateUser = (id, formData) => async dispatch => {
	dispatch(authActions.handleLoading())

	try {
		const { data } = await UserApi.updateCustomer(id, formData)
		if (data.success) {
			dispatch(userActions.updateUser({ id, formData }))

			swal('Completed Your Request', 'Successfully Updated!', 'success')
		} else {
			swal('Oops! Something Wrong', 'Try again please!', 'error')
		}
	} catch (error) {
		console.log(error)

		if (error.response?.status === 400) {
			swal('Oops! Something Wrong', error.response.data.message, 'error')
		} else if (error.response?.status === 404) {
			swal("You don't have Account", error.response.data.message, 'error')
		} else if (error.response?.status === 409) {
			swal('Oops! Something Wrong', error.response.data.message, 'error')
		} else if (error.response?.status === 408) {
			swal('Oops! You have no access', error.response.data.message, 'error')
		} else if (error.response?.status === 500) {
			swal('Internal Server Error', error.response.data.message, 'error')
		}
	}
	dispatch(authActions.handleLoading())
}

export const resetPassword = id => async dispatch => {
	dispatch(authActions.handleLoading())
	try {
		const { data } = await UserApi.resetPassword(id)
		if (data.success) {
			swal('Successfully Reset Password', 'Successfully Reset Password')
		} else {
			swal('Oops! Something Wrong', 'Try again please!', 'error')
		}
	} catch (error) {
		console.log(error)

		if (error.response?.status === 400) {
			swal('Oops! Something Wrong', error.response.data.message, 'error')
		} else if (error.response?.status === 404) {
			swal("You don't have Account", error.response.data.message, 'error')
		} else if (error.response?.status === 409) {
			swal('Oops! Something Wrong', error.response.data.message, 'error')
		} else if (error.response?.status === 408) {
			swal('Oops! You have no access', error.response.data.message, 'error')
		} else if (error.response?.status === 500) {
			swal('Internal Server Error', error.response.data.message, 'error')
		}
	}
	dispatch(authActions.handleLoading())
}

export const updatePassword = (id, formData) => async dispatch => {
	dispatch(authActions.handleLoading())
	try {
		const { data } = await UserApi.updatePassword(id, formData)
		if (data.success) {
			swal('Successfully Update Password', 'Successfully Update Password')
		} else {
			swal('Oops! Something Wrong', 'Try again please!', 'error')
		}
	} catch (error) {
		console.log(error)

		if (error.response?.status === 400) {
			swal('Oops! Something Wrong', error.response.data.message, 'error')
		} else if (error.response?.status === 404) {
			swal("You don't have Account", error.response.data.message, 'error')
		} else if (error.response?.status === 409) {
			swal('Oops! Something Wrong', error.response.data.message, 'error')
		} else if (error.response?.status === 408) {
			swal('Oops! You have no access', error.response.data.message, 'error')
		} else if (error.response?.status === 500) {
			swal('Internal Server Error', error.response.data.message, 'error')
		}
	}
	dispatch(authActions.handleLoading())
}
