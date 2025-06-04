import "./App.css";

import DedicatedServer from "./DedicatedServer/DedicatedServer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./LandingPageComponent/Homapage";
import WindowShared from "./WindowShared/WindowShared";
import WordPressHosting from "./WordpressHosting/WordpressHosting";
import InstaneDedicatedServer from "./InstantDedicatedServer/InstanstDedicatedServer";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/dedicatedServer" exact element={<DedicatedServer />} />
          <Route path="/windowShared" exact element={<WindowShared />} />
          <Route
            path="/wordPressHosting"
            exact
            element={<WordPressHosting />}
          />
          <Route
            path="/instantDedicatedServer"
            exact
            element={<InstaneDedicatedServer />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
{
  /* <div>
  <Header />
   <Homepage /> 

  <DedicatedServer />
  <Footer />
</div>; */
}
