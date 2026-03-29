import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Read } from './read';
import { Create } from './create';
import{Update} from './update';

function App(){
  return (
    <Routes>
        <Route path="/" element={<Read/>}/>
        <Route path="/create" element={<Create/>} />
        <Route path="/update" element={<Update/>} />    
    </Routes>
  );
}
export default App;
