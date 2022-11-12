import React, { FC } from 'react'
import logo from '../../../img/logo.png'

import bag from '../../../img/bag.svg'
import bagage from '../../../img/bagage.svg'
import TicketInfoTime from './TicketInfoTime/TicketInfoTime'
import './TicketInfo.scss'

interface TicketInfoProps {
	back: boolean
}

const TicketInfo: FC<TicketInfoProps> = ({ back }) => {
	return (
		<div className="inner-ticket__info info-ticket">
			<div className="info-ticket__logo logo-ticket">
				<img src={logo} alt="s7" />
				<p className='logo-ticket__name' >S7 Airlines</p>
			</div>
			<TicketInfoTime back={back} />
			<div className="info-ticket__actions actions-info">
				<button className='actions-info__btn' ><img src={bag} alt="bag" /></button>
				<button className='actions-info__btn' ><img src={bagage} alt="bagage" /></button>
			</div>
		</div>
	)
}

export default TicketInfo