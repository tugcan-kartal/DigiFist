import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div>

      <Router>

        <Routes>
          <Route path="/" element={
            <div>
              <HomePage />
            </div> 
          }/>
        </Routes>

      </Router>

  </div>
  );
}

export default App;