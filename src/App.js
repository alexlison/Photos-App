import logo from './logo.svg';
import './App.css';
import AddPhotos from './Components/AddPhotos';
import SearchPhotos from './Components/SearchPhotos';
import DeletePhotos from './Components/DeletePhotos';
import ViewAllPhotos from './Components/ViewAllPhotos';
import { BrowserRouter, Route,Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <AddPhotos /> } />
      <Route path='search' element={ <SearchPhotos /> } />
      <Route path='delete' element={ <DeletePhotos /> } />
      <Route path='view' element={ <ViewAllPhotos /> } />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
