import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
import Widgets from "./Components/Widgets";


function App() {
  
  return (
      
        <div className="app">
        

              <Sidebar />
              <Feed />
              <Widgets />

          
        </div>
    
    );
}

export default App;