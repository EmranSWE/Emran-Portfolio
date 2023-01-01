import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const MessageList = () => {

    const {data:messages,isLoading}=useQuery('messages', () => fetch('https://emran-portfolio-server-6vj9y.ondigitalocean.app/message').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
   
    return (
        <div>
            <h1 className='textPrimary text-center'>My Message List</h1>
            <div className="overflow-x-auto">
            <table className="table w-1/2 mx-auto">
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
                        messages?.map((textMessage,index) => <tr key={index}>
                            <td>{index+1}</td>
                            <td>{textMessage.name}</td>
                            <td>{textMessage.email}</td>
                            <td>{textMessage.subject}</td>
                            <td>{textMessage.message.slice(0,50) }</td>
                        </tr>)} 
                </tbody>
            </table>
        </div>
        </div>
        
    );
};

export default MessageList;