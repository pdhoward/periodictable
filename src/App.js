import React from "react";
import "./App.css";
import PeriodicTable from "./PeriodicTable";

function App() {
  return (
    <div className="App bg-black text-white"> 
       <header>
        <h4>
          MSS International         
        </h4>
        <h6>
          Select a Data Modernization Pattern        
        </h6>
      </header>  
      <PeriodicTable />
    </div>
  );
}

export default App;
