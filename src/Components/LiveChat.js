import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from '../utils/randomNames';
import { getRandomMessage } from '../utils/randomMessage';

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState("");
    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages);

    useEffect(() => {
        const chatPolling = setInterval(() => {
            dispatch(addMessage({
                name: generateRandomName(),
                message: getRandomMessage(),
            }))
        }, 700);

        return () => {
            clearInterval(chatPolling);
        }
    })

    const uploadChat = (event) => {
        event.preventDefault();

        if(liveMessage.trim().length === 0) {
            setLiveMessage("");
            return;
        }

        dispatch(addMessage({
            name: "You",
            message: liveMessage,
        }));
        setLiveMessage("");
    }

    return (
        <div className='flex flex-col justify-between w-full h-full ml-6'>
            <div className='h-[66%] bg-slate-100 rounded-xl overflow-y-scroll flex flex-col-reverse'>
                <div>
                    {
                        chatMessages.map((chat, index) => <ChatMessage key={index} name={chat.name} message={chat.message} />)
                    }
                </div>
            </div>
            <form
                className='w-full h-[30%] bg-slate-100 rounded-md'
                onSubmit={uploadChat}
            >
                <p className='text-2xl pl-3 font-medium'>Live Chats</p>
                <input
                    className='outline-none pl-3 w-full bg-transparent text-xl mt-2 border-b-2 border-black py-2 mb-4'
                    type="text"
                    placeholder='Chat'
                    value={liveMessage}
                    onChange={(event) => setLiveMessage(event.target.value)}
                />
                <div className='flex justify-evenly'>
                    <button type='button' className='w-44 py-2 rounded-full hover:bg-gray-600 mr-5 text-xl bg-gray-500 text-white font-medium' onClick={() => setLiveMessage("")}>Cancel</button>
                    <button type='submit' className='w-44 py-2 rounded-full bg-blue-500 hover:bg-blue-600 text-xl text-white font-medium'>Send</button>
                </div>
            </form>
        </div>
    )
}

export default LiveChat;