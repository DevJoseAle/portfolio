import React from 'react'

const About = () => {
  return (
    <div name='about'
        className=' w-full h-screen bg-gradient-to-b from-gray-800 via-gray-800 to-black text-white'
        >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
                <p className=' text-4xl font-bold inline border-b-4 border-gray-500'> 
                    ABOUT 
                </p>
            </div>
            <div className='pb-8'>
            <p className='mt-16 text-2xl'>Hello, my name is José Rodríguez and I am a 33-year-old certified Front-End Developer from Venezuela. I have been living in Chile since 2017 and have been passionate about the IT world for as long as I can remember.</p>
            
            <p className=' mt-6 text-2xl'>

            I have a certification in Front-End Development and have experience working with Node.js, Express, and Firebase. I am also skilled in mobile app development and have knowledge of Flutter and Dart.
            </p>
            <p className=' mt-6 text-2xl'>

            I am constantly striving to learn new technologies and improve my skills in the field. I have a strong passion for creating beautiful and functional mobile apps and websites.
            </p>
            <p className='mt-6 text-2xl'>

            In my free time, I love to read about new developments in the IT industry and explore the latest technologies. I am also an avid traveler and enjoy exploring different cultures.
            </p>

            <p className='mt-6 text-2xl'>

            I am always eager to work on new projects and am always looking for opportunities to expand my knowledge and experience. Thank you for visiting my web portfolio, and I hope to hear from you soon.

            </p>
        </div>
    </div>
</div>
  )
}

export default About