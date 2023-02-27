import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/search" element={<ResultPage/>}/>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
