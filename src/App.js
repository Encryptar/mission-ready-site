import Navbar from "./components/Navbar/Navbar";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageList from "./components/ImageList/ImageList";

import "./App.css"

function App() {
    return (
        <div className="app">
            <Navbar />
            <Searchbar />
            <ImageList />
        </div>
    );
}
export default App;