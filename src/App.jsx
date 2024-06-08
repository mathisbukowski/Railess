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
import Documentation from "./Pages/Documentation.jsx";
import Policies from "./Pages/Policies.jsx";
import Train from "./Pages/Train.jsx";
import Loading from "./Components/Loading.jsx";

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
                    <Route key={"Documentation"} element={<Documentation />} path={"/Documentation"} name={"Documentation"} middleware={[]}/>
                    <Route key={"Contact"} element={<Contact />} path={"/contact"} name={"Contact"} middleware={[]}/>
                    <Route key={"Policies"} element={<Policies />} path={"/policies"} name={"Policies"} middleware={[]}/>
                    <Route key={"Train"} element={<Train />} path={"/trainroute/:trip_id"} name={"Train"} middleware={[]} />
                </Routes>
            </BrowserRouter>
         </>
        )
    } else {
        router = <Loading />
    }
    return router;
}

export default App