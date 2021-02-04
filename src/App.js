// import logo from './logo.svg';
import './App.css';
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { LoginPage, AdminPage, UserDetails, Products, Cart } from './modules';
import * as Constants from './Routes';
import { ProtectedAdminRoutes, ProtectedUsersRoutes } from "./components/index";

function App() {
  return (
    <div className="App">
      <div className="jumbotron">
        <div className="container">
          <div className="col-sm-8 col-sm-offset-2">
            <Switch>
              <Route exact path='/' component={LoginPage} />
              <Route path={Constants.Login} component={LoginPage} />
              <ProtectedAdminRoutes path={Constants.Admin} component={AdminPage} />
              <ProtectedAdminRoutes path={Constants.UserDetails} component={UserDetails} />
              <ProtectedUsersRoutes path={Constants.Products} component={Products} />
              <ProtectedUsersRoutes path={Constants.Cart} component={Cart} />
              <Redirect from="*" to="/" />
            </Switch>
            {/* <DigitalClock /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
