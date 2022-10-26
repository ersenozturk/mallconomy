import { useState } from "react";
import "../styles/globals.scss";
import AppContext from "../context/AppContext";

function MyApp({ Component, pageProps }) {
  const [point, setPoint] = useState(0)
  const [selectedPoint, setSelectedPoint] = useState(0)
  return (
    <AppContext.Provider
    value={{point,setPoint,selectedPoint,setSelectedPoint}}>
    <div> 
      <Component {...pageProps} />
    </div>
    </AppContext.Provider>
  );
}

export default MyApp;




