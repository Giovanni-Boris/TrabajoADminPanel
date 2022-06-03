import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";
function App() {
  return (
    <div className="App">
       <Topbar/>
       <div className="container">
         <Sidebar/>
         <Home/>
       </div>
     </div>
  );
}

export default App;
