const router = require('express').Router()
const {
	CreateRequest,
	getRequest,
	getRequests,
	updateRequest,
	ToggleRequest,
	getActors
} = require('../Controllers/AccountRequestController')

const { admin, protect } = require('./../Middleware/authMiddlewate.js')

const multer = require('multer')

const upload = multer({ dest: 'uploads/' })

// add new request
router.post('/', upload.single('file'), protect, CreateRequest)

// gets
router.get('/', protect, getRequests)

// update
router.put('/:id', upload.single('file'), protect, updateRequest)

// ToggleDisable
router.put('/disable/:id', protect, ToggleRequest)

// get product
router.get('/:id', protect, getRequest)

module.exports = router
