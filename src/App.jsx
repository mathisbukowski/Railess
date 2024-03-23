import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Service from "./Pages/Service.jsx";
import Contact from "./Pages/Contact.jsx";
import Help from "./Pages/Help.jsx";
import Policies from "./Pages/Policies.jsx";

function App() {
    let router;

    if (typeof window !== "undefined") {
        router = (
        <>
            <BrowserRouter>
                <Routes>
                    <Route key={"Home"} element={<Home />} path={"/"} name={"Home"} middleware={[]}/>
                    <Route key={"About"} element={<About />} path={"/about"} name={"About"} middleware={[]}/>
                    <Route key={"Service"} element={<Service />} path={"/service"} name={"Service"} middleware={[]}/>
                    <Route key={"Help"} element={<Help />} path={"/help"} name={"Help"} middleware={[]}/>
                    <Route key={"Contact"} element={<Contact />} path={"/contact"} name={"Contact"} middleware={[]}/>
                    <Route key={"Policies"} element={<Policies />} path={"/policies"} name={"Policies"} middleware={[]}/>
                </Routes>
            </BrowserRouter>
         </>
        )
    } else {
        router = <div>Loading...</div>
    }
    return router;
}
export default App
