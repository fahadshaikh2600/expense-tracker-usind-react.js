import React, { useState } from 'react'

export const Filters = () => {

    return (
        <div className="bar">
            <input type="text" placeholder="Search" className="search" /><i class="fa-solid fa-magnifying-glass"></i>

            <button className="filter active">📁 All Expenses</button>
            <button className="filter">🍕 Food & Drinks</button>
            <button className="filter">🛍️ Groceries</button>
            <button className="filter">🧳 Travel</button>
            <button className="filter">🩺 Health</button>

            <button className="action">➕ Add Budget</button>
            <button className="action">➕ Add Expense</button>
        </div>
    )
}
