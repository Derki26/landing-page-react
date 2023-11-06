import React from "react";
import './miss.css'

const Miss = () => {
  return (
    <div className="bg-gray-100 p-8 flex flex-col items-center justify-center gap-8 mt-20 xl:mt-0">
      <h1 className="text-2xl font-medium text-gray-800 text-center">
      World's most beautiful women
      </h1>
      <div className="flex flex-col md:flex-row items-center flex-wrap gap-20">
        <img src="maritzasayalero1.png" className="w-40" />
        <img src="irene.png" className="w-40" />
        <img src="barbara.png" className="w-40" />
        <img src="alicia.png" className="w-40" />
        <img src="dayana.png" className="w-40" />
        <img src="stefania.png" className="w-40" />
        <img src="naria.png" className="w-40" />
      </div>
    </div>
  );
};

export default Miss;
