import {useState} from 'react';
// import './App.css';
import FirstPage from './FirstPage';
function App() {
    
      const[showFirstPage,setShowFirstPage]=useState(false)
      const userDetails={
        name: "nagesh",
        city:"mumbai" 
         }
         const country ="India";
         const openFirstPage =()=>{
          setShowFirstPage(true)
         };

         return (
          <>
          <div>
          <button onClick={openFirstPage}>Call First page</button>
          </div>
          {showFirstPage && <FirstPage
          data ={userDetails}
          countryDetails ={country}
          />};
          </>
         )

     

























     
  

}

export default App;
