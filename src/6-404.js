import { Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Switch>
          <Route exact path="/">
            <h1>Home</h1>
          </Route>
          <Route exact path="/profile">
            <h1>Profile</h1>
          </Route>
          <Route path="*">
            404: route not found
          </Route>
        </Switch>
      </section>
    </div>
  );
}

export default App;