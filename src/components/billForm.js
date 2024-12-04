import Button from "./button";

function BillForm() {
return (
    <form className="form-split-bill">
        <h2>SPLIT A BILL WITH SARAH</h2>
        <label>💰 Bill Value: </label><input type="text" />
        <label>🕴️ Your expense: </label><input type="text" />
        <label>🧑‍🤝‍🧑 Sarah's expense: </label><input type="text" />
        <label>🤑 Who is paying the bill?</label> <select >
            <option value="You" >You </option>
            <option value="Sarah" >Sarah </option>

        </select>
        <Button> Split Bill </Button>
    </form>
)
}

export default BillForm;