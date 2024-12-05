import { useState } from "react";
import Button from "./button";

function BillForm({friend, onSplitBill}) {
    const [billValue, setBillValue] = useState('')
    const [expense, setExpense] = useState("")
    const [whoIsPaying, setWhoIsPaying] = useState("You")
    
    const friendExpense = billValue ? billValue - expense:""

    function handleBillSumbit(e) {
        e.preventDefault();
        if (!billValue || !expense) return;
        onSplitBill(whoIsPaying === "You" ? friendExpense : -expense )

    }
return (
    <form className="form-split-bill" onSubmit={handleBillSumbit}>
        <h2>SPLIT A BILL WITH {friend.name}</h2>
        <label>💰 Bill Value: </label>
        <input type="text" value={billValue} onChange={(e) => setBillValue(Number(e.target.value))}/>
        <label>🕴️ Your expense: </label>
        <input type="text" value={expense} onChange={(e) => setExpense(Number(e.target.value) > billValue ? expense : Number(e.target.value))}/>
        <label>🧑‍🤝‍🧑 {friend.name}'s expense: </label>
        <input type="text" value={friendExpense} disabled/>
        <label>🤑 Who is paying the bill?</label>
         <select value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
            <option value="You" >You </option>
            <option value="friend" >{friend.name} </option>

        </select>
        <Button onClick={handleBillSumbit}> Split Bill </Button>
    </form>
)
}

export default BillForm;