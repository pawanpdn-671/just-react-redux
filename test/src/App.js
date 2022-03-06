import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/Store';
import CakeContainer from './CakeContainer';
import HooksCakeContainer from './HooksCakeContainer';

const App = () => {

  return (
    <Provider store={store}>
      <div>
        <CakeContainer />
        <HooksCakeContainer />
      </div> 
    </Provider>
  )
}

export default App;