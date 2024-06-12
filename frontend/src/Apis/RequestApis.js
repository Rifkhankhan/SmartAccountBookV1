import axios from 'axios'

const API = axios.create({
	baseURL: 'https://smartaccountbookv1.onrender.com/'
})
// const API = axios.create({ baseURL: 'https://account-back-4krv.onrender.com' })

// export const getUser = (userId) => API.get(`user/${userId}`);

export const getRequests = () => API.get('/requests')
export const resetData = formData => API.post(`/requests/resetData`, formData)
