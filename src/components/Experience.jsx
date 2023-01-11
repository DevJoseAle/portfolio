import { techs } from "../constants/techs"

const Experience = () => {
  return (
    <div name="experience" 
      className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>

      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>

        <div>

          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>

          <p className='py-6'>Technologies I've worked with</p>

        </div>

        <div 
            
            className='w-full h-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

          {
            techs.map(({id, src, title, style}) =>(

              
                <div key={id} className={`shadow-lg hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>

                  <img src={src} alt="html logo" className='w-28 mx-auto' />
                  <p className='mt-4 font-semibold'> {title} </p>

                </div>

            ))
            }
            </div>
        

      </div>

    </div>
  )
}

export default Experience
