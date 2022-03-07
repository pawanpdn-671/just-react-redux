import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/Store';
import CakeContainer from './CakeContainer';
import HooksCakeContainer from './HooksCakeContainer';
import IceCreamContainer from './IceCreamContainer';
import ChocoContainer from './ChocoContainer';

const App = () => {

  return (
    <Provider store={store}>
      <div>
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <ChocoContainer />
      </div> 
    </Provider>
  )
}

export default App;