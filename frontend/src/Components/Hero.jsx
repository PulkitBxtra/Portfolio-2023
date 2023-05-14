import React from 'react'

function hero() {
  return (
    <React.Fragment>
      <div className="bg-[#000000] flex h-max mx-5 flex-col">
        <div className='m-10'>
          <p className='text-[#DAF25E] anton text-3xl'>Hi! My Name is</p>
          <p className='text-[#DAF25E] anton text-5xl'>PULKIT BATRA</p>
          <p className='text-[#DAF25E] anton text-xl mt-5'>I'm a Junior at NSUT</p>
          <p className='text-[#DAF25E] anton text-xl'>I'm Currently a SDE intern @ MattYoungMedia</p>
          <p className='text-[#DAF25E] anton text-xl'>I'm a FullStack Developer</p>
          <p className='text-[#DAF25E] anton text-xl'>I'm Batman but Don't tell anyone 🤫</p> 
        </div>

        <div className='m-10'>
          <p className='text-[#DAF25E] anton text-3xl'>Reach me out on</p> 
          <a href="https://www.linkedin.com/in/pulkitbxtra/" className='text-[#DAF25E] anton text-xl'>LinkedIn</a>
          <br />
          <a href="https://github.com/PulkitBxtra" className='text-[#DAF25E]  anton text-xl'>GitHub</a>
          <br />
          <a href="mailto:pulkit2489k@gmail.com" className='text-[#DAF25E]  anton text-xl'>Email</a>


        <div className='mt-20'>
          <p className='text-[#DAF25E] anton text-xs'>©BatraLabs 2023</p> 
        </div>

        </div>
      </div>
    </React.Fragment>
  )
}

export default hero