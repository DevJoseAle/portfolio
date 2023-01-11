import { FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill} from 'react-icons/bs'

export const links =[
    {
        id:1,
        child: ( 
            <>
                 LinkdIn <FaLinkedin size={30} />
            </> 
        ),
        href: 'https://www.linkedin.com/in/jos%C3%A9-alejandro-rodr%C3%ADguez-peraza-8823518a/'

    },
    {
        id:2,
        child: ( 
            <>
                 GitHub <FaGithub size={30} />
            </> 
        ),
        href: 'https://github.com/DevJoseAle'

    },
    {
        id:3,
        child: ( 
            <>
                 Mail <HiOutlineMail size={30} />
            </> 
        ),
        href: 'mailto: jrodriguezp265@gmail.com'
        
    },
    {
        id:4,
        child: ( 
            <>
                 Resume <BsFillPersonLinesFill size={30} />
            </> 
        ),
        href: '/resume.pdf',
        download: true,
        
    },
]