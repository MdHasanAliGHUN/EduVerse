import React from 'react';

const SectionTitle = ({title, description}) => {
    return (
        <div className='mt-10 mb-15  space-y-2'>
            <h1 className='text-black font-bold text-center text-2xl md:text-3xl'>{title}</h1>
            <p className='text-gray-500 text-center'>{description}</p>
        </div>
    );
};

export default SectionTitle;