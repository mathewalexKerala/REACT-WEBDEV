import React, { useState } from "react";
import { useEffect } from "react";

const Banner = () => {
  const [followers, setFollowers] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch(`https://api.github.com/users/mathewalexKerala`);
            const data = await response.json();
            
            console.log('mathewalexKerala', data);
            setFollowers(data.followers);  // Assuming 'setFollowers' updates state
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
}, []);

  return (
    <div className="mx-auto max-w-7xl my-10 sm:py-10 px-6 lg:px-8 bg-amber-100 shadow-slate-400">
      <div className="grid grid-cols-1 lg:grid-cols-2 my-16">
        {/* COLUMN-1 */}

        <div className="lg:-m-24 lg:pt-20 hidden lg:block">
          <img
            className="rounded-lg hover:blur-sm duration-300"
            src="/mathew.jpg"
            alt="hero-image"
            width="500"
            height="500"
          />
        </div>
        {/* COLUMN-2 */}

        <div className="mx-auto sm:mx-0">
          <div className="py-3 text-center lg:text-start">
            <div className="text-blue bg-lightblue hover:shadow-xl text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider bg-none">
              GitHub Followers:{followers}
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Banner;
