import { TiArrowRightThick} from 'react-icons/ti'
import HeroImage2 from '../assets/HeroImage2.png'
import {Link} from 'react-scroll'



const Home = () => {
  return (
    <div name="home"
        className='flex h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 sm:pt-36 xs:pt-36 '  >
        <div className=' max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-white'>

            <div className=' flex flex-col justify-center h-full'>
                <h2 className='text-white text-4xl sm:text-7xl font-bold'>I'm a FullStack Developer - MERN Stack</h2>
                <p className=' text-gray-400 py-4 max-w-md'>
                    I'm a certified Front-End React Developer.
                    
                    I have 2 years of experience building software.
                    Currently, I love to work on web applications using technologies like React, Tailwind, FireStore, Node JS, MongoDB

                </p>

                <div>
                    <Link to="portfolio" smooth duration={800} className=' group text-white w-fit px-6 py-3 my-2 bg-blue-400 rounded-2xl flex items-center bg-gradient-to-b from-blue-300 to-blue-400 text-gray-700 font-bold'>
                    
                            PortFolio 
                     
                       
                        <span className=' group-hover:rotate-90 duration-300 pl-2 pb-1'>
                            <TiArrowRightThick/>
                        </span>
                    </Link>
                </div>
            </div>

            <div>
                <img className='rounded-full mx-auto w-2/3 md:w-full' src={HeroImage2} alt="my pict" />
            </div>
        </div>
    </div>
  )
}

export default Home
