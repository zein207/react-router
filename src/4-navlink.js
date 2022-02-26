import { Switch, Route, NavLink, useRouteMatch } from 'react-router-dom';

const Project = () => {
  const match = useRouteMatch();
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
          <NavLink activeClassName='selected' exact to={`${match.url}/project-1`}>Project 1</NavLink>
        </li>
        <li>
          <NavLink activeStyle={{fontSize:20}} exact to={`${match.url}/project-2`}>Project 2</NavLink>
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
            <NavLink exact to="/">Home</NavLink>
          </li>
          <li>
            <NavLink isActive={(match, location) => {
              console.log(match, location) 
              return true
            }} exact to="/portfolio">Portfolio</NavLink>
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
