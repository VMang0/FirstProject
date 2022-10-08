import './app.css'
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Main_Content from "./components/Main_Content";
function App() {
    return (
        <div className="App">
            <Header/>
            <Navigation/>
            <Main_Content/>
        </div>
    );
}

export default App;
