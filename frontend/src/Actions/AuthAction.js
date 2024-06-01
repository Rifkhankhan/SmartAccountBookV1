import { AccountRequestActions } from '../store/AccountRequestSlice'
import { authActions } from '../store/AuthSlice'
import { userActions } from '../store/UserSlice'

import * as AuthApi from './../Apis/AuthRequest'
import swal from 'sweetalert'

export const logIn = formData => async dispatch => {
	dispatch(authActions.handleLoading())
	try {
		const { data } = await AuthApi.logIn(formData)
		if (data.success) {
			dispatch(authActions.login(data))
		}
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

export const logout = () => async dispatch => {
	dispatch(authActions.handleLoading())
	try {
		const token = window.localStorage.getItem('token')

		if (!!token) {
			await AuthApi.logout(token)
			dispatch(authActions.logout())
		} else {
			dispatch(authActions.logout())
		}
	} catch (error) {
		console.log(error)
		if (error.response?.status === 400) {
			swal('Oops! Something Wrong', error.response?.data?.message, 'error')
		} else if (error.response?.status === 404) {
			swal("You don't have Account", error.response?.data?.message, 'error')
		} else if (error.response?.status === 409) {
			swal('Oops! Something Wrong', error.response?.data?.message, 'error')
		} else if (error.response?.status === 408) {
			swal('Oops! You have no access', error.response?.data?.message, 'error')
		} else if (error.response?.status === 500) {
			swal('Internal Server Error', error.response?.data?.message, 'error')
		}
	}
	dispatch(authActions.handleLoading())
}

export const logoutUserAccount = id => async dispatch => {
	dispatch(authActions.handleLoading())
	try {
		// const token = window.localStorage.getItem('token')

		const { data } = await AuthApi.logoutUserAccount(id)
		if (data.success) {
			dispatch(userActions.getUserActivities(data.product))
		}
	} catch (error) {
		console.log(error)
		if (error.response?.status === 400) {
			swal('Oops! Something Wrong', error.response?.data?.message, 'error')
		} else if (error.response?.status === 404) {
			swal("You don't have Account", error.response?.data?.message, 'error')
		} else if (error.response?.status === 409) {
			swal('Oops! Something Wrong', error.response?.data?.message, 'error')
		} else if (error.response?.status === 408) {
			swal('Oops! You have no access', error.response?.data?.message, 'error')
		} else if (error.response?.status === 500) {
			swal('Internal Server Error', error.response?.data?.message, 'error')
		}
	}
	dispatch(authActions.handleLoading())
}

export const autoLogin = () => async dispatch => {
	dispatch(authActions.handleLoading())
	try {
		const token = window.localStorage.getItem('token')
		if (!!token) {
			const { data } = await AuthApi.autoLogin(token)
			if (data.success) {
				dispatch(authActions.autoLogin(data))
			}
		} else {
			dispatch(authActions.autoLogin())
		}
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
		} else if (error.response?.status === 405) {
			dispatch(authActions.autoLogin())

			swal('Oops! Something Wrong', ' You are Logged Out!', 'info')
		}
	}
	dispatch(authActions.handleLoading())
}
