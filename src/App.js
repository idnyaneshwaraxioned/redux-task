import { Route } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import PrivateRoute from './route/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Navbar />
      <PrivateRoute exact path="/" component={Home} />
      <PrivateRoute path="/about" component={About} />
      <PrivateRoute path="/contact" component={Contact} />
      <PrivateRoute path="/logout" component={Logout} />
      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;
