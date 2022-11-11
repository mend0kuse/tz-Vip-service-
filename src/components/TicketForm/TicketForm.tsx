import React from 'react'
import Input from '../UI/Input'
import './TicketForm.scss'

const TicketForm = () => {
	return (
		<form className='avia__form form-avia'>
			<div className="form-avia__top">
				<label className='form-avia__label'>
					<p></p>
					<Input type="text" name="startTown" placeholder="Город вылета" />
				</label>
				<label className='form-avia__label'>
					<p></p>
					<Input type="text" name="startTown" placeholder="Город прилёта" />
				</label>
				<label className='form-avia__label'>
					<p></p>
					<Input type="date" name="startTown" placeholder="дд.мм.гг" />
				</label>
				<label className='form-avia__label'>
					<p></p>
					<Input type="date" name="startTown" placeholder="дд.мм.гг" />
				</label>
			</div>
			<div className="form-avia__bottom">
			</div>
		</form>
	)
}

export default TicketForm