
import './App.css';
import { GroceryList } from './GroceryList';


function App() {
  return (
    <div>
      <div className='header'>
        <h1>My To-Do List</h1>
      </div>

      <div>
       <GroceryList/> 
      </div>
      
    </div>
  );
}

export default App;
