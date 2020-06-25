import React from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom';
import BookPage from './pages/book/bookPage2';
import BookDetailPage from './pages/book/BookDetailPage';
import Home from './components/homePage';
import Login from './components/login';
import Register from './components/register'


function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/book/:id' component={BookDetailPage}/>
      <Route path='/book' component={BookPage}></Route>
    </Switch>
  );
}

export default App;
