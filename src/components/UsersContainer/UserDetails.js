import {useNavigate} from "react-router-dom";


const UserDetails = ({user}) => {
    let {id,username,name,email,phone} = user

    let navigate = useNavigate();
    return (
        <div>
            <div>id:{id}</div>
            <div>username:{username}</div>
            <div>name:{name}</div>
            <div>email:{email}</div>
            <div>phone:{phone}</div>
            <button onClick={()=> navigate('posts')}>Get Posts</button>
        </div>
    );
}

export {UserDetails};