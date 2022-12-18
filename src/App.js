import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Subscribe from './components/Subscribe';

function App() {
  return (
    <div className="App">

      <Header />
      <Routes>
      <Route path="/" element={<Subscribe />}></Route>
      </Routes>


    </div>
  );
}

export default App;
