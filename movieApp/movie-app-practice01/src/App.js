import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieHome from "./routers/MovieHome";
import Detail from "./routers/Detail";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/movie/:id">
            <Detail />
          </Route>
          <Route path="/">
            <MovieHome />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
