import React, { createContext } from 'react';

export interface ITicket {
	startTown: string;
	endTown: string;
	startDate: Date;
	endDate: boolean | Date;
}

export interface ITiсketContext {
	ticket: ITicket,
	setTicket: React.Dispatch<React.SetStateAction<ITicket>>
}

export const TiсketContext = createContext({} as ITiсketContext);