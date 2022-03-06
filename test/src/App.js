import React, {useState, useEffect} from 'react';
import { Provider } from 'react-redux';
import store from './redux/Store';
import CakeContainer from './CakeContainer';

const App = () => {

  return (
    <Provider store={store}>
      <div>
        <CakeContainer />
      </div> 
    </Provider>
  )
}

export default App;