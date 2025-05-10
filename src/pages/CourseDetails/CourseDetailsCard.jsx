import React from "react";
import { FaVideo, FaCode, FaInfinity } from "react-icons/fa";
import animationData from "../../assets/reactLottie.json";
import Lottie from "lottie-react";
const CourseDetailsCard = ({ courseDetails }) => {
  const {
    image: { thumbnailUrl, altText },
    pricing: {
      discountedPrice,
      regularPrice,
      moneyBackGuaranteeDays,
    },
    features: { videoHours, codingExercises, lifetimeAccess },
  } = courseDetails;

  return (
    <div className="w-sm rounded-xl overflow-hidden shadow-lg border border-gray-200 font-sans">
      <div>
        <img src={thumbnailUrl} alt={altText} className="w-full h-60" />
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-extrabold mb-2">
            <span>$</span>
            {discountedPrice}
          </h2>
          <del>{regularPrice}</del>
        </div>

        <button className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md text-base hover:bg-blue-700 transition">
          Buy Now
        </button>

        <p className="text-center text-xs text-gray-500 mt-2">
          {moneyBackGuaranteeDays}-Day Money-Back Guarantee
        </p>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="font-semibold text-sm mb-1">This course includes:</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li className="flex items-center gap-2">
                <FaVideo /> {videoHours} hours on-demand video
              </li>
              <li className="flex items-center gap-2">
                <FaCode /> {codingExercises} coding exercises
              </li>
              <li className="flex items-center gap-2">
                <FaInfinity />
                {lifetimeAccess ? "Full lifetime access" : "Limited access"}
              </li>
            </ul>
          </div>
          <div >
            <div className="w-32 h-32">
              <Lottie
                animationData={animationData}
                loop={true}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsCard;
