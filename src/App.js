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
    balance: 50,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends)
  const [afOpen, setAfOpen] = useState(false)
  const [selectedFriend, setSelectedFriend] = useState(null)
  function handleAf(){
    setAfOpen(!afOpen)
  }
  
  function handleAddFriend(friend) {
    setFriends((friends) =>[...friends, friend])
    setAfOpen(false)
  }

  function handleBill(friend) {
    selectedFriend === friend ? setSelectedFriend(null): setSelectedFriend(friend)
   
    
  }

  function handleSplitBill(value){
   console.log(selectedFriend)
    setFriends(friends.map((friend) =>
      friend.id === selectedFriend.id ? {...friend, balance: friend.balance + value }: friend
    ))
    setSelectedFriend(null)

  }


  return (
    <div className="app">
      <div className="sidebar">
      <FriendList initialFriends={friends} handleBill={handleBill} selectedFriend={selectedFriend}/>
      {afOpen ? <div><FriendForm onAddFriend={handleAddFriend} /> <Button onClick={handleAf} >Close</Button></div>:
      <Button onClick={handleAf}>Add Friend</Button>
      }
      
      
      </div>
      {selectedFriend && <BillForm friend={selectedFriend} onSplitBill={handleSplitBill}/>}
    </div>
  );
}

export default App;
