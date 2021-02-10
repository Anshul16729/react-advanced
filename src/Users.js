import React,{useState} from 'react';
const Users=(props)=>{
    const [data,setData]=useState("Xyz")
    console.log(props)
    return (
        <h1>Users</h1>
    )
}

export default Users;