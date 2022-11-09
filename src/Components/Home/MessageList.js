import React, { useEffect, useState } from 'react';

const MessageList = () => {
    const [newMessages,setNewMessages]=useState([]);
    useEffect(()=>{
        const url =`https://quiet-everglades-41719.herokuapp.com/message`;
        fetch(url)
        .then(res=> res.json())
        .then(data=> setNewMessages(data))
    },[]);
    return (
        <div>
            <h1 className='textPrimary text-center'>My Message List</h1>
            <div class="overflow-x-auto">
            <table class="table w-1/2 mx-auto">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>subject</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        newMessages.map((textMessage,index) => <tr key={index}>
                            <td>{index+1}</td>
                            <td>{textMessage.name}</td>
                            <td>{textMessage.email}</td>
                            <td>{textMessage.subject}</td>
                            <td>{textMessage.message>45}</td>
                        </tr>)} 
                </tbody>
            </table>
        </div>
        </div>
        
    );
};

export default MessageList;