import axios from 'axios'
import swal from 'sweetalert'

const API = axios.create({
	baseURL: 'https://smartaccountbookv1.onrender.com/'
})
// const API = axios.create({ baseURL: 'https://account-back-4krv.onrender.com' })

export const logIn = formData => {
	const token = localStorage.getItem('token')

	if (!token) {
		return Promise.reject(new Error('Not Authenticated Please Login'))
	}

	API.post('/user/signin', formData)
}
export const logout = token => API.post(`/user/logout/${token}`)

export const logoutUserAccount = id => {
	const token = localStorage.getItem('token')

	if (!token) {
		return Promise.reject(new Error('Not Authenticated Please Login'))
	}

	API.put(`/user/logoutUserAccount/${id}`, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})
}
export const autoLogin = token => {
	if (!token) {
		swal('Authentication Error', 'Please Login', 'error')

		return Promise.reject(new Error('Not Authenticated Please Login'))
	}
	API.post(`/user/autoLogin/${token}`)
}
