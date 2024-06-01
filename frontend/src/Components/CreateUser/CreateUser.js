import React, { useEffect, useState } from 'react'
import styles from './CreateUser.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { expanseActions } from '../../store/ExpanseSlice'
import { createUser } from '../../Actions/userAction'
const CreateUser = ({ header }) => {
	const [formValid, setFormValid] = useState(true)
	// const notification = useSelector(state => state.customer.notification)
	const [formSubmit, setFormSubmit] = useState(false)
	const dispatch = useDispatch()
	const [error, setHasError] = useState(false)
	// Initial state for inputs
	const initialInputsState = {
		name: { value: '', isValid: true },
		expansePermission: { value: 'no', isValid: true },
		expanseEditPermission: { value: 'no', isValid: true },
		expanseDeletePermission: { value: 'no', isValid: true },
		receiptPermission: { value: 'no', isValid: true },
		receiptEditPermission: { value: 'no', isValid: true },
		receiptDeletePermission: { value: 'no', isValid: true },
		advancePermission: { value: 'no', isValid: true },
		advanceEditPermission: { value: 'no', isValid: true },
		advanceDeletePermission: { value: 'no', isValid: true },
		loanPermission: { value: 'no', isValid: true },
		loanEditPermission: { value: 'no', isValid: true },
		loanDeletePermission: { value: 'no', isValid: true },
		pp: { value: 'no', isValid: true },
		epp: { value: 'no', isValid: true },
		cp: { value: 'no', isValid: true }
	}

	// State for inputs
	const [inputs, setInputs] = useState(initialInputsState)

	useEffect(() => {
		setFormValid(
			inputs.receiptPermission.isValid &&
				inputs.receiptEditPermission.isValid &&
				inputs.receiptDeletePermission.isValid &&
				inputs.expanseDeletePermission.isValid &&
				inputs.expanseEditPermission.isValid &&
				inputs.expansePermission.isValid &&
				inputs.advanceDeletePermission.isValid &&
				inputs.advanceEditPermission.isValid &&
				inputs.advancePermission.isValid &&
				inputs.loanDeletePermission.isValid &&
				inputs.loanEditPermission.isValid &&
				inputs.loanPermission.isValid &&
				inputs.cp.isValid &&
				inputs.pp.isValid &&
				inputs.epp.isValid &&
				inputs.name.isValid
		)

		return () => {}
	}, [inputs])

	const inputTextChangeHandler = (inputType, enteredValue) => {
		setInputs(currentInputValue => {
			return {
				...currentInputValue,
				[inputType]: { value: enteredValue, isValid: true }
			}
		})
	}
	// if (notification) {
	// 	setTimeout(function () {
	// 		window.location.reload()
	// 	}, 1000)
	// }
	const submitHandler = () => {
		const data = {
			name: inputs.name.value,
			expansePermission: inputs.expansePermission.value,
			expanseEditPermission: inputs.expanseEditPermission.value,
			expanseDeletePermission: inputs.expanseDeletePermission.value,
			receiptPermission: inputs.receiptPermission.value,
			receiptDeletePermission: inputs.receiptDeletePermission.value,
			receiptEditPermission: inputs.receiptEditPermission.value,
			advancePermission: inputs.advancePermission.value,
			advanceDeletePermission: inputs.advanceDeletePermission.value,
			advanceEditPermission: inputs.advanceEditPermission.value,
			loanPermission: inputs.loanPermission.value,
			loanDeletePermission: inputs.loanDeletePermission.value,
			cp: inputs.cp.value,
			pp: inputs.pp.value,
			epp: inputs.epp.value,
			loanEditPermission: inputs.loanEditPermission.value
		}

		const nameValid = data.name?.trim().length > 0
		// const phoneValid =
		// 	data.phone?.trim().length > 9 && data.phone?.trim().length <= 10

		if (!nameValid) {
			setInputs(currentInputs => {
				return {
					...currentInputs,
					name: { value: currentInputs.name.value, isValid: nameValid }
				}
			})
			console.log(data)
			return
		}

		dispatch(createUser(data))
		setFormSubmit(true)
		setInputs(initialInputsState)
	}
	return (
		<div className={`container ${styles.container} `}>
			<h2 class="row col-md-12 col-sm-6" className={styles.header}>
				{header}
			</h2>
			{!formValid && (
				<div className="row ">
					<p
						className="text-warning text-capitalize  "
						style={{ fontSize: '2vh' }}>
						Invalid Data Please check!
					</p>
				</div>
			)}

			{/* {notification && (
				<div className={styles.successContainer}>
					<p className={styles.successMessage}>Successfully sent!</p>
				</div>
			)} */}

			{/* {!notification && !formSubmit && (
				<div className={styles.successContainer}>
					<i class="fas fa-spinner fa-spin"></i>
				</div>
			)} */}

			<form class="form">
				{/* forms row start */}
				<div class="form-row row">
					<div class="form-group col-12 col-md-6 mb-2">
						<input
							type="text"
							class="form-control"
							placeholder="Name"
							id="name"
							value={inputs.name.value}
							onChange={e => inputTextChangeHandler('name', e.target.value)}
						/>
					</div>
				</div>
				<div class="form-row row">
					<div class="form-group col-12 col-md-6 mb-2">
						<select
							class="form-control"
							value={inputs.expansePermission.value}
							onChange={e =>
								inputTextChangeHandler('expansePermission', e.target.value)
							}
							id="inputGroupSelect01">
							<option selected value="no">
								Access Expenses denied...
							</option>
							<option value="yes">Yes</option>
							<option value="no">No</option>
						</select>
					</div>
					<div class="form-group col-12 col-md-6 mb-2">
						<select
							class="form-control"
							value={inputs.receiptPermission.value}
							onChange={e =>
								inputTextChangeHandler('receiptPermission', e.target.value)
							}
							id="inputGroupSelect01">
							<option selected value="no">
								Access Incomes denied...
							</option>
							<option value="yes">Yes</option>
							<option value="no">No</option>
						</select>
					</div>
				</div>
				<div class="form-row row">
					<div class="form-group col-12 col-md-6 mb-2">
						<select
							class="form-control"
							value={inputs.advancePermission.value}
							onChange={e =>
								inputTextChangeHandler('advancePermission', e.target.value)
							}
							id="inputGroupSelect01">
							<option selected value="no">
								Access advancePermission denied...
							</option>
							<option value="yes">Yes</option>
							<option value="no">No</option>
						</select>
					</div>
					<div class="form-group col-12 col-md-6 mb-2">
						<select
							class="form-control"
							value={inputs.loanPermission.value}
							onChange={e =>
								inputTextChangeHandler('loanPermission', e.target.value)
							}
							id="inputGroupSelect01">
							<option selected value="no">
								Access Loan denied...
							</option>
							<option value="yes">Yes</option>
							<option value="no">No</option>
						</select>
					</div>
				</div>
				<div class="form-row row">
					<div class="form-group col-12 col-md-6 mb-2">
						<select
							class="form-control"
							value={inputs.expanseEditPermission.value}
							onChange={e =>
								inputTextChangeHandler('expanseEditPermission', e.target.value)
							}
							id="inputGroupSelect01">
							<option selected value="no">
								Access Edit Expenses denied...
							</option>
							<option value="yes">Yes</option>
							<option value="no">No</option>
						</select>
					</div>
					<div class="form-group col-12 col-md-6 mb-2">
						<select
							class="form-control"
							value={inputs.receiptEditPermission.value}
							onChange={e =>
								inputTextChangeHandler('receiptEditPermission', e.target.value)
							}
							id="inputGroupSelect01">
							<option selected value="no">
								Access Edit Incomes denied...
							</option>
							<option value="yes">Yes</option>
							<option value="no">No</option>
						</select>
					</div>
				</div>
				<div class="form-row row">
					<div class="form-group col-12 col-md-6 mb-2">
						<select
							class="form-control"
							value={inputs.advanceEditPermission.value}
							onChange={e =>
								inputTextChangeHandler('advanceEditPermission', e.target.value)
							}
							id="inputGroupSelect01">
							<option selected value="no">
								Access Edit Advance denied...
							</option>
							<option value="yes">Yes</option>
							<option value="no">No</option>
						</select>
					</div>
					<div class="form-group col-12 col-md-6 mb-2">
						<select
							class="form-control"
							value={inputs.loanEditPermission.value}
							onChange={e =>
								inputTextChangeHandler('loanEditPermission', e.target.value)
							}
							id="inputGroupSelect01">
							<option selected value="no">
								Access Edit Loan denied...
							</option>
							<option value="yes">Yes</option>
							<option value="no">No</option>
						</select>
					</div>
				</div>
				<div class="form-row row">
					<div class="form-group col-12 col-md-6 mb-2">
						<select
							class="form-control"
							value={inputs.expanseDeletePermission.value}
							onChange={e =>
								inputTextChangeHandler(
									'expanseDeletePermission',
									e.target.value
								)
							}
							id="inputGroupSelect01">
							<option selected value="no">
								Access Delete Expense denied...
							</option>
							<option value="yes">Yes</option>
							<option value="no">No</option>
						</select>
					</div>
					<div class="form-group col-12 col-md-6 mb-2">
						<select
							class="form-control"
							value={inputs.receiptDeletePermission.value}
							onChange={e =>
								inputTextChangeHandler(
									'receiptDeletePermission',
									e.target.value
								)
							}
							id="inputGroupSelect01">
							<option selected value="no">
								Access Delete Receipt denied...
							</option>
							<option value="yes">Yes</option>
							<option value="no">No</option>
						</select>
					</div>
				</div>
				<div class="form-row row">
					<div class="form-group col-12 col-md-6 mb-2">
						<select
							class="form-control"
							value={inputs.advanceDeletePermission.value}
							onChange={e =>
								inputTextChangeHandler(
									'advanceDeletePermission',
									e.target.value
								)
							}
							id="inputGroupSelect01">
							<option selected value="no">
								Access Delete Advance denied...
							</option>
							<option value="yes">Yes</option>
							<option value="no">No</option>
						</select>
					</div>
					<div class="form-group col-12 col-md-6 mb-2">
						<select
							class="form-control"
							value={inputs.loanDeletePermission.value}
							onChange={e =>
								inputTextChangeHandler('loanDeletePermission', e.target.value)
							}
							id="inputGroupSelect01">
							<option selected value="no">
								Access Delete Loan denied...
							</option>
							<option value="yes">Yes</option>
							<option value="no">No</option>
						</select>
					</div>
				</div>
				<div class="form-row row">
					<div class="form-group col-12 col-md-6 mb-2">
						<select
							class="form-control"
							value={inputs.pp.value}
							onChange={e => inputTextChangeHandler('pp', e.target.value)}
							id="inputGroupSelect01">
							<option selected value="no">
								Print Permission denied...
							</option>
							<option value="yes">Yes</option>
							<option value="no">No</option>
						</select>
					</div>
					<div class="form-group col-12 col-md-6 mb-2">
						<select
							class="form-control"
							value={inputs.epp.value}
							onChange={e => inputTextChangeHandler('epp', e.target.value)}
							id="inputGroupSelect01">
							<option selected value="no">
								Export PDF Permission denied...
							</option>
							<option value="yes">Yes</option>
							<option value="no">No</option>
						</select>
					</div>
				</div>
				<div class="form-row row">
					<div class="form-group col-12 col-md-6 mb-2">
						<select
							class="form-control"
							value={inputs.cp.value}
							onChange={e => inputTextChangeHandler('cp', e.target.value)}
							id="inputGroupSelect01">
							<option selected value="no">
								Access Chart denied...
							</option>
							<option value="yes">Yes</option>
							<option value="no">No</option>
						</select>
					</div>
				</div>
				<div class="form-row row">
					<div class="col-md-2 col-sm-6 my-1">
						<div class="form-group">
							<button
								type="button"
								className="btn btn-primary "
								onClick={submitHandler}>
								Submit
							</button>
						</div>
					</div>
				</div>
				)
			</form>
		</div>
	)
}

export default CreateUser
