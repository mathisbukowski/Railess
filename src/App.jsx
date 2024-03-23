import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home.jsx";

function App() {

  return (
      <>
          <Home />
      </>

  )
}

/*<!-- <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route key={"Home"} element={<Home />} path={"/"} name={"Home"} middleware={[]}/>
        </Routes>
    </BrowserRouter>
</React.StrictMode> */
export default App
