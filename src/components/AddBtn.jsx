import { useState } from "react";
import * as Yup from 'yup'
export const AddBtn = () => {
    const handleSubmit = async (e) => { };


    const [formData, setFormData] = useState({
        expenseName: "",
        date: "",
        category: "",
        amount: "",

    });

    const validationSchema = Yup.object({
        expenseName: Yup.string().required()


    })
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-heading">
                <h2>Add Expense</h2><button>x</button>
            </div>
            <div className="input-containor">
                <label> Expense Name<sup>*</sup> </label>
                <input type="text" placeholder=" Expense Name" name=" Expense Name" value={formData.expenseName} />

                <label >Date<sup>*</sup></label>
                <input type="text" placeholder=" dd/mm/yy " name=" dates" value={formData.date} />

                <label >Category<sup>*</sup></label>
                <select name="Category " value={formData.category}>
                    <option value="FoodDrinks">Food & Drinks</option>
                    <option value="Groceries">Groceries</option>
                    <option value="Travel">Travel</option>
                </select>
                <input type="text" placeholder="  Choose a Category " name="category" value={formData.category} />

                <label >Amount<sup>*</sup></label>
                <input type="text" placeholder=" Enter Amount" name="amount" value={formData.amount} />

                <button>+ Add Expense </button>

            </div>


        </form>
    )
}
