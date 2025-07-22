import { useState } from 'react'

import { Header } from './components/Header'
import { Herosection } from './components/Herosection'
import { Filters } from './components/Filters'

function App() {

  return (
    <>
      <Header />
      <div className='container'>
        <Herosection name={'Total budget'} amount={"₹" + 0} />
        <Herosection name={'Total Expense'} amount={"₹" + 0} />
        <Herosection name={'Remaining budget'} amount={"₹" + 0} />

      </div>
      <Filters />
    </>
  )
}

export default App
