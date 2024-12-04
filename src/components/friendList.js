import Friend from "./friend";

function FriendList({initialFriends}) {
return (
    <ul>
        {initialFriends.map((friend) => 
            <Friend friend={friend} key={friend.id}/>
        )}
    </ul>
    
)
}

export default FriendList;