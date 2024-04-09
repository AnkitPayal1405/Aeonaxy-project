import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import FinalAnswer from './FinalAnswer';

const EndScreen = () => {
    const [showFirstComponent, setShowFirstComponent] = useState(true);
    

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowFirstComponent(false);
      }, 2000);
  
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <div>
        {showFirstComponent ? <Loader/> : <FinalAnswer/>}
      </div>
    );
  };

export default EndScreen