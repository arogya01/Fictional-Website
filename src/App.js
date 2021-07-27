import { Navbar,Footer} from "./components";
import {GlobalStyle} from './globalStyles'; 
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import Home from './pages/HomePage/Home';

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
     </Switch>  
     <Footer />
    </Router>
    );
}

export default App;
