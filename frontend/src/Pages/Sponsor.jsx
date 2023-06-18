import React from 'react'
import spondummy from '../Assets/sponsorsdummy.png'
import spondummy2 from '../Assets/sponsorsdemo.png'

const Sponsor = () => {
  return (
    <section className="sponsor w-full bg-primary p-4">
        <div className="wrapper flex flex-col justify-center items-center  border-[1px] border-secondary p-6">
            <h1 className="text-4xl text-center text-secondary font-semibold py-12">Title Sponsor</h1>
            <div className="flex flex-col justify-center items-center border-[1px] border-secondary w-4/5 p-2 md:w-1/2">
                    <img className="" src={spondummy} alt="Event Image" />
                    <h1 className="text-xl text-center text-secondary ">Sponsor Name</h1>
            </div>
            <div className='w-full flex'>
                <div className='w-1/2 border-r-[1px] py-12 px-2'>
                    <h1 className="text-4xl text-right text-secondary font-semibold">Gold</h1>
                </div>
                <div className='w-1/2 py-12 px-2'>
                    <h1 className="text-4xl text-left text-secondary font-semibold">Sponsor</h1>
                </div>
            </div>
            <div className='w-4/5 grid grid-cols-1 md:grid-cols-3 gap-8 border-[1px] border-secondary p-6'>
                <div className=' flex flex-col justify-center items-center p-2'>   
                    <img className="" src={spondummy2} alt="Event Image" />
                    <h1 className="text-xl text-center text-secondary ">Sponsor Name</h1>
                </div>
                <div className='flex flex-col justify-center items-center  p-2'>   
                    <img className="" src={spondummy2} alt="Event Image" />
                    <h1 className="text-xl text-center text-secondary ">Sponsor Name</h1>
                </div>
                <div className='flex flex-col justify-center items-center  p-2'>   
                    <img className="" src={spondummy2} alt="Event Image" />
                    <h1 className="text-xl text-center text-secondary ">Sponsor Name</h1>
                </div>
            </div>
            <div className='w-full flex'>
                <div className='w-1/2 border-r-[1px] py-12 px-2'>
                    <h1 className="text-4xl text-right text-secondary font-semibold">Silver</h1>
                </div>
                <div className='w-1/2 py-12 px-2'>
                    <h1 className="text-4xl text-left text-secondary font-semibold">Sponsor</h1>
                </div>
            </div>
            <div className='w-4/5 grid grid-cols-1 md:grid-cols-4 gap-6 border-[1px] border-secondary p-6'>
                <div className=' flex flex-col justify-center items-center  p-2'>   
                    <img className="" src={spondummy2} alt="Event Image" />
                    <h1 className="text-xl text-center text-secondary ">Sponsor Name</h1>
                </div>
                <div className='flex flex-col justify-center items-center  p-2'>   
                    <img className="" src={spondummy2} alt="Event Image" />
                    <h1 className="text-xl text-center text-secondary ">Sponsor Name</h1>
                </div>
                <div className='flex flex-col justify-center items-center  p-2'>   
                    <img className="" src={spondummy2} alt="Event Image" />
                    <h1 className="text-xl text-center text-secondary ">Sponsor Name</h1>
                </div>
                <div className='flex flex-col justify-center items-center  p-2'>   
                    <img className="" src={spondummy2} alt="Event Image" />
                    <h1 className="text-xl text-center text-secondary ">Sponsor Name</h1>
                </div>
            </div>
            <div className='w-full flex'>
                <div className='w-1/2 border-r-[1px] py-12 px-2'>
                    <h1 className="text-4xl text-right text-secondary font-semibold">Bronze</h1>
                </div>
                <div className='w-1/2 py-12 px-2'>
                    <h1 className="text-4xl text-left text-secondary font-semibold">Sponsor</h1>
                </div>
            </div>
            <div className='w-4/5 grid grid-cols-1 md:grid-cols-4 gap-6 border-[1px] border-secondary p-6'>
                <div className=' flex flex-col justify-center items-center p-2'>   
                    <img className="" src={spondummy2} alt="Event Image" />
                    <h1 className="text-xl text-center text-secondary ">Sponsor Name</h1>
                </div>
                <div className='flex flex-col justify-center items-center  p-2'>   
                    <img className="" src={spondummy2} alt="Event Image" />
                    <h1 className="text-xl text-center text-secondary ">Sponsor Name</h1>
                </div>
                <div className='flex flex-col justify-center items-center p-2'>   
                    <img className="" src={spondummy2} alt="Event Image" />
                    <h1 className="text-xl text-center text-secondary ">Sponsor Name</h1>
                </div>
                <div className='flex flex-col justify-center items-center  p-2'>   
                    <img className="" src={spondummy2} alt="Event Image" />
                    <h1 className="text-xl text-center text-secondary ">Sponsor Name</h1>
                </div>
                <div className=' flex flex-col justify-center items-center  p-2'>   
                    <img className="" src={spondummy2} alt="Event Image" />
                    <h1 className="text-xl text-center text-secondary ">Sponsor Name</h1>
                </div>
                <div className='flex flex-col justify-center items-center  p-2'>   
                    <img className="" src={spondummy2} alt="Event Image" />
                    <h1 className="text-xl text-center text-secondary ">Sponsor Name</h1>
                </div>
                <div className='flex flex-col justify-center items-center  p-2'>   
                    <img className="" src={spondummy2} alt="Event Image" />
                    <h1 className="text-xl text-center text-secondary ">Sponsor Name</h1>
                </div>
                <div className='flex flex-col justify-center items-center  p-2'>   
                    <img className="" src={spondummy2} alt="Event Image" />
                    <h1 className="text-xl text-center text-secondary ">Sponsor Name</h1>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Sponsor
