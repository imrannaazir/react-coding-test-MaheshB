import { createContext, useState } from 'react';
import './App.css';
import Card from './Card';
import Input from './Input';
export const MyContext = createContext([])

function App() {
  const [data, setData] = useState([
    {
      text: "Next JS",
      id: "1"
    },
    {
      text: "Nest JS",
      id: "2"
    },
    {
      text: "React JS",
      id: "3"
    },
    {
      text: "Node JS",
      id: "4"
    },
  ])

  return (
    <MyContext.Provider value={[data, setData]}>

      <div className='flex flex-col items-center justify-center min-h-screen gap-2'>
        {
          data.map(data => <Card key={data.id} data={data} />)
        }
        {/* input */}
        < Input />

      </div>
    </MyContext.Provider>
  );
}

export default App;
