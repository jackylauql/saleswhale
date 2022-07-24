import "./App.css";
import NavBar from "./components/NavBar";
import MainHeader from "./components/MainHeader";

import Teams from "./pages/Teams";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="flex h-screen font-proximaNova">
      <NavBar />
      <div className="pl-[80px] flex flex-grow bg-[#E5E5E5] flex-col items-start">
        <MainHeader user={user} />
        <Teams setUser={setUser} />
      </div>
    </div>
  );
}

export default App;
