import { useState } from "react";
import "./App.css";
import Cards from "./Cards";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Memory Card</h1>
      <Cards />
    </>
  );
};

export default App;
