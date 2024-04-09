import React from 'react'
import YourWays from './Resources/YourWay.PNG'
import { Link } from 'react-router-dom';


const ProgressBar = () => {
    return (
      <div className='my-5'>
        <div className='w-full h-2 bg-gray-300 rounded-md'>
          <div className=' h-full bg-green-700 rounded-md' style={{ width: '100%' }}></div>
        </div>
      </div>
    );
  };
  

const YourWay = () => {
  return (
    <div className='md:m-12 m-2 my-12 text-gray-800'>
        <ProgressBar/>
        <div className='flex md:flex-row flex-col justify-center items-center w-2/3 mx-auto  md:my-14 my-4 h-5/6'>
            <div className='md:w-1/2 w-auto'>
                <img className='md:w-3/4 w-auto ' src={YourWays} alt='cartoonMonster'/>
            </div>
            <div className='md:w-1/2 w-auto'>
                <p className='font-bold text-4xl md:m-3 m-1'>You're on your way!</p>
                <p className='md:m-3 m-2'>⭐⭐⭐⭐⭐</p>
                <p className='md:m-3 m-1'>"Through its engaging an well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching bith technical job interviews and real world problem solving situations"</p>
                <p className='md:m-5 m-2'> - Jacob S.</p>
            </div>

          
        </div>
        <div className='flex justify-center items-center my-12'>
   <Link to='/InterestSection/RightPlace/ComfortLevel/YourWay/EndScreen'>  <button className='font-semibold rounded-md m-3 p-2 px-8 text-white bg-green-500  hover:bg-black'>Continue</button> </Link> 
    </div>
    </div>
  )
}

export default YourWay