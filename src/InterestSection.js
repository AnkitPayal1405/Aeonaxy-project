import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProgressBar = () => {
  return (
    <div className='my-5'>
      <div className='w-full h-2 bg-gray-300 rounded-md'>
        <div className=' h-full bg-green-700 rounded-md' style={{ width: '40%' }}></div>
      </div>
    </div>
  );
};

const InterestSection = () => {

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };


  return (
    <div className='md:m-12 m-2 my-12 text-gray-800'>
      <ProgressBar/>
      <div className='text-center justify-center '>
        <p className='font-bold md:text-4xl text-2xl'>Which are you most interested in ?</p>
        <p className='md:text-base text-sm'>Choose Just one. This will help us get you started (but won't limit your experience)</p>
        <div className='m-6'>
        <div className={`flex  items-center  md:px-6 px-2 md:py-3 py-1 mx-auto border border-gray-200 hover:border-orange-300 md:w-1/3 w-full rounded-md m-2 ${selectedOption === 'Learning' ? 'border-orange-500' : 'border-gray-200'}`} onClick={() => handleOptionSelect('Learning')}>
          <div><img className='h-10 w-10 ' src='https://i.pngimg.me/thumb/f/720/m2i8d3i8G6m2m2d3.jpg' alt='Learning '/></div>
          <div className='md:px-6 px-2 md:py-3 py-1 md:text-base text-sm'>Learning specific skills to advance my career</div>
        </div>

        <div className={`flex  items-center  md:px-6 px-2 md:py-3 py-1 mx-auto border border-gray-200 hover:border-orange-300 md:w-1/3 w-full rounded-md m-2 ${selectedOption === 'Exploring' ? 'border-orange-500' : 'border-gray-200'}`} onClick={() => handleOptionSelect('Exploring')}>
          <div><img className='h-10 w-10 ' src='https://cdn-icons-png.flaticon.com/512/471/471012.png' alt='Exploring'/></div>
          <div className='md:px-6 px-2 md:py-3 py-1 md:text-base text-sm'>Exploring new topics I'm interested in</div>
        </div>

        <div className={`flex  items-center  md:px-6 px-2 md:py-3 py-1 mx-auto border border-gray-200 hover:border-orange-300 md:w-1/3 w-full rounded-md m-2 ${selectedOption === 'Refereshing' ? 'border-orange-500' : 'border-gray-200'}`} onClick={() => handleOptionSelect('Refereshing')}>
          <div><img className='h-10 w-10 ' src='https://www.clipartmax.com/png/middle/146-1466348_math-icon-design-png.png' alt='Refereshing'/></div>
          <div className='md:px-6 px-2 md:py-3 py-1 md:text-base text-sm'>Refereshing my maths foundation</div>
        </div>

        <div className={`flex  items-center  md:px-6 px-2 md:py-3 py-1 mx-auto border border-gray-200 hover:border-orange-300 md:w-1/3 w-full rounded-md m-2 ${selectedOption === 'Exercising' ? 'border-orange-500' : 'border-gray-200'}`} onClick={() => handleOptionSelect('Exercising')}>
          <div><img className='h-10 w-10 ' src='https://png.pngtree.com/png-vector/20230131/ourmid/pngtree-3d-target-icon-clipart-png-image_6575132.png' alt='Exercising'/></div>
          <div className='md:px-6 px-2 md:py-3 py-1 md:text-base text-sm'>Exercising my mind to stay sharp</div>
        </div>

        <div className={`flex  items-center  md:px-6 px-2 md:py-3 py-1 mx-auto border border-gray-200 hover:border-orange-300 md:w-1/3 w-full rounded-md m-2 ${selectedOption === 'SomethingElse' ? 'border-orange-500' : 'border-gray-200'}`} onClick={() => handleOptionSelect('SomethingElse')}>
          <div><img className='h-10 w-10 ' src='https://media.istockphoto.com/id/1414451080/vector/smile-eyes-look-away-emoji-a-sticker-for-a-chat-message.jpg?s=612x612&w=0&k=20&c=CkfS4-p14xKZXtEIXi_U2vrlRRFR7QrVazWr8eYDTqA=' alt='SomethingElse'/></div>
          <div className='md:px-6 px-2 md:py-3 py-1 md:text-base text-sm'>Something else</div>
        </div>

      <Link to='/InterestSection/RightPlace'>  
        <button  className=' font-semibold rounded-md m-3 p-2 px-8 text-white bg-green-500 hover:bg-black'>Continue</button> </Link>
        </div>
      </div>
    </div>
  );
};


export default InterestSection