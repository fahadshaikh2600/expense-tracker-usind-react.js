import React from 'react'

export const Herosection = ({ name, amount }) => {
    return (
        <>

            <div className="tas">
                <h2 className='name'>{name}</h2>
                <p className='amount'>{amount}</p>
            </div>

        </>
    )
}
