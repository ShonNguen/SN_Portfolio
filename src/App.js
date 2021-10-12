import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./comps/Contact";
import Footer from "./comps/Footer";
import Home from "./comps/Home";
import Navbar from "./comps/Navbar";
import ProjectPorto from "./comps/ProjectPorto";
import ProjectRoshdale from "./comps/ProjectRoshdale";
import ProjectUCY from "./comps/ProjectUCY";
import Request from "./comps/Request";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>        
        <Route exact path="/">
          <Home /> 
        </Route>
        <Route path="/contact">
          <Contact /> 
        </Route>

        <Route exact path="/request">
          <Request />
        </Route>

        <Route exact path="/project/ProjectPorto">
          <ProjectPorto />
        </Route>
        
        <Route exact path="/project/ProjectRoshdale">
          <ProjectRoshdale />
        </Route>

        <Route exact path="/project/ProjectUCY">
          <ProjectUCY />
        </Route>
        


      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
