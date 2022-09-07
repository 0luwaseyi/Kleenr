import React, {useEffect} from 'react';
import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Routers from './Routers';
import Signup from './Signup';
import Login from './Login';



function App(){

    useEffect(()=>{
        document.title = "Home"
    })


    return(
        <div>
          

            <Router basename={process.env.BASE_URL}>
                <div className="App">
     

                    
                    
                
                    <Routes>
                        <Route path= "#" element = {<Login/>}/>
                        <Route path="/signup" element={<Signup />} />
                        <Route path ="/" element = {<Routers />}/>


                    </Routes>
                    

                </div>
                


            </Router>

            
        </div>
    )
}

export default App;