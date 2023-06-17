import React from "react";
import teamsdummy from '../Assets/teamphoto2.png'

const Teams = () => {
  return (
    <section className="teams bg-primary">
        <div className=" flex items-center justify-center w-full border-y-2 border-secondary">
          <h1 className='font-400 text-6xl text-secondary py-2 md:py-6'> OUR TEAM</h1>
        </div>
        <div className=" flex items-center justify-center w-full border-y-2 border-secondary">
          <h1 className='font-300 text-3xl text-secondary py-2 md:py-6'> COUNCIL </h1>
        </div>
        <div className="teamsBody flex justify-center items-center">
                <div className="font-400 lg:text-5xl md:text-3xl text-secondary rotate-[-90deg]">
                  COUNCIL
                </div>
                <div className="teamsLayout grid grid-cols-1 md:grid-cols-3 ">
                      <div className="">
                        <img src={teamsdummy} alt="Event Image" />
                      </div>
                      <div className="">
                        <img src={teamsdummy} alt="Event Image" />
                      </div>
                      <div className="">
                        <img src={teamsdummy} alt="Event Image" />
                      </div>
                      <div className="">
                        <img src={teamsdummy} alt="Event Image" />
                      </div>
                      <div className="">
                        <img src={teamsdummy} alt="Event Image" />
                      </div>
                      <div className="">
                        <img src={teamsdummy} alt="Event Image" />
                      </div>
                </div>
                <div className="font-400 lg:text-5xl md:text-3xl text-secondary rotate-[-90deg]">
                  COUNCIL
                </div>
        </div>
        <div className="flex items-center justify-center w-full border-y-2 border-secondary">
          <h1 className='font-300 text-4xl text-secondary py-2 md:py-6'>EXECUTIVES</h1>
        </div>
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-20">
          <div className="text-secondary flex flex-col items-center justify-center font-200 text-2xl ">
            <p>Akshit</p>
            <p>Vidhi</p>
            <p>Manas</p>
            <p>Pranjal</p> 
            <p>Aayush</p>
            <p>Arpit</p>
            <p>Vidushi</p>            
          </div>  
          <div className="text-secondary flex flex-col items-center justify-center font-200 text-2xl">
            <p>Manas</p>
            <p>Arnav</p>
            <p>Aparna</p>
            <p>Nikhilesh</p>
            <p>Harshit</p>
            <p>Shashank</p>
            <p>Ankush</p>
            
          </div>
          <div className="text-secondary flex flex-col items-center justify-center font-200 text-2xl px-12">
            <p>Amritansh</p>
            <p>Aman</p>
            <p>Ritwija</p>
            <p>Shashwat</p>
            <p>Manav</p>
            <p>Suvrat</p>
            <p>Yatharth</p>
          </div>
        </div>
    </section>
  )
  
};

export default Teams;
