import {User} from "./User";
import {useLoaderData} from "react-router-dom";

const Users = () => {
    let {data: users} = useLoaderData();


    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
}

export {Users};