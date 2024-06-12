import axios from 'axios'

const API = axios.create({
	baseURL: 'https://smartaccountbookv1.onrender.com/'
})
// const API = axios.create({ baseURL: 'https://account-back-4krv.onrender.com' })

// export const getUser = (userId) => API.get(`user/${userId}`);

export const getRequests = () => {
	const token = localStorage.getItem('token')

	if (!token) {
		return Promise.reject(new Error('Not Authenticated Please Login'))
	}
	API.get('/requests', {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})
}
export const resetData = formData => {
	const token = localStorage.getItem('token')

	if (!token) {
		return Promise.reject(new Error('Not Authenticated Please Login'))
	}
	API.post(`/requests/resetData`, formData, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})
}
