import { collection, getDocs } from 'firebase/firestore';
import { createContext, useState } from 'react';
import './App.css';
import Card from './Card';
import { db } from './firebase.config';
import Input from './Input';
export const MyContext = createContext([])

function App() {
  const [notes, setNotes] = useState([])

  const notesRef = collection(db, "notes")

  const getData = async () => {
    const data = await getDocs(notesRef)
    const notesData = data.docs.map((item) => {
      return { ...item.data(), id: item.id }
    })
    setNotes(notesData)
  }
  getData()

  return (


    <div className='flex flex-col items-center justify-center min-h-screen gap-2'>
      {
        notes.map(data => <Card key={data.id} data={data} />)
      }
      {/* input */}
      < Input />

    </div>
  );
}

export default App;
