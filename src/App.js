import Navbar from "./components/Navbar";
import { Routes , Route} from 'react-router-dom'
import Homepage from "./pages/Homepage";
import Bookmark from "./pages/Bookmark";
import Searchbar from "./pages/SearchPage";
import Pokecard from "./components/Pokecard";

function App() {
  return (
    <div>
        <Navbar/>
        <Searchbar/>
        <Pokecard/>
        <Routes>
          <Route exact path="/" element={<Homepage/>}></Route>
          <Route exact path="/bookmark" element={<Bookmark/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
