import React from 'react'
import { useNavigate } from 'react-router-dom'
import Icon from './icon'
const Navbar = () => {
  const user=localStorage.getItem("profile")
  const navigate=useNavigate()
  const handleClick=()=>{
    navigate('/CreatePost')
  }
  return (
    <>
    
    <div className="grid grid-flow-col place-items-center bg-blue-400  justify-between sticky top-0 h-12 p-1" >
first project
<div className=' w-36 flex justify-between'>
{user &&
<button className=" cursor-pointer  border-2 rounded-xl bg-green-100 border-blue-900 h-fit" onClick={handleClick}>&nbsp;createPost&nbsp;</button>
}
<button className=' cursor-pointer  border-2 rounded-full bg-green-100 border-blue-900 h-fit p-1' onClick={()=>navigate('/auth')}><Icon/></button>
</div>
    </div>
   
    
    </>
  )
}

export default Navbar