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
            <Link to="/portfolio">Portfolio</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Switch>
          <Route exact path="/portfolio">
            <h1>Portfolio</h1>
          </Route>
          <Route exact path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </section>
    </div>
  );
}

export default App;
