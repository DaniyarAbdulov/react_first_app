import React from "react";

const Rookies = () => {
  return (
    <div className="shadow-lg border-transparent border-2 rounded-lg bg-white p-4 mt-5">
      <div className="text-center mb-4">Our New Mates!</div>
      <div className="flex items-center justify-center">
        <svg
          className="w-[17px] h-[17px] text-orange-400 mr-8"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 8 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
          />
        </svg>
        <img
          src="https://www.kindpng.com/picc/m/90-909659_trevor-philips-michael-de-santa-profile-hd-png.png"
          alt="Trevor Philips "
          className="w-20 h-20 rounded-full"
        />

        <div className="ml-2 text-center">
          <p>Trevor</p>
          <p>Phillips</p>
          <p className="text-sm">IT-helpDesk</p>
        </div>
        <svg
          className="w-[17px] h-[17px] text-orange-400 ml-8"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 8 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
          />
        </svg>
      </div>

      <button className="transition ease-in-out delay-150 duration-300 ml-40 bg-orange-400 hover:scale-110 text-white font-bold py-2 px-2 rounded-full text-xs mt-5">
        Say Hello!
      </button>
    </div>
  );
};

export default Rookies;
