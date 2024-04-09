import React from 'react';
import RightPlaced from './Resources/RightPlaced.PNG';
import { Link } from 'react-router-dom';

const RightPlace = () => {
  const ProgressBar = () => {
    return (
      <div className='my-5'>
        <div className='w-full h-2 bg-gray-300 rounded-md'>
          <div className='h-full bg-green-700 rounded-md' style={{ width: '60%' }}></div>
        </div>
      </div>
    );
  };

  return ( 
    <div className='md:m-12 m-2 my-12 text-gray-800'>      
      <ProgressBar />
      <div className='flex md:flex-row flex-col justify-between items-center  mt-12 md:mx-72 mx-4 '>
        <div className='w-1/2 '>
          <img className='md:h-96 h-44 w-auto' src={RightPlaced} alt='Right Placed' />
        </div>
        <div className='md:w-1/2 w-full'>
          <p className='font-bold md:text-4xl text-xl md:m-7 m-4'>You' in the right Place</p>
          <p className=' md:m-7 m-4 md:text-base text-sm'>Brilliant gets you hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems with maths, science, and computer science.</p>
        </div>
      </div>
      <div className='flex justify-center items-center my-12'>
    <Link to='/InterestSection/RightPlace/ComfortLevel'> <button className='font-semibold rounded-md m-3 p-2 px-8 text-white bg-green-500  hover:bg-black'>Continue</button>  </Link> 
    </div>
    </div>
  );
};

export default RightPlace;
