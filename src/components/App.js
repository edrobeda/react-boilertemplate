import React, { Component } from 'react'


import Home from './site/home'
import File404 from './site/404'


import SiteLayout from './layouts/siteLayout'


// import Router from '../routers'
import { BrowserRouter, Route, Switch, } from 'react-router-dom'
import imgs from '../images'


class App extends Component {

  render() {
    return (
        <div class="mainBody">
          <BrowserRouter>    
              <Switch>
                   //MAIN SITE
                  <Route exact path="/" render={(props) => <SiteLayout><Home /></SiteLayout>} />
                  <Route exact path="/manager" render={(props) => <SiteLayout><div>teste</div></SiteLayout>} />


                  //ERROS
                  <Route render={(props) => <SiteLayout><File404 /></SiteLayout>} />
              </Switch>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;

