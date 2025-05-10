import React from 'react';
import { GoDotFill } from "react-icons/go";
const Requirements = ({requirements}) => {
    return (
        <div className='space-y-3'>
            {
                requirements.map((requirement, index) => (
                    <div key={index} className='flex items-center gap-1'>
                        <GoDotFill/>
                        <p className="text-gray-700 font-light">{requirement}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default Requirements;