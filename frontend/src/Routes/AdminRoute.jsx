import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const AdminRoute = () => {
	const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
	const currentUser = useSelector(state => state.auth.user)

	return isAuthenticated && currentUser.isAdmin ? (
		<Outlet />
	) : (
		<Navigate to="/login" replace />
	)
}

export default AdminRoute
