import React from 'react';

const Input = () => {
    return (
        <form className='bg-[#e3e9ff] flex justify-between items-center w-80 p-3 rounded-md '>
            <input className='border-2 w-[80%] h-8 border-[#4711de] rounded-md px-2' type="text" name="" id="" />
            <button className='bg-[#4711de] text-white h-8 px-3 rounded-md'>Add</button>
        </form>
    );
};

export default Input;