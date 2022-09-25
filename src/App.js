import './App.css';
import Card from './Card';
import Input from './Input';

function App() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen gap-2'>
      <Card />
      {/* input */}
      <Input />
    </div>
  );
}

export default App;
