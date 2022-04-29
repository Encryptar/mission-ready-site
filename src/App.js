import Navbar from "./components/Navbar/Navbar";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageList from "./components/ImageList/ImageList";

import "./App.css"

function App() {
    return (
        <div className="app">
            <Navbar />
            <Searchbar />
            <iframe className='chatbot' width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/4c1bf653-30e8-4d24-9d76-41b6bd79ac51"></iframe>
            <ImageList />
            
        </div>
    );
}
export default App;