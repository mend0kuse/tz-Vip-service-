import React, { useContext } from 'react'
import { TiсketContext } from '../../context/context';
import InnerTicket from './InnerTicket';
import "./Ticket.scss";
import TicketInfo from './TicketInfo/TicketInfo';




const Ticket = () => {
	const { ticket, setTicket } = useContext(TiсketContext)

	return (
		<div className='ticket' >
			{ticket.endDate
				?
				<div className='ticket__wrapper' >
					<InnerTicket back={false} />
					<span className='ticket__separator'></span>
					<InnerTicket back={true} />
				</div>
				: <InnerTicket back={false} />
			}

			<div className="ticket__price price-ticket">
				<span className='price-ticket__num' >{ticket.endDate ? '9 300 ₽' : '4 150 ₽'}</span>
			</div>
		</div>
	)
}

export default Ticket