import React from 'react';
import Header from './componets/Header';
import './App.css';
import Auth from './componets/auth'
import Footer from './componets/footer'
import {Routes,Route} from 'react-router-dom'
import Home from './componets/home'
import Posts from './componets/posts'
import UpdatePost from './componets/updatePost'
import Createpost from './componets/createpost';
import { useLocation } from 'react-router-dom';
import Navbar from './componets/Header';
function App() {
  
  const auth =useLocation()
  

  return (
    <>
  
  <Header/>
  
  
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      
      <Route path="/auth" element={<Auth/>} className="auth"/>
      <Route path="/posts" element={<Posts/>}/>
      <Route path="/createPost" element={<Createpost/>}/>
      <Route path="/updatePost" element={<UpdatePost/>} />
    </Routes>
   < Footer/>
    
     
    

   
   
  
    </>
   
  
  
  );
}

export default App;
