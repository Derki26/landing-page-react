import React from "react";
// Icons
import { RiMailFill, RiSmartphoneFill, RiMacFill } from "react-icons/ri";

const Services = () => {
  return (
    <div
      id="services"
      className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 p-8 md:p-12 xl:p-20"
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-[40px] font-bold text-center ">Miss Venezuela candidates and beauty queens are also prepared to become spokeswomen and volunteers for social causes as influencers and public figures</h1>
        <p className="text-[20px] text-gray-500 text-center ">
        Miss Venezuela is a multi-platform female-oriented production company which runs the Miss Venezuela pageant,
        considered to be one of the most prestigious and successful beauty pageants in the world. This event has 
        produced more international beauty queens than any other contest in history. It holds seven Miss Universe, 
        six Miss World and eight Miss International wins.  Miss Venezuela was entered into the Guinness World Records
        in 2009 for being the first country to win back-to-back Miss Universe titles.  At the heart of Miss
        Venezuela is the commitment to social leadership.  The organization provides opportunities to women of 
        all socioeconomic backgrounds and empowers them to be ambassadors for causes within their local communities
        in partnership with corporate sponsors and international NGO's. 
        https://www.cisneros.com/divisions/cisneros-media/company/miss-venezuela
        </p>
        
      </div>
      <img
            src="las-mujeres-mas-bellas-del-universo-los-ultimos-10-anos.webp"
            className="w-[350px] h-[350px] md:w-[850px] md:h-[550px] object-cover xl:-mt-50"
          />   
    </div>
  );
};

export default Services;
