import React from 'react'
import IconRating from "../assets/rating.png";
import IconRatingHalf from "../assets/rating-half.png";
import TempImage from "../assets/temp-1.jpeg";
import IconPlay from "../assets/play-button.png";
const Banner = () => {
  return (
    <div className="w-screen h-[900px] bg-[url(/banner.png)] bg-center bg-no-repeat bg-cover relative mt-[90px]">
        <div className="absolute w-full h-full top-0 left-0 bg-black opacity-30"/>
        <div className="w-full h-full flex items-center justify-center space-x-[30px] p-4 relative ">
            <div className="flex flex-col space-y-5 items-baseline w-[40%] ml-2.5">
            <p className="text-white bg-gradient-to-r from-red-600 to-red-300 text-md py-2 px-3" >TV Show</p>
            <div className="flex flex-col space-y-4"> 
                <h2 className="text-white text-[40px] font-bold ">Nghe nói em thích tôi </h2>
            </div>
            <div className = "flex items-center space-x-3">
                <img src={IconRating} alt="rating" className="w-8 h-8"></img>
                <img src={IconRating} alt="rating" className="w-8 h-8"></img>
                <img src={IconRating} alt="rating" className="w-8 h-8"></img>
                <img src={IconRating} alt="rating" className="w-8 h-8"></img>
                <img src={IconRatingHalf} alt="rating" className="w-8 h-8"></img>

            </div>
            <p className="text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting,
            </p>
            <div className="flex items-center space-x-4">
                <button className = "p-2 text-white !bg-black font-bold text-lg"> Chi Tiết </button>
                <button className = "p-2 text-white bg-red-600 font-bold text-lg"> Xem Phim </button>

            </div>
            </div>
            <div className="w-[50%]">
                <div className="w-[400px] h-[550px] relative  cursor-pointer ml-[200px] group">
                    <img  src={TempImage} alt="temp" className="w-full h-full object-cover justify-center"/>
                    <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out">
                        <img src={IconPlay} alt="play" className= "w-16 h-16 relative z-20"/>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Banner