import React, {useState} from 'react';
// import Books from './components/books/Books';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Library from './components/my_library/Library';

const App = () => {
  const [darkMode, setDarkMode] = useState({
    value: false,
    background: '#fff',
    color: '#000',
    left_background: '',
  });
  return (
    <BrowserRouter>
      <div className="app" style={{background: `${darkMode}`}}>
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/books" />} />
          <Route path="/books">
            <Library darkMode={darkMode} setDarkMode={setDarkMode} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
