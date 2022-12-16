import './App.css';
import { Map } from './components/Map';
import {RouterProvider, Link} from 'react-router-dom'
import { dataSources, Router } from './router';



function App() {

  return (
    <div className="App">
      <RouterProvider router={Router}/>
    </div>
  );
}

export default App;
