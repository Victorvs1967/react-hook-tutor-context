import { createContext } from 'react';

import GrandParent from './components/GrandParent';
import './App.css';

export const UserContext = createContext();
export const ChannelContext = createContext();

const App = () => {
  return (
    <div className="App">
      <UserContext.Provider value={'Nabendu'}>
        <ChannelContext.Provider value={'TheWebDev'}>
          <GrandParent />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
