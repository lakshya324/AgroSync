import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import bgHero  from '../assets/Component1.png';
import bgHero2 from '../assets/Component2.png';
import bgHero3 from '../assets/Component3.png';
import bgHero4 from '../assets/Component4.png';
import bgHero5 from '../assets/Component5.png';
import bgHero6 from '../assets/Component6.png';
import {useNavigate}  from "react-router-dom";

const imageSources = [
  bgHero,
  bgHero2,
  bgHero3,
  bgHero4,
  bgHero5,
  bgHero6,
];

function HomeBanner() {
  const [imageIndex, setImageIndex] = useState(0);
  const [input, setInput] = useState("");
  const [fadeClass, setFadeClass] = useState("image-transition");

  const navigate = useNavigate()

  const handleSubmit = ()=> {
 //navigate(`/posts?search=`)
 navigate(`/posts?search=${input}`)
   
  }

  const handleSearch = (searchTerm) => {
    //navigate(`/posts?search=`)
    navigate(`/posts?search=${searchTerm}`)
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass("image-transition-fadeout ");
      setTimeout(() => {
        setImageIndex((prevIndex) => (prevIndex >= imageSources.length - 1 ? 0 : prevIndex + 1));
        setFadeClass("image-transition-fadein");
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full pb-1 xl:pb-2 2xl:pb-64 z-10 bg-green-600 sm:bg-white bg-cover">
      <div className="absolute hidden sm:inline-block top-0 h-auto 2xl:h-[400px]  w-full transition-opacity z-0">
        <img
          alt="hero"
          src={imageSources[imageIndex]}
         className={`h-[500px] top-0 md:h-[430px] lg:h-[450px] xl:h-[500px] 2xl:h-[700px] w-full ${fadeClass}`}
        />
      </div>
      
      <div className="z-10 h-[500px] relative w-[400px] sm:w-[650px] flex pt-24  justify-center flex-col  gap-5 pl-12 sm:ml-4">
        <h1 className="text-white sm:text-5xl text-5xl leading-snug">
          Find the perfect&nbsp;
          <i>CROP</i>
          <br />
           for your business
        </h1>
        <div className="flex align-middle">
          <div className="relative">
            <IoSearchOutline className="absolute text-gray-500 text-2xl flex align-middle h-full left-2" />
            <input
              type="text"
              className="h-14 sm:w-[450px] w-[240px] pl-10 rounded-md rounded-r-none"
              placeholder={`Try "Finding any crop"`}
              
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <button
            className="bg-[#1DBF73] text-white  px-4 sm:px-12 text-lg font-semibold rounded-r-md"
            onClick={handleSubmit} 
          >
            Search
          </button>
        </div>
        <div className="text-white hidden sm:flex  gap-4">
          Popular:
          <ul className="flex  gap-5">
        <li className="text-sm py-1 px-3 border rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
            onClick={() => handleSearch('apple')}>
            Apple
        </li>
        <li className="text-sm py-1 px-3 border rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
            onClick={() => handleSearch('corn')}>
            Corn
        </li>
        <li className="text-sm py-1  px-3 border rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
            onClick={() => handleSearch('wheat')}>
            Wheat
        </li>
        <li className="text-sm py-1 px-3 border rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
            onClick={() => handleSearch('rice')}>
            Rice
        </li>
    </ul>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
