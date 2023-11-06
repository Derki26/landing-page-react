import React from "react";

import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const reviewUs = () => {
  
  return (
    
    <div className="p-8 flex flex-col gap-8 bg-gray-100"  id="reviewUs" >
      <h1 className="text-[40px] text-center font-black">
      Social Impact
      </h1>
      <div className="flex justify-center gap-4">
        <span className="text-5xl text-primary">
          <RiDoubleQuotesL />
        </span>
        <p className="max-w-2xl text-center text-gray-500">
        At Cisneros, we strongly believe that the role of the private sector is key in achieving sustainable development and equitable access to opportunities. For over 90 years, this conviction has translated into actions that are integrated into our business objectives and strategies.

        The power of media platforms and celebrities to become catalysts for change, for example, has been harnessed to create communicational initiatives such as a Somos lo que queremos, which promotes values and behaviors that contribute to positive coexistence, as well as individual and collective progress.
        For over 90 years, Cisneros' commitment to sustainable development and equitable access to opportunities has translated into social impact initiatives that are integrated into our business objectives and strategies.
        </p>
        <span className="text-5xl text-primary">
          <RiDoubleQuotesR />
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        
        <div>
          <h3 className="text-center text-[24px] font-bold">Cisneros Real Estate develops strategic, innovative and responsible real estate and tourism projects.</h3>
          <h5 className="text-center text-[20px] text-gray-500">
            Founder Cisneros
          </h5>
        </div>
      </div>
    </div>
  );
};

export default reviewUs;
