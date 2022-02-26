import { Switch, Route, Link, useHistory } from 'react-router-dom';

function App() {
  const history = useHistory();
  console.log({history})

  const forward = () => {
    history.goForward();
  }
  const back = () => {
    history.goBack();
  }
  const push = (url) => {
    history.push(url)
  }
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
        <button onClick={back}>Back</button>
        <button onClick={forward}>Forward</button>
        <button onClick={() => push('/projects')}>Push</button>
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
