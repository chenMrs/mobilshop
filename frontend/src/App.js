import {Container} from 'react-bootstrap'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import Homescreen from './screens/Homescreen'
import Productscreen from './screens/Productscreen.js'
function App() {
  return (
    <Router >
     <Header/>
     <main className="py-3">
      <Container>
        <Route path="/" component={Homescreen} exact/>
        <Route path="/products/:id" component={Productscreen} exact/>
      </Container>
     </main>
     <Footer/>
    </Router>
  );
}

export default App;
