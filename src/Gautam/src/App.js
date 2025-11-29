
import './App.css'
import Blog from './Blog';
import {Routes,Route } from 'react-router-dom';
import Blog_details from './Blog_details';
function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Blog/>}></Route>
          <Route path='/Blog_details' element={<Blog_details/>}></Route>
        </Routes>
    </>
  );
}

export default App;
