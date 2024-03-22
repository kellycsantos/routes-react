import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import AxiosPosts from './components/AxiosPosts'
import FetchPosts from './components/FetchPosts'
import NotFound from './views/NotFound';

function App() {
  return (
    <>
    <header>
      <Link to="/fetch"> Fetch </Link>
      <Link to="/axios"> Axios </Link>
    </header>
    <div className="App">
     <h1>React Router + Axios</h1>
    </div>

<main >

    <Routes>
      <Route path="/fetch" element={<FetchPosts/>} />
      <Route path="/axios" element={<AxiosPosts/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
    </main>
    </>
  );
}

export default App;
