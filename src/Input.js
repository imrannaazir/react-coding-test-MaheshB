import { addDoc, collection } from 'firebase/firestore';
import React from 'react';
import { db } from './firebase.config';

const Input = () => {
    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const docRef = await addDoc(collection(db, "notes"), {
                note: e.target.tech.value,
                id: 1
            })
            console.log("Document written with ID: ", docRef.id);

        }
        catch (err) {
            console.error("Error adding document: ", err);
        }
        e.target.reset()

    }
    return (
        <form onSubmit={handleSubmit} className='bg-[#e3e9ff] flex justify-between items-center w-80 p-3 rounded-md '>
            <input className='border-2 w-[80%] h-8 border-[#4711de] rounded-md px-2' type="text" name="tech" id="" />

            <button type='submit' className='bg-[#4711de] text-white h-8 px-3 rounded-md'>Add</button>
        </form>
    );
};

export default Input;