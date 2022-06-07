import { BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom'
import Navbar from './components/Navbar'
import Signin from './pages/auth/Signin'
import Signup from './pages/auth/Signup'
import Products from './pages/Products'

function App() {

 

  return (
    <Router>
        <div className="app" >
            <Navbar />
          <div className="container">
              <Switch>
                <Route path="/" exact component={Products}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/signin" component={Signin}/>

              </Switch>
          </div>
            
        </div>
    </Router>
     
    )

  }

  


export default App
