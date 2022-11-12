import React, { useContext } from 'react'
import Ticket from '../components/Ticket/Ticket'
import { TiсketContext } from '../context/context'

const AviaInfo = () => {
	const { ticket, setTicket } = useContext(TiсketContext)
	return (
		<div className="avia-info">
			<div className='avia-info__container' >
				<Ticket />
			</div>
		</div>
	)
}

export default AviaInfo