import axios from 'axios'

const API = axios.create({
	baseURL: 'https://smartaccountbookv1.onrender.com/'
})

// const API = axios.create({ baseURL: 'https://account-back-4krv.onrender.com' })

// export const getUser = (userId) => API.get(`user/${userId}`);

export const createCustomer = formData => {
	const token = localStorage.getItem('token')

	if (!token) {
		return Promise.reject(new Error('Not Authenticated Please Login'))
	}
	API.post('/user/createUser', formData, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})
}
export const getCustomer = id => {
	const token = localStorage.getItem('token')

	if (!token) {
		return Promise.reject(new Error('Not Authenticated Please Login'))
	}
	API.get(`/user/${id}`, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})
}
export const deleteCustomer = id => {
	const token = localStorage.getItem('token')

	if (!token) {
		return Promise.reject(new Error('Not Authenticated Please Login'))
	}
	API.delete(`/user/${id}`, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})
}
export const getCustomers = () => {
	const token = localStorage.getItem('token')

	if (!token) {
		return Promise.reject(new Error('Not Authenticated Please Login'))
	}
	API.get('/user', {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})
}
export const getUserActivities = () => {
	const token = localStorage.getItem('token')

	if (!token) {
		return Promise.reject(new Error('Not Authenticated Please Login'))
	}
	API.get('/user/activities', {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})
}
export const updateCustomer = (id, formData) => {
	const token = localStorage.getItem('token')

	if (!token) {
		return Promise.reject(new Error('Not Authenticated Please Login'))
	}
	API.put(`/user/${id}`, formData, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})
}
export const resetPassword = id => {
	const token = localStorage.getItem('token')

	if (!token) {
		return Promise.reject(new Error('Not Authenticated Please Login'))
	}
	API.put(`/user/reset/${id}`, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})
}
export const updatePassword = (id, formData) => {
	const token = localStorage.getItem('token')

	if (!token) {
		return Promise.reject(new Error('Not Authenticated Please Login'))
	}
	API.put(`/user/updatePassword/${id}`, formData, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})
}
export const activateToggle = id => {
	const token = localStorage.getItem('token')

	if (!token) {
		return Promise.reject(new Error('Not Authenticated Please Login'))
	}
	API.put(`/user/activate/${id}`, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})
}
