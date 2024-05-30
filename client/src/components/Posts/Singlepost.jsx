import React from 'react'
// import Slider from 'infinite-react-carousel';
import star from '../assets/star.png';
import like from '../assets/like.png'
import dislike from '../assets/dislike.png'
import check from '../assets/checked.png'
import clock from '../assets/wall-clock.png'
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import pfp from "../assets/user.png";
import Reviews from './Reviews';

function singlepost() {
  const { id } = useParams();


  const { isLoading, error, data } = useQuery({
    queryKey: ["post"],
    queryFn: () =>
      newRequest.get(`/posts/single/${id}`).then((res) => {
        return res.data;
      }),
  });


  const userId = data?.userId;

  const {
    isLoading: isLoadingUser,
    error: errorUser,
    data: dataUser,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      newRequest.get(`/users/${userId}`).then((res) => {
        return res.data;
      }),
    enabled: !!userId,
  });
  
  return (
    <div className="flex pt-20 justify-center">
    { isLoading ? (
        "loading"
      ) : error ? (
        "Something went wrong!"
      ) : (<div className="w-full flex-wrap flex-col-reverse sm:flex-row py-8 flex gap-10">
      <div className="flex-2 w-full sm:w-2/3 px-8 sm:px-12 flex flex-col gap-4">
        <span className="font-bold text-2xl text-gray-800"> Seasonal Crops</span>
        <h1 className='text-xl font-medium text-gray-600'>{data.title}</h1>
        {isLoadingUser ? (
              "loading"
            ) : errorUser ? (
              "Something went wrong!"
            ) : (
        <div className="flex items-center  gap-3">
          <img
            className="w-12 h-12 object-cover rounded-full"
            src={dataUser.img || pfp }
            alt=""
          />
          <span className='text-xl font-medium'>{dataUser.username}</span>
          {!isNaN(data.totalStars / data.starNumber) && (
          <div className="flex items-center gap-2">
                {Array(Math.round(data.totalStars / data.starNumber))
                      .fill()
                      .map((item, i) => (
                        <img className='w-3 h-3' src={star} alt="" key={i} />
                      ))}
            <span className='font-bold text-lg text-yellow-400'>{Math.round(data.totalStars / data.starNumber)}</span>
          </div>
          )}
        </div>
         )}
        <div className='hover:cursor-pointer  ' >
           {data.images.map((img) => (
                <img className='rounded-xl' key={img} src={img} alt="" />
              ))} </div>
        <h2 className='text-lg font-medium '>About This Seller</h2>
        <p className='text-gray-700' >
        {data.desc}
        </p>
        {isLoadingUser ? (
              "loading"
            ) : errorUser ? (
              "Something went wrong!"
            ) : (
        <div className="mt-12 flex flex-col gap-4">
          <h2 className='text-lg font-medium mb-4'>About The Seller</h2>
          <div className="flex items-center gap-4">
            <img className='w-[100px] h-[100px] rounded-full  object-cover'
              src={dataUser.img || pfp }
              alt=""
            />
            <div className="info flex flex-col">
              <span className='text-xl font-medium'>{dataUser.username}</span>
              {!isNaN(data.totalStars / data.starNumber) && (
          <div className="flex items-center gap-2">
                {Array(Math.round(data.totalStars / data.starNumber))
                      .fill()
                      .map((item, i) => (
                        <img className='w-3 h-3' src={star} alt="" key={i} />
                      ))}
            <span className='font-bold text-lg text-yellow-400'>{Math.round(data.totalStars / data.starNumber)}</span>
          </div>
          )}
              <button className='bg-green-500  text-white rounded-sm mt-2 p-2 cursor-pointer'>Contact Me</button>
            </div>
          </div>
          <div className="border-1 rounded-md p-5 mt-5">
            <div className="flex w-full flex-wrap justify-between">
              <div className="w-[300px] flex flex-col gap-3 mb-3">
                <span className="text-gray-500 font-medium text-lg">From</span>
                <span className="font-bold text-gray-700">{dataUser.country}</span>
              </div>
              <div className="w-[300px] flex flex-col gap-3 mb-3">
                <span className="text-gray-500 font-medium text-lg">Member since</span>
                <span className="font-bold text-gray-700">Aug 2022</span>
              </div>
              <div className="w-[300px] flex flex-col gap-3 mb-3">
                <span className="text-gray-500 font-medium text-lg">Avg. response time</span>
                <span className="font-bold text-gray-700">4 hours</span>
              </div>
              <div className="w-[300px] flex flex-col gap-3 mb-3">
                <span className="text-gray-500 font-medium text-lg">Last delivery</span>
                <span className="font-bold text-gray-700">1 day</span>
              </div>
              <div className="w-[300px] flex flex-col gap-3 mb-3">
                <span className="text-gray-500 font-medium text-lg">Languages</span>
                <span className="font-bold text-gray-700">English</span>
              </div>
            </div>
            <hr  className='h-0 border border-gray-500 mt-5 mb-16'/>
            <p className='text-gray-700'>
              {dataUser.desc}
            </p>
          </div>
        </div>
          )}
          <Reviews postId={id} />
        </div>
      <div className="flex-1 border-3 border-gray-400 p-5 flex flex-wrap flex-col gap-5 sm:sticky  top-[50px] max-h-content max-h-[500px] ">
        <div className="flex items-center justify-between">
          <h3 className='font-medium text-xl'> {data.shortTitle}</h3>
          <h2 className='font-normal text-xl'>₹ {data.price} /Kg</h2>
        </div>
        <p className='text-gray-600 mt-3'>
        {data.shortDesc}
        </p>
        
        <div className="flex items-center justify-between text-lg">
          <div className="flex items-center gap-3">
            <img className='w-5' src={clock} alt="" />
            <span>{data.deliveryTime}Days Delivery</span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
        {data.features.map((feature) => (
                <div className='flex items-center gap-3 text-medium text-gray-600'  key={feature}>
                  <img src={check} className='w-5' alt="" />
                  <span>{feature}</span>
                </div>
              ))}
        </div>
        <button className='bg-green-600 p-3 text-white rounded-md border-none font-medium text-lg cursor-pointer'>Continue</button>
      </div>
    </div>)}
  </div>
  )
}

export default singlepost
