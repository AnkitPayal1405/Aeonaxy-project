import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase, faChild, faUserGraduate, faChalkboardTeacher, faUserAlt } from '@fortawesome/free-solid-svg-icons';

const Ransom = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-lg font-bold mb-2 text-center">What best describes you?</h2>
        <p className="text-sm text-gray-600 mb-4 text-center">This will help us personalize your experience.</p>

        <div className="grid grid-cols-1 gap-4">
          <button className="flex items-center justify-start px-4 py-2 bg-white text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400">
            <FontAwesomeIcon icon={faGraduationCap} className="mr-2 text-yellow-500" />
            <span>Student or prospective student</span>
          </button>
          <button className="flex items-center justify-start px-4 py-2 bg-white text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400">
            <FontAwesomeIcon icon={faBriefcase} className="mr-2 text-green-500" />
            <span>Professional seeking a career</span>
          </button>
          <button className="flex items-center justify-start px-4 py-2 bg-white text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400">
            <FontAwesomeIcon icon={faChild} className="mr-2 text-blue-500" />
            <span>Parent of a school-age child</span>
          </button>
          <button className="flex items-center justify-start px-4 py-2 bg-white text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400">
            <FontAwesomeIcon icon={faUserGraduate} className="mr-2 text-green-500" />
            <span>Lifelong learner</span>
          </button>
          <button className="flex items-center justify-start px-4 py-2 bg-white text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400">
            <FontAwesomeIcon icon={faChalkboardTeacher} className="mr-2 text-red-500" />
            <span>Educator</span>
          </button>
          <button className="flex items-center justify-start px-4 py-2 bg-white text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400">
            <FontAwesomeIcon icon={faUserAlt} className="mr-2 text-gray-400" />
            <span>Other</span>
          </button>
        </div>

        <button className="mt-6 w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400">
          Continue
        </button>
      </div>
    </div>
  );
};

export default Ransom;