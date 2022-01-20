import { useState } from "react";
import "./App.css";
import FetchDemo from "./components/FetchDemo";

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="App">
      <button onClick={() => setToggle(!toggle)}>Click</button>
      {toggle && <FetchDemo />}
    </div>
  );
}

export default App;
