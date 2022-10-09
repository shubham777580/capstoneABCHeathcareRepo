import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Individualmedicine from './medicines/Individualmedicine';
import { landingPagedto, medicinedto } from './medicines/medicine.model';
import Medicinelist from './medicines/Medicinelist';
import Button from './utils/Button';
import Menu from './Menu';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import IndexCategory from './category/IndexCategory';
import LandingPage from './medicines/LandingPage';
import routes from './route-config';

//writing a comment for git push check


function App() {

  return (

    <BrowserRouter>
      <Menu />
      <div className='container'>

        {/* get route of page from route-config */}
        <Switch>
          {routes.map(route => 
          <Route key = {route.path} path={route.path} exact={route.exact}>
            <route.component />
          </Route>)}       
        </Switch>


      </div>
    </BrowserRouter>
  )
}

export default App;
