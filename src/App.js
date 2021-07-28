import { Navbar,Footer} from "./components";
import {GlobalStyle} from './globalStyles'; 
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
import Signup from './pages/Signup/Signup';

function App() {
  return (
    // <div className="App">
    //  <Navbar />
    // </div>
    <Router>
      <GlobalStyle />
      <Navbar />
     <Switch>
       <Route path='/' exact component={Home}></Route>
       <Route path='/services' exact component={Services}></Route>
       <Route path='/products' exact component={Products}></Route>
       <Route path='/sign-up' exact component={Signup}></Route>
     </Switch>  
     <Footer />
    </Router>
    );
}

export default App;
