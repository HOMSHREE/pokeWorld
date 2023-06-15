import Navbar from "./components/Navbar";
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Homepage from "./components/Homepage";
import Bookmark from "./components/Bookmark";
import Searchbar from "./components/Searchbar";
import Pokecard from "./components/Pokecard";

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Searchbar/>
        <Pokecard/>
        <Routes>
          <Route exact path="/" element={<Homepage/>}></Route>
          <Route exact path="/bookmark" element={<Bookmark/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
