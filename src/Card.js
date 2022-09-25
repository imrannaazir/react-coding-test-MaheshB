import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai"
import { IoCloseSharp } from "react-icons/io5"


const Card = ({ data }) => {


    const handleDelete = () => {

    }
    return (
        <div className='bg-[#e3e9ff] flex justify-between items-center w-80 p-3 rounded-md '>
            <p className='font-bold'>{data.note}</p>
            {/* buttons */}
            <div className='flex gap-3'>
                {/* up  */}
                <AiFillCaretUp className={`text-[#4711de] cursor-pointer`} />
                {/* down */}
                <AiFillCaretDown className={`text-[#4711de] cursor-pointer`} />
                {/* delete */}
                <IoCloseSharp onClick={() => handleDelete(data.id)} className={`text-red-500 font-bold cursor-pointer`} />

            </div>
        </div>
    );
};

export default Card;