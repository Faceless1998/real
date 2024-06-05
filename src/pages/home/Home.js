import React, {useState} from 'react'

import "./style.css"
import CompanyList from './CompanyList';

export const Home = () => {

    const [isHomeOpen, setIsHomeOpen] = useState(true);
    const [isAwayOpen, setIsAwayOpen] = useState(false);
    const [isThirdOpen, setIsThirdOpen] = useState(false);


    const handleHomeOpen = () =>{
        setIsHomeOpen(true);
        setIsAwayOpen(false);
        setIsThirdOpen(false);
    }

    const handleAwayOpen = () =>{
        setIsHomeOpen(false);
        setIsAwayOpen(true);
        setIsThirdOpen(false);
    }

    const handleThirdOpen = () =>{
        setIsHomeOpen(false);
        setIsAwayOpen(false);
        setIsThirdOpen(true);
    }

  return (
//     <div>
//         <div className='title'>
//             Create your own
//         </div>

//         <div className='tab'>
//             <div className={`item ${isHomeOpen ? "active" : ""}`} onClick={handleHomeOpen}>Home</div>
//             <div className={`item ${isAwayOpen ? "active" : ""}`} onClick={handleAwayOpen}>Away</div>
//             <div className={`item ${isThirdOpen ? "active" : ""}`} onClick={handleThirdOpen}>Third</div>
//         </div>
    
//     {
//       isHomeOpen && (
//         <div>
//                 Home
//         </div>
//       )  
//     }

//     {
//         isAwayOpen && (
//             <div>
//                 Away
//             </div>
//         )
//     }

// {
//         isThirdOpen && (
//             <div>
//                 Third
//             </div>
//         )
//     }

//     </div>

<>

<CompanyList />
</>
  )
}
