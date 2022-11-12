import AirDatepicker from 'air-datepicker'
import React, { useContext, useEffect, useRef, useState } from 'react'
import './TicketForm.scss'
import 'air-datepicker/air-datepicker.css';
import Input from '../UI/input/Input';
import Button from '../UI/button/Button';

import calendarBlue from '../../img/calendarBlue.svg'
import calendar from '../../img/calendar.svg'
import { useInput } from '../../hooks/useInput';
import { TiсketContext } from '../../context/context';

import { useNavigate } from 'react-router-dom'


interface IInputsValid {
	startTown: string
	endTown: string
	startDate: Date | boolean
	endDate: Date | boolean
}

const TicketForm = () => {
	const router = useNavigate()

	const { ticket, setTicket } = useContext(TiсketContext)

	const startCalendar = useRef<AirDatepicker<HTMLElement> | null>(null)
	const endCalendar = useRef<AirDatepicker<HTMLElement> | null>(null)

	const [formValid, setFormValid] = useState(false)

	const startTown = useInput('', { isEmpty: true, minLength: 3 }) //Инпут с валидацией
	const endTown = useInput('', { isEmpty: true, minLength: 3 }) //Инпут с валидацией

	const [startDate, setStartDate] = useState<Date | boolean>(false)
	const [endDate, setEndDate] = useState<Date | boolean>(false)

	useEffect(() => {
		const optionsCalenadar = { autoClose: true, minDate: new Date() }

		startCalendar.current = new AirDatepicker('.top-form__start-date', {
			...optionsCalenadar, onSelect({ date }) { if (date instanceof Date) setStartDate(date) }
		})

		endCalendar.current = new AirDatepicker('.top-form__end-date', {
			...optionsCalenadar, onSelect({ date }) { if (date instanceof Date) setEndDate(date) }
		})

	}, [])

	useEffect(() => {
		if (startTown.err || endTown.err || !startDate) {
			setFormValid(false)
		} else {
			setFormValid(true)
		}
	}, [startTown.err, endTown.err, startDate])

	const formSubmitHandler = (e: React.FormEvent) => {
		e.preventDefault()
		if (startDate instanceof Date) setTicket({ startTown: startTown.value, endTown: endTown.value, startDate, endDate })
		router('/avia/info')
	}

	return (
		<form className='avia__form form-avia'>
			<div className="form-avia__top top-form">

				<label className='top-form__label'>
					<span className='top-form__text'>Откуда *</span>
					{(startTown.isDirty && startTown.err) && <span className='error' >{startTown.err}</span>}
					<Input onChange={e => startTown.onChange(e)} value={startTown.value} onBlur={() => startTown.onBlur()} type="text" placeholder="Город вылета" />
				</label>

				<label className='top-form__label'>
					<span className='top-form__text'>Куда *</span>
					{(endTown.isDirty && endTown.err) && <span className='error' >{endTown.err}</span>}
					<Input onChange={e => endTown.onChange(e)} value={endTown.value} onBlur={() => endTown.onBlur()} type="text" placeholder="Город прилёта" />
				</label>

				<label className='top-form__label'>
					<span className='top-form__text'>Туда *</span>
					<img src={startDate ? calendarBlue : calendar} alt="calendar" onClick={() => startCalendar.current?.show()} className='calendar' />
					<Input type="text" disabled className='top-form__start-date' placeholder="дд.мм.гг" />
				</label>

				<label className='top-form__label'>
					<span className='top-form__text'>Обратно</span>
					<img src={endDate ? calendarBlue : calendar} alt="calendar" onClick={() => endCalendar.current?.show()} className='calendar' />
					<Input type="text" disabled className='top-form__end-date' placeholder="дд.мм.гг" />
				</label>

			</div>
			<div className="form-avia__bottom bottom-form">
				<Button disabled={!formValid}
					onClick={e => formSubmitHandler(e)}
					className='bottom-form__search'
				>Найти билеты</Button>
			</div>
		</form >
	)
}

export default TicketForm