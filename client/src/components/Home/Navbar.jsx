import React, { useState, useEffect } from "react";
import { useSpring, animated } from 'react-spring';
import { IoSearchOutline } from "react-icons/io5";
import AgroLogo from "../assets/AgroSync.png";
import { Link, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import { useAuth } from '../../context/AuthContext';
import toast from "react-hot-toast";


function Navbar() {
  const [searchData, setSearchData] = useState("");
  const [scrolling, setScrolling] = useState(false);
  const [Open, setOpen] = useState(false);
  const [bgColorScrolling, setBgColorScrolling] = useState(false);
  const commonImageUrl = 'https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg';
 // const [currentUser, setcurrentUser] = useState(null);
 const { currentUser, logout } = useAuth();

    useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;

      if (scrolled >= 340) {
        setScrolling(true);
      } else if (scrolled >= 40) {
        setBgColorScrolling(true);
      } else {
        setScrolling(false);
        setBgColorScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // const storedUser = JSON.parse(localStorage.getItem("currentUser"));


    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentUser]);

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      setOpen(false);
      toast.success("user logged out successfully");
      logout();
    } catch (err) {
      console.log(err);
    }
  };

  const navigate = useNavigate()
  const handleSearch = () => {
    //navigate(`/posts?search=`)
    navigate(`/posts?search=${searchData}`)
  };
 

  const bgColorSpring = useSpring({
    backgroundColor: bgColorScrolling ? 'white' : 'transparent',
  });

  const [searchAnimation, setSearchAnimation] = useSpring(() => ({
    opacity: scrolling ? 1 : 0,
    transform: `translateY(${scrolling ? 0 : -20}px)`,
  }));

  useEffect(() => {
    setSearchAnimation({
      opacity: scrolling ? 1 : 0,
      transform: `translateY(${scrolling ? 0 : -20}px)`,
    });
  }, [scrolling]);


  return (
    <animated.nav className="w-full fixed pl-4 sm:pl-0  px-0 sm:pr-4 flex justify-start sm:justify-end items-center py-2 z-20" style={bgColorSpring}>
      <div className="mr-2 ml-32 sm:ml-12 items-center  mt-2  w-[150px] sm:w-[500px]  ">
        <Link to="/">
        <img src={AgroLogo} alt="AgroSync Logo" />
        </Link>
      </div>
      <div className=" hidden sm:flex">
        <animated.input
          type="text"
          placeholder="What crop are you looking for today?"
          className="sm:w-[28rem] w-[10rem] py-2.5 sm:px-5 px-5 ml-3 border"
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
          style={{
            ...searchAnimation,
            visibility: scrolling ? 'visible' : 'hidden',
          }}
        />
        <animated.button
          className="bg-gray-900 py-1.5 pr-2 sm:flex text-white w-16 justify-center items-center"
          onClick={handleSearch}
          style={{
            ...searchAnimation,
            visibility: scrolling ? 'visible' : 'hidden',
          }}
        >
          <IoSearchOutline className="fill-white text-white ml-4 h-6 w-6" />
        </animated.button>
      </div>
      <ul className="sm:ml-16 ml-2 w-full xl:ml-20 2xl:ml-72 gap-2 sm:gap-10 hidden sm:flex items-center">
        {!currentUser?.isSeller && <li className="cursor-pointer text-gray-600 hover:text-[#1DBF73] font-medium">
          Become a Seller
        </li>}
        {!currentUser && <Link to='/login'> <li className="cursor-pointer  text-gray-600 hover:text-[#1DBF73] font-medium">Sign in </li></Link>}
        {!currentUser && <Link to='/register'> <li className="cursor-pointer font-medium" onClick={() => {}}>
          <button className="border hover:border-green-700 rounded-md hover:bg-green-600 px-5 py-1.5 text-green-500 hover:text-white">Join</button>
        </li></Link>}
        {currentUser?.isSeller && <Link to='/orders'> <li className="cursor-pointer text-gray-600 hover:text-[#1DBF73] font-medium">Orders </li> </Link>}
        {currentUser  && <li className="cursor-pointer text-gray-600 hover:text-[#1DBF73] font-medium">
          switch to selling
        </li>}
        <div className="flex center gap-3 ">
        {currentUser && <li
          className="cursor-pointer "
          title="Profile"
        >
          <div className="flex flex-wrap items-center gap-2">
          <img
            onClick={() => setOpen(!Open)}
            src={currentUser.img || commonImageUrl}
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full border-2 border-gray-400 cursor-pointer"
          />
          <span className="font-medium text-xl text-gray-700  hover:text-green-600">{currentUser?.username}</span>
          </div>
          {Open && <div className="absolute top-12 w-32 bg-white mt-3 flex flex-col p-4 gap-1.5 text-gray-700  cursor-pointe font-medium rounded-md">
            {currentUser?.isSeller && (
              <>
             <Link onClick={() => setOpen(!Open)} to="/myposts"> <span className="hover:text-[#1DBF73]">Post</span></Link>
             <Link onClick={() => setOpen(!Open)} to="/addpost"> <span className="hover:text-[#1DBF73]">Add New</span></Link>
              </>
              )}
              <Link onClick={() => setOpen(!Open)} to="/orders"> <span className="hover:text-[#1DBF73]">Orders</span> </Link>
              <Link  onClick={handleLogout}> <span className="hover:text-[#1DBF73]">logout</span> </Link>
          </div>}
          </li>}
          </div>
      </ul>
    </animated.nav>

    
  );
}

export default Navbar;
