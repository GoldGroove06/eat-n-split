import { useState } from "react";
import Button from "./button";

function FriendForm({onAddFriend}) {
    const [name, setName] = useState('')
    const [img, setImg] = useState("https://i.pravatar.cc/48")

    function handleForm(e) {
        e.preventDefault();
        if (!name || !img) return;
        const id = crypto.randomUUID()
        const friend = {
            id,
            name,
            image :`${img}?=${id}`,
            balance:0,
            
        }
        onAddFriend(friend)
        console.log(friend)

        setName('')
        setImg("https://i.pravatar.cc/48")
    }

return (
    <form className="form-add-friend" on onSubmit={(e) => handleForm(e)}>
    <label>🧑‍🤝‍🧑 Friend Name </label>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
    <label>🌇 Image URL </label> 
    <input type="text" value={img} onChange={(e) => setImg(e.target.value)}/>
    <Button>Add</Button>
    </form>
)
}

export default FriendForm;