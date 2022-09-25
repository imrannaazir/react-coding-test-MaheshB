import React from 'react';
import { AiFillCaretUp, AiOutlineClose } from "react-icons/ai"
import { AiFillCaretDown } from "react-icons/ai"

const Card = () => {
    return (
        <div className='bg-[#e3e9ff] flex justify-between items-center w-80 p-3 rounded-md '>
            <p>Nust.js</p>
            {/* buttons */}
            <div className='flex gap-3'>
                <AiFillCaretUp />
                <AiFillCaretDown />
                <AiOutlineClose />

            </div>
        </div>
    );
};

export default Card;