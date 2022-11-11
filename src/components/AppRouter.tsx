import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { routes } from '../routes/routes'

const AppRouter = () => {
	return (
		<Routes>
			<Route key={-1} path='/' element={<Navigate to='/avia' />} ></Route>
			{routes.map((route, index) => {
				return <Route key={index} path={route.path} element={route.element} ></Route>
			})}
		</Routes>
	)
}

export default AppRouter