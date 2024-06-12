import axios from 'axios'
import swal from 'sweetalert'

const API = axios.create({
	baseURL: 'https://smartaccountbookv1.onrender.com/',
	headers: {
		'Content-Type': 'application/json'
	}
})
// const API = axios.create({ baseURL: 'https://account-back-4krv.onrender.com' })

// export const getUser = (userId) => API.get(`user/${userId}`);

export const createAccountRequest = formData => {
	const token = localStorage.getItem('token')

	if (!token) {
		swal('Authentication Error', 'Please Login', 'error')
		return Promise.reject(new Error('Not Authenticated Please Login'))
	}

	API.post('/accountRequest', formData, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})
}
export const getAccountRequest = id => {
	const token = localStorage.getItem('token')

	if (!token) {
		swal('Authentication Error', 'Please Login', 'error')

		return Promise.reject(new Error('Not Authenticated Please Login'))
	}

	API.post(`/accountRequest/${id}`, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})
}
export const disableAccountRequest = formData => {
	const token = localStorage.getItem('token')

	if (!token) {
		swal('Authentication Error', 'Please Login', 'error')

		return Promise.reject(new Error('Not Authenticated Please Login'))
	}

	API.put(`/accountRequest/disable/${formData.arid}`, formData, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})
}

export const getAccountRequests = () => {
	const token = localStorage.getItem('token')

	if (!token) {
		swal('Authentication Error', 'Please Login', 'error')

		return Promise.reject(new Error('Not Authenticated Please Login'))
	}

	API.get('/accountRequest', {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})
}

export const updateAccountRequest = (id, formData) => {
	const token = localStorage.getItem('token')

	if (!token) {
		swal('Authentication Error', 'Please Login', 'error')

		return Promise.reject(new Error('Not Authenticated Please Login'))
	}
	API.put(`/accountRequest/${id}`, formData, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})
}
