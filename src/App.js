import React from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom';
// import BookPage from './pages/book/BookPage';
import BookDetailPage from './pages/book/BookDetailPage';
import Home from './components/homepage';
import Login from './components/login';
import Register from './components/register'


function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/book/:id' component={BookDetailPage}/>
    </Switch>
  );
}

export default App;
