import { useState } from 'react'

import { Header } from './components/Header'
import { Herosection } from './components/Herosection'
import { Filters } from './components/Filters'
import { AddBtn } from './components/AddBtn';

function App() {
  const [budget, setBudget] = useState(0);
  const [expense, setExpense] = useState(0);
  const [remaining, setRemaining] = useState(0);


  return (
    <>
      <Header />
      <div className='container'>
        <Herosection name={'Total budget'} amount={"₹" + budget} />
        <Herosection name={'Total Expense'} amount={"₹" + expense} />
        <Herosection name={'Remaining budget'} amount={"₹" + (budget - expense)} />

      </div>
      <Filters />


      <AddBtn />

    </>
  )
}

export default App
