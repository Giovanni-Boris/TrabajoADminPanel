import Login from "./pages/login/Login";
import { BrowserRouter as Router,Routes ,Route, Navigate } from 'react-router-dom'
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/dashboard/Dashboard"
function App() {
 //const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin ;
 const  user = true;
 return (
   <Router>
     <Routes>
       <Route path="/login" element={user ? <Navigate to="/dashboard"/> : <Login/> }/>
       <Route 
           path="/dashboard/*" 
           element={<PrivateRoute><Dashboard/></PrivateRoute>}
       />
     </Routes>
   </Router>

 );
}

export default App;
