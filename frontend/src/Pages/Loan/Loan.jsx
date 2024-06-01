import React, { useLayoutEffect, useState } from 'react'
import styles from './Loan.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBill, faSackDollar } from '@fortawesome/free-solid-svg-icons'

import LoanForm from '../../Components/Loan/LoanForm'
import PaginationTable from '../../Components/PaginationTable/PaginationTable'
import { useDispatch, useSelector } from 'react-redux'
import { deleteReceipt, getReceipts } from '../../Actions/ReceiptActions'
import ReceiptModel from '../../Components/ReceiptModel/ReceiptModel'
import { getLoans } from '../../Actions/LoanActions'
import LoanModel from '../../Components/LoanModel/LoanModel'
import { deleteAccountRequest } from '../../Actions/AccountRequestActions'
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner'
const Loan = () => {
	const currentUser = useSelector(state => state.auth.user)
	const isLoading = useSelector(state => state.accountRequest.isLoading)

	const loans = useSelector(state => state.accountRequest.accountRequests)
		?.filter(expanse => expanse.requestType === 'loan')
		?.filter(request => request.status === 1)

	const TableLoan = useSelector(
		state => state.accountRequest.accountRequests
	)?.filter(request => request.status === 1)

	const [gotLoan, setGotLoan] = useState(0)
	const [paidLoan, setPaidLoan] = useState(0)
	const [todayGotLoan, setTodayGotLoan] = useState(0)
	const [todayPaidLoan, setTodayPaidLoan] = useState(0)

	const [showModal, setShowModal] = useState(false)
	const [clickedRow, setClickedRow] = useState({})
	const dispatch = useDispatch()

	const handleModel = id => {
		setClickedRow(id)

		setShowModal(current => !current)
	}

	const deleteHandler = row => {
		handleModel()
		const data = {
			...row,
			id: currentUser.id
		}
		dispatch(deleteAccountRequest(data))
	}

	// Function to calculate total expense for a specific date
	const getTotalExpenseForDate = (expenses, targetDate) => {
		// Filter expenses for the target date

		const expensesForDate = expenses.filter(
			expense =>
				new Date(expense.date).toISOString().split('T')[0] ===
				new Date(targetDate).toISOString().split('T')[0]
		)

		// got loan amount and list

		const gotAmountList = expensesForDate.filter(
			expense => expense.requestForm === 'got'
		)
		const gottodayAdvanceAmount = gotAmountList.reduce(
			(total, current) => total + +current.amount,
			0
		)
		setTodayGotLoan(gottodayAdvanceAmount)

		// paid loan amount and list

		const padiAmountList = expensesForDate.filter(
			expense => expense.requestForm === 'paid'
		)
		const paidAdvanceAmount = padiAmountList.reduce(
			(total, current) => total + +current.amount,
			0
		)
		setTodayPaidLoan(paidAdvanceAmount)

		// Calculate total amount for the target date
		const totalExpenseForDate = expensesForDate.reduce(
			(total, expense) => total + expense.amount,
			0
		)

		return totalExpenseForDate
	}

	useLayoutEffect(() => {
		// calcaulate lon amount got

		const loanGotList = loans.filter(loan => loan.requestForm === 'got')
		const gotLoanAmount = loanGotList.reduce(
			(total, current) => total + +current.amount,
			0
		)

		setGotLoan(gotLoanAmount)

		// calcaulate lon amount paid

		const loanPaidList = loans.filter(loan => loan.requestForm === 'paid')
		const paidLoanAmount = loanPaidList.reduce(
			(total, current) => total + +current.amount,
			0
		)

		setPaidLoan(paidLoanAmount)

		getTotalExpenseForDate(loans, new Date())
	}, [loans])

	return (
		<div className={`container-fluid ${styles.home}`}>
			<div className="row">
				<div className="col-12 col-md-5">
					<section className={`row ${styles.homeComponent}`}>
						<div className={`col-12 col-md-5 mb-2, ${styles.column}`}>
							<div
								className="row"
								style={{
									height: '25%',
									paddingInline: '5vh'
								}}>
								<h3
									className="col"
									style={{
										margin: 'auto',
										fontSize: '3.5vh',
										borderBottom: '1px solid white',
										paddingBlock: '1vh',
										marginBlock: '1vh'
									}}>
									Total
								</h3>
							</div>
							<div
								style={{
									height: '75%',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'flex-start',
									flexDirection: 'column',
									margin: 'auto'
								}}>
								<div className="row" style={{ marginInline: 'auto' }}>
									<h5 className="col-md-6 " style={{ textAlign: 'center' }}>
										Received
									</h5>
									<p className="col-md-6 " style={{ textAlign: 'center' }}>
										{gotLoan}
									</p>
								</div>

								<div className="row" style={{ marginInline: 'auto' }}>
									<h5 className="col-md-6" style={{ textAlign: 'center' }}>
										Paid
									</h5>
									<p className="col-md-6" style={{ textAlign: 'center' }}>
										{paidLoan}
									</p>
								</div>
							</div>
						</div>
						<div className={`col-12 col-md-5 mb-2, ${styles.column}`}>
							<div
								className="row"
								style={{
									height: '25%',
									paddingInline: '5vh'
								}}>
								<h3
									className="col"
									style={{
										margin: 'auto',
										fontSize: '3.5vh',
										borderBottom: '1px solid white',
										paddingBlock: '1vh',
										marginBlock: '1vh'
									}}>
									Today
								</h3>
							</div>
							<div
								style={{
									height: '75%',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'flex-start',
									flexDirection: 'column',
									margin: 'auto'
								}}>
								<div className="row" style={{ marginInline: 'auto' }}>
									<h5 className="col-md-6 " style={{ textAlign: 'center' }}>
										Received
									</h5>
									<p className="col-md-6 " style={{ textAlign: 'center' }}>
										{todayGotLoan}
									</p>
								</div>

								<div className="row" style={{ marginInline: 'auto' }}>
									<h5 className="col-md-6" style={{ textAlign: 'center' }}>
										Paid
									</h5>
									<p className="col-md-6" style={{ textAlign: 'center' }}>
										{todayPaidLoan}
									</p>
								</div>
							</div>
						</div>
					</section>
				</div>
				<div className="col-12 col-md-7">
					<LoanForm />
				</div>
			</div>

			<section className="container-fluid" style={{ margin: 'auto' }}>
				<h2 style={{ textAlign: 'left', color: 'white' }}>Total Loans</h2>
				<div className={`col`}>
					<PaginationTable
						list={TableLoan}
						handleModel={handleModel}
						tableType="loan"
					/>
				</div>
			</section>

			{showModal && (
				<LoanModel
					clickedRow={clickedRow}
					showModal={showModal}
					closeHandler={handleModel}
					deleteHandler={deleteHandler}
				/>
			)}
			{isLoading && <LoadingSpinner />}
		</div>
	)
}

export default Loan
