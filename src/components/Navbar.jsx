import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [viewFavorites, setViewFavorites] = useState(false);
    const navigate = useNavigate();

  const handleButtonClick = () => {
    if (viewFavorites) {
      navigate('/');
    } else {
      navigate('/favorites');
    }
    setViewFavorites(!viewFavorites);
  };

  return (
    <div className='flex justify-between w-[100%] flex-row bg-[#181a1d] text-white p-4 items-center px-8 h-[100px]'>
        <h1 className='text-[2rem] font-extrabold text-gray-500'>STRATEX ASSIGNMENT</h1>
        <button onClick={handleButtonClick} className="px-4 bg-blue-500 p-2 rounded-xl font-bold hover:bg-blue-800 duration-300">
          {viewFavorites ? 'Back to Home' : 'View Favorite Movies >'}
        </button>
    </div>
  )
}

export default Navbar