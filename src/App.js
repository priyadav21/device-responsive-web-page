import React, { useState, useEffect } from "react";
import "./Styles.css";
import Header from "./components/Header";
import AppContent from "./components/AppContent";
import { content } from "./data";

function App() {
  const [data, setData] = useState(null);
  setData(content);

  // useEffect(() => {
  //   fetch("/data")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);

  return (
    <div className="App">
      <Header />
      <AppContent data={data} />
    </div>
  );
}

export default App;
