import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Route exact path="/" component={SignIn} />
      <Route path="/home" component={Home} />
    </Router>
  );
}

export default App;

