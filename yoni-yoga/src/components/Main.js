import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from '../pages/home';
import Yoga from '../pages/Yoga';
import Therapy from '../pages/Therapy';
import MartialArts from '../pages/MartialArts';

function Main() {
  return (
    <>
      <div className='main'>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/yoga'>
            <Yoga />
          </Route>
          <Route path='/therapy'>
            <Therapy />
          </Route>
          <Route>
            <MartialArts path='/martialarts' />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Main;
