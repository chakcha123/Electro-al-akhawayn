import React from 'react';

const States = ({count,title ,icon}) => {
  return (
    <div className='group'>

        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md  transition duration-300 transform group-hover:scale-105">
          <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
            {icon}
          </div>
          <div className="p-4 text-right">
            <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">{title}</p>
            <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">{count}</h4>
          </div>
        </div>
    </div>
  );
}

export default States;
