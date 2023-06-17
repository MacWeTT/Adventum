import React from "react";
import eventsdummy from '../Assets/eventdummy.png'

const Teams = () => {
  return (
    <section className="teams bg-primary">
        <div className=" flex items-center justify-center w-full border-y-2 border-secondary">
          <h1 className='font-bold text-3xl text-secondary py-2 md:py-6'>Teams</h1>
        </div>
        <div className="teamsBody flex justify-center items-center">
                <div className="font-bold md:text-3xl text-secondary rotate-[-90deg]">
                  COUNCIL
                </div>
                <div className="teamsLayout grid grid-cols-1 md:grid-cols-3 ">
                      <div className="">
                        <img src={eventsdummy} alt="Event Image" />
                      </div>
                      <div className="">
                        <img src={eventsdummy} alt="Event Image" />
                      </div>
                      <div className="">
                        <img src={eventsdummy} alt="Event Image" />
                      </div>
                      <div className="">
                        <img src={eventsdummy} alt="Event Image" />
                      </div>
                      <div className="">
                        <img src={eventsdummy} alt="Event Image" />
                      </div>
                      <div className="">
                        <img src={eventsdummy} alt="Event Image" />
                      </div>
                </div>
                <div className="font-bold md:text-3xl text-secondary rotate-[-90deg]">
                  COUNCIL
                </div>
        </div>
        <div className="flex items-center justify-center w-full border-y-2 border-secondary">
          <h1 className='font-bold text-3xl text-secondary py-2 md:py-6'>Executives</h1>
        </div>
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4">

          <div className="text-secondary flex flex-col items-center justify-center">
            <p>XYZ</p>
            <p>XYZ</p>
            <p>XYZ</p>
            <p>XYZ</p>
            <p>XYZ</p>
          </div>
          <div className="text-secondary flex flex-col items-center justify-center">
            <p>XYZ</p>
            <p>XYZ</p>
            <p>XYZ</p>
            <p>XYZ</p>
            <p>XYZ</p>
          </div>
          <div className="text-secondary flex flex-col items-center justify-center">
            <p>XYZ</p>
            <p>XYZ</p>
            <p>XYZ</p>
            <p>XYZ</p>
            <p>XYZ</p>
          </div>
          <div className="text-secondary flex flex-col items-center justify-center">
            <p>XYZ</p>
            <p>XYZ</p>
            <p>XYZ</p>
            <p>XYZ</p>
            <p>XYZ</p>
          </div>
          <div className="text-secondary flex flex-col items-center justify-center">
            <p>XYZ</p>
            <p>XYZ</p>
            <p>XYZ</p>
            <p>XYZ</p>
            <p>XYZ</p>
          </div>
          <div className="text-secondary flex flex-col items-center justify-center">
            <p>XYZ</p>
            <p>XYZ</p>
            <p>XYZ</p>
            <p>XYZ</p>
            <p>XYZ</p>
          </div>
        </div>
    </section>
  )
  
};

export default Teams;
