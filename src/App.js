import {React} from "react";
import {ColorProvider} from './ColorContext'
import {Square, Circle} from './SquareCircle'
import ACircle from './ACircle' 


function App() {
  return (
    <div 
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "300px",
        height: "620px",
        margin: "50px auto",
        borderRadius: "20px",
        border: "2px solid blue",
        overflow: "hidden",
      }}
    >
      <ColorProvider>
       <ACircle/>
       <Circle radius="200px" />
      <Square />
    </ColorProvider>
    </div>
  );
}

export default App;
