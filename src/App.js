
import { createBrowserRouter, Outlet } from 'react-router-dom';
import './App.css';
import ComfortLevel from './ComfortLevel';
import DescriptionSelection from './DescriptionSelection';
import InterestSection from './InterestSection';
import RightPlace from './RightPlace';
import YourWay from './YourWay';
import EndScreen from './EndScreen';


function App() {
  return (
    <div >
   <Outlet/>
    
    </div>
  );
}

export const appRouter =  createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<DescriptionSelection/>
      },
      {
        path:'/InterestSection',
        element:<InterestSection/>
      },
      {
        path:'/InterestSection/RightPlace',
        element:<RightPlace/>
      },{
        path:'/InterestSection/RightPlace/ComfortLevel',
        element:<ComfortLevel/>
      },{
        path:'/InterestSection/RightPlace/ComfortLevel/YourWay',
        element:<YourWay/>
      },{
        path:'/InterestSection/RightPlace/ComfortLevel/YourWay/EndScreen',
        element:<EndScreen/>
      }
    ]
  }
])

export default App;
