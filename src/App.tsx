import React, { useState } from 'react';
import AppRouter from './components/AppRouter';
import './styles/App.scss';
import { BrowserRouter } from 'react-router-dom'
import { ITicket, TiсketContext } from './context/context';

function App() {
  const [ticket, setTicket] = useState<ITicket>({ startTown: '', endTown: '', startDate: new Date(), endDate: new Date() })

  return (
    <>
      <TiсketContext.Provider value={{ ticket, setTicket }} >
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </TiсketContext.Provider>
    </>
  );
}

export default App;
