export default function UserView(users) {

    console.log(users)
    const userList = users.users.map((user) => 
        <div key={user.id}>
            <div className='user'>
                <strong>id:{user.id + ' ' + user.email+ ' ' }</strong>
                <span>{user.pass}</span>
            </div> 
        </div>
    );
    return (
        <>
            {userList}
        </>
    );
}