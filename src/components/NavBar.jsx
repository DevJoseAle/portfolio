import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { rutas2 } from "../constants/rutas"
import {Link} from 'react-scroll'


const NavBar = () => {

    const [nav, setNav] = useState(false)
    
  return (
    <div className=" flex justify-between px-4 items-center w-full h-20 text-white fixed bg-black">

        <div>
            <h1 className=" text-5xl font-signature">Dev - JoseAle</h1>
        </div>

        <ul className=" hidden md:flex ">

        {
            rutas2.map(({id, link}) =>(
                
                <li key={id} className="px-4 cursor-pointer capitalize text-2xl text-gray-200 hover:scale-105 duration-200" >
                     <Link to={link} smooth duration={800} >
                        {link} 
                     </Link>
                </li>                
            ))
        }

        </ul>

        <div onClick={ () => setNav(!nav)} className=" cursor-pointer pr-4 z-10  text-gray-200 md:hidden">

            {nav ?  <FaTimes size={30} /> : <FaBars size={30}/>}

        </div>

        { 
            nav &&(

            <ul className=" flex flex-col justify-center items-center absolute top-0  left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800  text-gray-400">
                    {
                        rutas2.map(({id, link}) =>(
                            <li key={id} className="py-4 cursor-pointer capitalize text-4xl text-gray-200 hover:scale-105 duration-200"> 
                                <Link to={link} smooth duration={800} onClick={(()=> setNav(!nav))} >
                                        {link} 
                                </Link>
                             </li>
                        ))
                    }
                
                
            </ul>

            )
         }

        
    </div>
  )
}

export default NavBar