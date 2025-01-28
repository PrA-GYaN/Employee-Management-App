import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import List from './components/pages/List';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Create from './components/pages/Create';
import Update from './components/pages/Update';
import Leave from './components/pages/Leave';
import Holiday from './components/pages/Holiday';
import Profile from './components/pages/Profile';
import './App.scss';

function App() {
  //console.log(Login.token,Login.username,Login.email);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/list" component={List}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Route exact path="/add-user" component={Create}></Route>
        <Route exact path="/update/:id" render={(props) => <Update {...props} />}></Route>
        <Route exact path="/leave" component={Leave}></Route>
        <Route exact path="/holiday-list" component={Holiday}></Route>
        <Route exact path="/profile" component={Profile}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
