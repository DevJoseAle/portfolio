import { portfolios } from '../constants/portfolios'

const PortFolio = () => {
  return (
    <div name="portfolio"
        className='bg-gradient-to-b from-black via-black to-gray-800 w-full md:h-screen text-white  '>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'> 
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my works right here: </p>
            </div>

            <div  className=' grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {
                    portfolios.map(({id, src, title, url}) => (

                        <div  key={id} className='shadow-md shadow-gray-600 rounded-lg w-60  h-56'>
                            <img src={src} alt="" 
                                className='rounded-md duration-200 hover:scale-110 w-60 h-40'/>
                            <div className='flex items-center justify-center '>
                                <p> {title} </p>
                                <button className=' px-5 p-1 m-4 duration-200 hover:scale-110'>
                                    <a href={url}> Demo</a></button>
                            
                            </div>
                    </div>
            

                    ))
                }
            </div>

            
        </div>
    </div>
  )
}

export default PortFolio