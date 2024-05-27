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
    <div className='flex md:justify-between w-[100%] md:flex-row flex-col bg-[#181a1d] text-white p-4 md:items-center px-8 min-h-fit py-6'>
        <h1 className='text-[2rem] font-extrabold text-gray-500'><span className='text-yellow-300'>STRATEX</span> ASSIGNMENT</h1>
        <button onClick={handleButtonClick} className="px-4 bg-blue-500 p-2 rounded-xl font-bold hover:bg-blue-800 duration-300">
          {viewFavorites ? 'Back to Home' : 'View Favorite Movies >'}
        </button>
    </div>
  )
}

export default Navbar