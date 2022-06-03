import { Navigate} from 'react-router-dom'

 const auth = true;
 const PrivateRoute = ({children}) => {

 	return(auth ? children : <Navigate to="/login"/>);
 }
 //simular autenticacion


 export default PrivateRoute