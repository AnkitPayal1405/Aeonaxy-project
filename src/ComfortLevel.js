import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const ProgressBar = () => {
    return (
      <div className='my-5'>
        <div className='w-full h-2 bg-gray-300 rounded-md'>
          <div className=' h-full bg-green-700 rounded-md' style={{ width: '80%' }}></div>
        </div>
      </div>
    );
  };
  

const ComfortLevel = () => {

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className='md:m-12 m-2 my-12 text-gray-800'>
        <ProgressBar/>
        <div>
            <p className='text-4xl font-bold text-center mt-12 '>What is your math comfort ?</p>
            <p className='text-center mt-5'>Choose the highest level you feel in - you can always adjust later.</p>
        
        <div className='flex md:flex-row flex-col justify-center items-center m-12'>
        <div className={`border border-gray-300 rounded-lg shadow-lg hover:border-orange-300 m-4 p-8 text-center ${selectedOption === 'Airthmetic' ? 'border-orange-500' : 'border-gray-200'}`} onClick={() => handleOptionSelect('Airthmetic')}>
        <p>5 &times; (1/2) = ?</p>
        <p className='font-semibold mt-6'>Airthmetic</p>
        <p className='font-semibold text-lg text-gray-500'>Introductory</p>
        </div>
        <div className={`border border-gray-300 rounded-lg shadow-lg hover:border-orange-300 m-4 p-8 text-center ${selectedOption === 'BasicAlgebra' ? 'border-orange-500' : 'border-gray-200'}`} onClick={() => handleOptionSelect('BasicAlgebra')}>
        <p>3x + 5 = 4</p>
        <p className='font-semibold mt-6'>Basic Algebra</p>
        <p className='font-semibold text-lg text-gray-500'>Foundational</p>
        </div>
        <div className={`border border-gray-300 rounded-lg shadow-lg hover:border-orange-300 m-4 p-8 text-center ${selectedOption === 'IntermediateAlgebra' ? 'border-orange-500' : 'border-gray-200'}`} onClick={() => handleOptionSelect('IntermediateAlgebra')}>
        <p> x = (-b &plusmn; &radic;(b<sup>2</sup> - 4ac)) / 2a </p>
            <p className='font-semibold mt-6'>Intermediate Algebra</p>
            <p className='font-semibold text-lg text-gray-500'>Intermediate</p>
        </div>
        <div className={`border border-gray-300 rounded-lg shadow-lg hover:border-orange-300 m-4 p-8 text-center ${selectedOption === 'Calculus' ? 'border-orange-500' : 'border-gray-200'}`} onClick={() => handleOptionSelect('Calculus')}>
        <p> &int;<sub>0</sub><sup>t</sup> x<sup>2</sup>dx = ? </p>
        <p className='font-semibold mt-6'>Calculus</p>
            <p className='font-semibold text-lg text-gray-500'>Advance</p>
        </div>

        </div>
        <div className='flex justify-center items-center my-12'>
     <Link to='/InterestSection/RightPlace/ComfortLevel/YourWay'> <button className='font-semibold rounded-md m-3 p-2 px-8 text-white bg-green-500  hover:bg-black'>Continue</button> </Link>
    </div> </div>
    </div>
  )
}

export default ComfortLevel