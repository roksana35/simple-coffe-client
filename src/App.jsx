
import { useLoaderData } from 'react-router-dom';
import './App.css'
import Coffecard from './Components/Coffecard';

function App() {
  const coffees = useLoaderData()


  return (
    <>
      
      <h1 className='text-2xl font-semibold text-purple-800'>Coffee Information:{coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-10'>
      {
        coffees.map(coffee => <Coffecard key={coffee._id} coffee={coffee}></Coffecard>)
      }

      </div>
      
      
      
    </>
  )
}

export default App;
