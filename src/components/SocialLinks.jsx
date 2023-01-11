import { FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill} from 'react-icons/bs'
import { links } from '../constants/links'


const SocialLinks = () => {
  return (
    <div className=' hidden lg:flex flex-col top-[70%] left-0 fixed  rounded-3xl'>
        <ul>
            {
                links.map(({id, href, child, download}) =>(
                    <li key={id} className='flex justify-between items-center w-40 h-10 px-4 bg-gray-700 rounded-md ml-[-100px] hover:ml-[-10px] duration-300'> 
                        <a href={href} className=' flex justify-between items-center text-white w-full '
                        download={download}
                        target="_blank"
                        rel='noreferrer'
                        > 
                            {child}
                            
                        </a> 
                    </li>
                ))
            }
            
        </ul>
    </div>
  )
}

export default SocialLinks

/*
    <>
        LinkdIn <FaLinkedin size={30} />
    </>
*/