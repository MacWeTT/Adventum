import React from 'react';
import sponsdummy from '../Assets/sponsorsdemo.png'
import spondummy from '../Assets/sponsorsdummy.png'


const Sponsors = () => {
  return (
    <section className="flex justify-center items-center pt-8 pb-8 bg-primary">
    <div className="flex justify-center items-center bg-transparent border-white border-2 p-4  ">
      <div className="max-w-4xl w-full h-full">
        <div className="text-gray-300 text-center font-300 text-5xl  p-6">GOLD SPONSOR</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4 border-white border-2 pt-3 ">
          <div className="shadow-lg p-2 lg:ml-12">
          <img className="" src={spondummy} alt="Event Image" /></div>
          <p className="text-gray-300 text-center text-1xl pb-4">Sponsor1</p>
        </div>
        <div className="text-gray-300 text-center font-300 text-5xl  p-6">SILVER SPONSOR</div>
        <div className="grid grid-cols-1  md:grid-cols-3  gap-4 border-white border-2 ">
        <div className="  shadow-lg p-8 ml-8 "><img src={sponsdummy} alt="Event Image" /><p className="text-gray-300 text-center text-1xl pt-3">Sponsor2</p></div>
          <div className="  shadow-lg p-8 ml-8">
          <img src={sponsdummy} alt="Event Image" /><p className="text-gray-300 text-center text-1xl  pt-3">Sponsor3</p></div>
          <div className="  shadow-lg p-8 ml-8 ">
          <img src={sponsdummy} alt="Event Image" /><p className="text-gray-300 text-center text-1xl pt-3">Sponsor4</p></div>
        </div>
        <div className="text-gray-300 text-center font-300 text-5xl p-6">PLATINUM SPONSOR</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 border-white border-2 ">
        <div className="  shadow-lg p-8  ml-8 ">
          <img src={sponsdummy} alt="Event Image" /><p className="text-gray-300 text-center text-1xl pt-3">Sponsor5</p></div>
          <div className="  shadow-lg p-8 ml-8 ">
          <img src={sponsdummy} alt="Event Image" /><p className="text-gray-300 text-center text-1xl pt-3">Sponsor6</p></div>     
          <div className="  shadow-lg p-8  ml-8 ">
          <img src={sponsdummy} alt="Event Image" /><p className="text-gray-300 text-center text-1xl pt-3">Sponsor7</p></div>
          <div className="  shadow-lg p-8  ml-8 ">
          <img src={sponsdummy} alt="Event Image" /><p className="text-gray-300 text-center text-1xl pt-3">Sponsor8</p></div>
          </div>
        <div className="text-gray-300 text-center font-300 text-5xl  p-6">BRONZE SPONSOR</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  border-white border-2">
          <div className="  shadow-lg p-8 ml-8 ">
          <img src={sponsdummy} alt="Event Image" /><p className="text-gray-300 text-center text-1xl pt-3">Sponsor9</p></div>  
          <div className="  shadow-lg p-8  ml-8 ">
          <img src={sponsdummy} alt="Event Image" /><p className="text-gray-300 text-center text-1xl pt-3">Sponsor10</p></div>     
          <div className="  shadow-lg p-8  ml-8 ">
          <img src={sponsdummy} alt="Event Image" /><p className="text-gray-300 text-center text-1xl pt-3">Sponsor11</p></div>  
          <div className="  shadow-lg p-8 2 ml-8 ">
          <img src={sponsdummy} alt="Event Image" /><p className="text-gray-300 text-center text-1xl pt-3">Sponsor12</p></div>  
          <div className="  shadow-lg p-8 ml-8 ">
          <img src={sponsdummy} alt="Event Image" /><p className="text-gray-300 text-center text-1xl pt-3">Sponsor13</p></div>  
          <div className="  shadow-lg p-8  ml-8 ">
          <img src={sponsdummy} alt="Event Image" /><p className="text-gray-300 text-center text-1xl pt-3">Sponsor14</p></div>  
          <div className="  shadow-lg p-8  ml-8 ">
          <img src={sponsdummy} alt="Event Image" /><p className="text-gray-300 text-center text-1xl pt-3">Sponsor15</p></div>  
          <div className="  shadow-lg p-8 ml-8 ">
          <img src={sponsdummy} alt="Event Image" /><p className="text-gray-300 text-center text-1xl pt-3">Sponsor16</p></div>  
        </div>

      </div>
    </div>
    </section>
  );
};


export default Sponsors;