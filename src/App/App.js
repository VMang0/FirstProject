import Header from "./Main_Content/Header/Header";
import Main_Content from "./Main_Content/Main_Content";
import "./App.css"
import Products from "./Products/Products";
function App() {
    return (
        <div className="content">
            <div className="Page1">
                <Main_Content/>
            </div>
            <div className= "Page2">
                <Products/>
            </div>
        </div>

    );
}

export default App;
