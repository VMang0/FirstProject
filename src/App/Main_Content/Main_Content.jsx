import Header from "./Header/Header";
import "./Main_Content.css";
import Main_Page from "./Main_Page/Main_Page";


function Main_Content() {
    return (
        <div className="main_content">
            <Header/>
            <Main_Page/>
        </div>

    );
}

export default Main_Content;
