
// They are using index.js as the parent or top component
// everything is rendered in index.js

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

// ----------- imported components ---------------
import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

// ------------ imported hooks ---------------------
import {useDarkMode} from './hooks/useDarkMode'

// ------------- import styles -----------------
import "./styles.scss";

// ----------- App Component --------------

const App = () => { // this component is the brain of the application 
  // ------------ State Management -------------
  const [coinData, setCoinData] = useState([]);
  const [darkMode, setDarkMode] = useDarkMode(false);

 

// this is a side effect doing a get request and is setting the state of coinData with the api data
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    // rendering <Navbar/> and <Charts/> components
    <div className={darkMode ? "dark-mode App" : "App"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Charts coinData={coinData} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
