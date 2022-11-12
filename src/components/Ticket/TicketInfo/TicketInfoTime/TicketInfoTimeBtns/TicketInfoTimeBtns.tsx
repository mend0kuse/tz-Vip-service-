import React, { FC, useState } from 'react'
import './TicketInfoTimeBtns.scss'

interface TicketInfoTimeBtnsProps {
	setTime: (time: { start: string, end: string }) => void
}

const TicketInfoTimeBtns: FC<TicketInfoTimeBtnsProps> = ({ setTime }) => {
	const [activeButtonId, setActiveButtonId] = useState(0)

	const buttonsTime = [
		{ id: 0, time: { start: '09:20', end: "11:05" } },
		{ id: 1, time: { start: '10:20', end: "12:05" } },
		{ id: 2, time: { start: '11:20', end: "13:05" } },
	]

	return (
		<div className="time-info__buttons buttons-time">
			{buttonsTime.map((btn, index) => {
				return (
					<button
						key={index}
						className={btn.id === activeButtonId ? 'buttons-time__item active' : 'buttons-time__item'}
						onClick={() => {
							setTime({ start: btn.time.start, end: btn.time.end })
							setActiveButtonId(btn.id)
						}}
					>
						{btn.time.start} - {btn.time.end}
					</button>)
			})}
		</div>
	)
}

export default TicketInfoTimeBtns