import React from 'react'
import { YOUTUBE_CONTENT_SPECIFIED } from '../utils/constants'
import { useDispatch } from 'react-redux';
import { storeVideos } from '../utils/VideoSlice';

const Button = ({ text }) => {
  const dispatch = useDispatch();

  const handleContentSearch = async() => {
    console.log(text);
    const data = await fetch(YOUTUBE_CONTENT_SPECIFIED + text);
    const json = await data.json();
    dispatch(storeVideos(json.items));
  }

  return (
    <div>
      <button onClick={handleContentSearch} className='px-5 py-2 h-[6vmin] m-2 bg-gray-200 rounded-lg font-semibold hover:bg-gray-300'>{text}</button>
    </div>
  )
}

export default Button;