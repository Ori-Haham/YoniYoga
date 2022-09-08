import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from '../pages/home';
import Yoga from '../pages/Yoga';
import Therapy from '../pages/Therapy';
import MartialArts from '../pages/MartialArts';

function Main() {
  return (
    <>
      <div className='main'>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route path='/yoga' element={<Yoga />}></Route>
          <Route path='/therapy' element={<Therapy />}></Route>
          {/* <Route>
            <MartialArts path='/martialarts' />
          </Route> */}
        </Routes>
      </div>
    </>
  );
}

export default Main;
