import React, { FC } from 'react'
import TicketInfo from './TicketInfo/TicketInfo'

interface InnerTicketProps {
	back: boolean
}

const InnerTicket: FC<InnerTicketProps> = ({ back }) => {
	return (
		<div className="ticket__inner inner-ticket">
			<p className="inner-ticket__status">Невозвратный</p>
			<TicketInfo back={back} />
		</div>
	)
}

export default InnerTicket