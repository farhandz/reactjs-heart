import React from 'react'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import MainPage from './pages/MainPage'
import Deterima from './pages/Deterima'
import Jadian from './pages/Jadian'
import Nama from './pages/Name'

const App: React.FC = () => {
  const nama = localStorage.getItem("nama");
  return (
    <div>
      {!nama ? (
        <Router>
          <Route path="/nama" exact={true} component={Nama} />
          <Redirect to="/nama" path="/nama" />
        </Router>
      ) : (
        <Router>
          <Route path="/" exact={true} component={MainPage} />
          <Route path="/diterima" component={Deterima} />
          <Route path="/jadian" component={Jadian} />
        </Router>
      )}
    </div>
  );
}

export default App