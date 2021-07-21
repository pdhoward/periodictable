import React from "react";
import "./App.css";
import PeriodicTable from "./PeriodicTable";

function App() {
  return (
    <div className="App bg-black text-white"> 
       <header>
        <h3>
          MSS International         
        </h3>
        <h5>
          Select a Data Modernization Pattern        
        </h5>
      </header>  
      <PeriodicTable />
    </div>
  );
}

export default App;
