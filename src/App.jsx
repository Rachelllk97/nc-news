import { Routes, Route} from "react-router-dom";
import MainTitle from "../Components/MainTitle";
import ContactUs from "../Components/ContactUs"
import Home from "../Components/Home"
import "./index.css"
import SingleArticle from "../Components/SingleArticle";

function App() {

  
  return (
    <>
    <div className="title-container">
    <MainTitle/>
    </div>
    <Routes>
        <Route path="/articles" element={<Home/>} />
        <Route path="/articles/:articleId" element={<SingleArticle/>}/>
      </Routes>
      <div>
        <ContactUs/>
      </div>
    </>
  )
}

export default App;
