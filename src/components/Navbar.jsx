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
        <h1>STRATEX ASSIGNMENT</h1>
        <button onClick={handleButtonClick} className="w-[20%] bg-gray-600 p-2 rounded">
          {viewFavorites ? 'Back to Home' : 'View Favorite Movies'}
        </button>
    </div>
  )
}

export default Navbar