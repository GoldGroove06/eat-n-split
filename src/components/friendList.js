import Friend from "./friend";

function FriendList({initialFriends, handleBill, selectedFriend}) {
return (
    <ul>
        {initialFriends.map((friend) => 
            <Friend friend={friend} key={friend.id} handleBill ={handleBill} selectedFriend={selectedFriend}/>
        )}
    </ul>
    
)
}

export default FriendList;