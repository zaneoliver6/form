import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import Navigation from './components/Navigation';
import Home from './components/Home';
import FormResponses from './components/FormResponses';

class App extends React.Component {
   render() {
      return (
         <BrowserRouter>
            <div>
               <Navigation />
               <Switch>
                  <Route path="/" component={Home} exact />
                  <Route path="/answers" component={FormResponses} />
               </Switch>
            </div>
         </BrowserRouter>
      );
   }
}

ReactDom.render(<App/>, document.getElementById('root'));