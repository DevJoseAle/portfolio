import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='bg-gradient-to-b from-black via-black to-gray-800 w-full md:h-screen text-white '>
        <div className=' flex flex-col p4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='p-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>CONTACT ME:</p>
                <p className='py-6'>Submit the form below to get in touch with me</p>
            </div>

            <div className='flex justify-center items-center'>
                <form 
                    type="submit"
                    className='flex flex-col w-full md:w-1/2'
                    action="https://getform.io/f/a2c9c071-858b-462d-9d6d-4c565962bcc4"
                    method="POST">
                    <input 
                        type="text" 
                        name="name" 
                        id="" 
                        placeholder='Your name 😀'
                        className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                        />
                    <input 
                        type="text" 
                        name="email" 
                        id="" 
                        placeholder='Enter your email 📨'
                        className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-6'
                        />
                    <textarea 
                        type="text" 
                        name="message" 
                        id="" 
                        rows={10}
                        placeholder='Your name 😀'
                        className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                        ></textarea>

                        <button className=' w-40  px-9 py-3 my-2 bg-blue-400 rounded-2xl flex items-center  bg-gradient-to-b from-blue-300 to-blue-400 text-gray-200 font-bold hover:scale-110 duration-300'> Let's Talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact