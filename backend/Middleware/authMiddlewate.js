const jwt = require('jsonwebtoken')
const UserModel = require('./../Models/UserModel')
const asyncHandler = require('./asyncHandler')

exports.protect = asyncHandler(async (req, res, next) => {
	let token

	//  read the jwt from cookie

	token = req.cookies.jwt

	console.log(req.cookies)
	if (token) {
		try {
			const decodeToken = jwt.verify(token, process.env.SECRET_KEY)

			req.user = await UserModel.findById(decodeToken.userId).select(
				'-password'
			)
			next()
		} catch (error) {
			res.status(401)
			throw new Error('Not authorized , token failed')
		}
	} else {
		res.status(401)
		throw new Error('Not authorized , no token')
	}
})

// admin middleware

exports.admin = (req, res, next) => {
	if (req.user && req.user.isAdmin) {
		next()
	} else {
		res.status(401)
		throw new Error('Not authorized as Admin')
	}
}
