import React from 'react';

const Loader = () => {
    return (
        <div className='h-full w-full flex justify-center items-center'>
            <span className="loading loading-spinner loading-xl"></span>
        </div>
    );
};

export default Loader;