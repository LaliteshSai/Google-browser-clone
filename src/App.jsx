import Home from './pages/Home'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from './pages/SearchPage'
function App() {
  

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route >
            <Route path='/' index element={<Home />} />
            <Route path="/search" element={<SearchPage />} />
            {/* <Route path="contact" element={<Contact />} /> */}
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
