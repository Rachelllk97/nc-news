import { Routes, Route} from "react-router-dom";
import MainTitle from "../Components/MainTitle";
import ContactUs from "../Components/ContactUs"
import Home from "../Components/Home"


function App() {

  
  return (
    <>
    <div>
    <MainTitle/>
    </div>
    <Routes>
        <Route path="/articles" element={<Home  />} />
      </Routes>
      <div>
        <ContactUs/>
      </div>
    </>
  )
}

export default App;
