import React, { useState } from 'react'

const FinalAnswer = () => {

        const [selectedOption, setSelectedOption] = useState(null);

        const handleOptionSelect = (option) => {
          setSelectedOption(option);
        };

  return (
    <div className='md:m-56 m-2 my-12 text-gray-800 '>
        <div className='m-4'>
        <p className='font-bold text-4xl text-center'>Learning Paths based on your Answer</p>
        <p className='text-center my-9'>Choose one to get started, You can switch anytime</p>
        </div>
        <div className='flex mt-20 md:flex-row flex-col justify-center items-center mx-auto '>

        <button className='bg-yellow-500 font-bold rounded-full md:px-4 px-2 p-1   w-auto relative md:left-72 left-1 md:bottom-24 -bottom-6 '>MOST POPULAR</button>
        <div className={`flex justify-center items-center border border-gray-200 hover:border-orange-300 p-3 md:w-2/5 w-auto md:mx-4 mx-0 md:my-0 my-4 rounded-md shadow-lg ${selectedOption === 'FoundatinalMath' ? 'border-orange-500' : 'border-gray-200'}`} onClick={() => handleOptionSelect('FoundatinalMath')}>
            
                <p><span className='font-bold'>Foundatinal Math</span> Build your foundation skills in algebra, geometry, and probability</p>
                <img className='w-2/5' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE9eSTZnCuOQmtbD_JWO9Xbsr8tyS08vulKLew3jodjg&s' alt='FoundatinalMath'/>     
        </div>

        <div className={`flex justify-center items-center border border-gray-200 hover:border-orange-300 p-3 md:w-2/5 w-auto md:mx-4 mx-0 md:my-0 my-4 rounded-md shadow-lg ${selectedOption === 'MathematicalThinking' ? 'border-orange-500' : 'border-gray-200'}`} onClick={() => handleOptionSelect('MathematicalThinking')}>
                <p><span className='font-bold'>Mathematical Thinking</span> Build your foundation skills in algebra, geometry, and probability</p>
                <img className='w-2/5' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE9eSTZnCuOQmtbD_JWO9Xbsr8tyS08vulKLew3jodjg&s' alt='MathematicalThinking'/>     
        </div>
       
        {/* <div className='flex justify-center items-center border border-gray-200 p-3 w-2/4 mx-4 rounded-md shadow-lg'>
                <p><span className='font-bold'>Mathematical Thinking</span> Build your foundation skills in algebra, geometry, and probability</p>
                <img className='w-2/4' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE9eSTZnCuOQmtbD_JWO9Xbsr8tyS08vulKLew3jodjg&s' alt='mathpng'/>     
        </div> */}
     
    </div>
    </div>
  )
}

export default FinalAnswer