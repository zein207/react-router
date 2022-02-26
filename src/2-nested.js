import { Switch, Route, Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div>
      <h1>Portfolio</h1>
      <ul>
        <li>
          <Link to={'/portfolio/project-1'}>Project 1</Link>
        </li>
        <li>
          <Link to={'/portfolio/project-2'}>Project 2</Link>
        </li>
      </ul>
      <div>
        <Switch>
          <Route path={'/portfolio/project-1'}>
            <h2>Project-1</h2>
          </Route>
          <Route path={'/portfolio/project-2'}>
            <h2>Project-2</h2>
          </Route>
        </Switch>
      </div>
    </div>
  )
}

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
          <Route exact path="/">
            <h1>Home</h1>
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
        </Switch>
      </section>
    </div>
  );
}

export default App;
