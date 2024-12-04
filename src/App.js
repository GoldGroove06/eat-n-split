import BillForm from "./components/billForm";
import Button from "./components/button";
import FriendForm from "./components/friendForm";
import FriendList from "./components/friendList";
import {useState} from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [afOpen, setAfOpen] = useState(false)
  function handleAf(){
    setAfOpen(!afOpen)
  }
  
  return (
    <div className="app">
      <div className="sidebar">
      <FriendList initialFriends={initialFriends} />
      {afOpen ? <div><FriendForm /> <Button onClick={handleAf} >Close</Button></div>:
      <Button onClick={handleAf}>Add Friend</Button>
        
        
      }
      <BillForm />
      </div>
    </div>
  );
}

export default App;
