import React, { useState } from 'react';

export const ExpenseTable = () => {
    const [expenses, setExpenses] = useState([
        { id: "", name: "", amount: "", },


    ]);

    const handleEdit = (id) => {
        alert(`Edit clicked for ID ${id}`);
    };

    const handleDelete = (id) => {
        const filtered = expenses.filter((expense) => expense.id !== id);
        setExpenses(filtered);
    };
    return (
        <div className="p-4">
            <table className="w-full border border-gray-300 rounded-md overflow-hidden text-sm">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border px-4 py-2">Sr.</th>
                        <th className="border px-4 py-2">Expense</th>
                        <th className="border px-4 py-2">Amount</th>
                        <th className="border px-4 py-2">Edit / Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((expense, index) => (
                        <tr key={expense.id} className="text-center">
                            <td className="border px-4 py-2">{index + 1}</td>
                            <td className="border px-4 py-2">{expense.name}</td>
                            <td className="border px-4 py-2 space-x-2">
                                <button
                                    onClick={() => handleEdit(expense.id)}
                                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded flex items-center justify-center inline-flex gap-1"
                                >
                                    ✏️ Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(expense.id)}
                                    className="bg-red-100 text-red-700 px-3 py-1 rounded flex items-center justify-center inline-flex gap-1"
                                >
                                    🗑️ Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
