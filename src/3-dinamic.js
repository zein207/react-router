import { Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';

const Project = () => {
  const match = useRouteMatch();
  const params = useParams();
  console.log(match, params)
  const { project_id } = match.params
  return (
    <h2>Project {project_id}</h2>
  )
}

const Portfolio = () => {
  const match = useRouteMatch();
  return (
    <div>
      <h1>Portfolio</h1>
      <ul>
        <li>
          <Link to={`${match.url}/project-1`}>Project 1</Link>
        </li>
        <li>
          <Link to={`${match.url}/project-2`}>Project 2</Link>
        </li>
      </ul>
      <div>
        <Switch>
          <Route path={`${match.path}/:project_id`}>
            <Project />
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
