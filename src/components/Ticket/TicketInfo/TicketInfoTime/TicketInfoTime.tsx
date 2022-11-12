import React, { FC, useContext, useRef, useState } from 'react'
import { TiсketContext } from '../../../../context/context'
import { parseDate } from '../../../../utils/parseDate'
import TicketInfoTimeBtns from './TicketInfoTimeBtns/TicketInfoTimeBtns'
import './TicketInfoTime.scss'

interface TicketInfoTimeProps {
	back: boolean
}

const TicketInfoTime: FC<TicketInfoTimeProps> = ({ back }) => {
	const { ticket, setTicket } = useContext(TiсketContext)
	const [time, setTime] = useState({ start: '09:20', end: "11:05" })

	return (
		<div className="info-ticket__time time-info">
			<div className="time-info__panel panel-time">
				<div className="panel-time__start date-panel">
					<p className="date-panel__time">{time.start}</p>
					<p className="date-panel__town">{back ? ticket.endTown : ticket.startTown}</p>
					<p className="date-panel__date">{back ? parseDate(ticket.endDate) : parseDate(ticket.startDate)}</p>
				</div>
				<div className="panel-time__path path-panel">
					<div className="path-panel__names">
						<span>{back ? ticket.endTown.slice(0, 3).toUpperCase() : ticket.startTown.slice(0, 3).toUpperCase()}</span>
						<span>{back ? ticket.startTown.slice(0, 3).toUpperCase() : ticket.endTown.slice(0, 3).toUpperCase()}</span>
					</div>
					<span className="path-panel__line"></span>
					<p className='path-panel__num'>В пути 1 ч 55 мин</p>
				</div>
				<div className="panel-time__end date-panel">
					<p className="date-panel__time">{time.end}</p>
					<p className="date-panel__town">{back ? ticket.startTown : ticket.endTown}</p>
					<p className="date-panel__date">{back ? parseDate(ticket.endDate) : parseDate(ticket.startDate)}</p>
				</div>
			</div>
			{!ticket.endDate && <TicketInfoTimeBtns setTime={setTime} />}
		</div >
	)
}

export default TicketInfoTime