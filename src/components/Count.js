import React, {useContext}from "react";
import { store } from "../App";
const Count = ({ }) => {
    const [data,setData] = useContext(store);
  return (
    <center>
        <div className="count-container">
      <h2 className="count-title">Count: {data.length}</h2>
      <p className="count-value"></p>
    </div>
    </center>
    
  );
}


export default Count;