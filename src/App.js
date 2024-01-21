
import './App.css';
import Home from './screens/Home';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Login from './screens/Login';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.esm'
import Signup from './screens/Signup';
import { CartProvider } from './components/ContextReducer';
import Cart from './screens/Cart';
import MyOrder from './screens/MyOrder';

function App() {
  return (
    <CartProvider>
    <Router>

    <div>
     <Routes>
      <Route exact path="/" element={<Home/>}></Route>

      <Route exact path="/Login" element={<Login/>}></Route>

      <Route exact path="/createuser" element={<Signup/>}></Route>

      <Route exact path="/Cart" element={<Cart/>}></Route>
      <Route exact path="/myOrder" element={<MyOrder/>}></Route>



     </Routes>
    </div>

    </Router>
    </CartProvider>
    
  )
}

export default App;
