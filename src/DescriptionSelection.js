import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProgressBar = () => {
  return (
    <div className='my-5'>
      <div className='w-full h-2 bg-gray-300 rounded-md'>
        <div className=' h-full bg-green-700 rounded-md' style={{ width: '20%' }}></div>
      </div>
    </div>
  );
};

const DescriptionSelection = () => {

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className='md:m-12 m-2 my-12 text-gray-800'>
      <ProgressBar/>
      <div className='text-center justify-center '>
        <p className='font-bold md:text-4xl text-2xl'>Which describes you best ?</p>
        <p className='md:text-base text-sm'>This will help us personalize your experience</p>
        <div className='m-6'>
        <div className={`flex  items-center  md:px-6 px-2 md:py-3 py-1 mx-auto border border-gray-200 hover:border-orange-300 md:w-1/3 w-full rounded-md m-2 ${selectedOption === 'Student' ? 'border-orange-500' : 'border-gray-200'}`} onClick={() => handleOptionSelect('Student')}>
          <div><img className='h-10 w-10 ' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlt3jsrugkvpNy7bLbqfipWI8Gr8RYId5zTQ&s' alt='Student'/></div>
          <div className='md:px-6 px-2 md:py-3 py-1 md:text-base text-sm'><span className='font-bold'>Student</span> or soon be enrolled</div>
        </div>

        <div className={`flex  items-center  md:px-6 px-2 md:py-3 py-1 mx-auto border border-gray-200 hover:border-orange-300 md:w-1/3 w-full rounded-md m-2 ${selectedOption === 'Proffesional' ? 'border-orange-500' : 'border-gray-200'}`} onClick={() => handleOptionSelect('Proffesional')}>
          <div><img className='h-10 w-10 ' src='https://cdn1.iconfinder.com/data/icons/indian-man-professions/512/07-512.png' alt='Proffesional'/></div>
          <div className='md:px-6 px-2 md:py-3 py-1 md:text-base text-sm'><span className='font-bold'>Proffesional</span> or soon be enrolled</div>
        </div>

        <div className={`flex  items-center  md:px-6 px-2 md:py-3 py-1 mx-auto border border-gray-200 hover:border-orange-300 md:w-1/3 w-full rounded-md m-2 ${selectedOption === 'Parent' ? 'border-orange-500' : 'border-gray-200'}`} onClick={() => handleOptionSelect('Parent')}>
          <div><img className='h-10 w-10 ' src='https://p7.hiclipart.com/preview/653/771/702/parent-computer-icons-clip-art-parents.jpg' alt='Parent'/></div>
          <div className='md:px-6 px-2 md:py-3 py-1 md:text-base text-sm'><span className='font-bold'>Parent</span> or soon be enrolled</div>
        </div>

        <div className={`flex  items-center  md:px-6 px-2 md:py-3 py-1 mx-auto border border-gray-200 hover:border-orange-300 md:w-1/3 w-full rounded-md m-2 ${selectedOption === 'Learner' ? 'border-orange-500' : 'border-gray-200'}`} onClick={() => handleOptionSelect('Learner')}>
          <div><img className='h-10 w-10 ' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWZ2lDC2qSK6hWM-QTMj1cef4mP9g9_6i94A&s' alt='Learner'/></div>
          <div className='md:px-6 px-2 md:py-3 py-1 md:text-base text-sm'><span className='font-bold'>Lifelong Learner</span></div>
        </div>

        <div className={`flex  items-center  md:px-6 px-2 md:py-3 py-1 mx-auto border border-gray-200 hover:border-orange-300 md:w-1/3 w-full rounded-md m-2 ${selectedOption === 'Teacher' ? 'border-orange-500' : 'border-gray-200'}`} onClick={() => handleOptionSelect('Teacher')}>
          <div><img className='h-10 w-10 ' src='https://www.kindpng.com/picc/m/100-1000523_computer-icons-clip-art-transparent-background-teacher-clipart.png' alt='Teacher'/></div>
          <div className='md:px-6 px-2 md:py-3 py-1 md:text-base text-sm'><span className='font-bold'>Teacher</span></div>
        </div>

        <div className={`flex  items-center  md:px-6 px-2 md:py-3 py-1 mx-auto border border-gray-200 hover:border-orange-300 md:w-1/3 w-full rounded-md m-2 ${selectedOption === 'Other' ? 'border-orange-500' : 'border-gray-200'}`} onClick={() => handleOptionSelect('Other')}>
          <div><img className='h-10 w-10 ' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS43vJi5O7hBmSoUiuIIc5_L-FDblbBCZ5s5TEh-WZwtQ&s' alt='Other'/></div>
          <div className='md:px-6 px-2 md:py-3 py-1 md:text-base text-sm'><span className='font-bold'>Other</span></div>
        </div>
      <Link to='/InterestSection'>  <button  className=' font-semibold rounded-md m-3 p-2 px-8 text-white bg-green-500 hover:bg-black'>Continue</button></Link>
        </div>
      </div>
    </div>
  );
};

export default DescriptionSelection;