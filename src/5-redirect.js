import { Switch, Route, Link, Redirect } from 'react-router-dom';

const Portfolio = () => {
  const loggedIn = false

  if(!loggedIn) {
    return <Redirect push to="/" />
  }

  return (
    <h1>Portfolio</h1>
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
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Switch>
          <Redirect exact from='/' to='/home' />
          <Route exact path="/home">
            <h1>Home</h1>
          </Route>
          <Route exact path="/profile">
            <h1>Profile</h1>
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
        </Switch>
      </section>
    </div>
  );
}

export default App;
