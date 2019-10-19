import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Review from './Components/Review';
import Login from "./Components/Login";
// import RegisterHooks from "./Components/RegisterHooks"
// import Register from "./Components/Register";
// import Register2 from "./Components/Register2";
import Register3 from "./Components/Register3";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <React.Fragment>
            <Switch>
                {/* <Route exact path='/' component={Review} /> */}
                <Route exact path='/' component={Login} />
                {/* <Route path='/RegisterHooks' component={RegisterHooks} /> */}
                {/* <Route path='/Register2' component={Register2} /> */}
                <Route path='/Register3' component={Register3} />
                <Route path='/Review' component={Review} />
            </Switch>
        </React.Fragment>
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
