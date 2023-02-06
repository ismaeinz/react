import React from 'react'
import A from './components/A';
import Counter from './components/Counter';

import CounterContextProvider from './context/CounterContext';
import NameCtxProvider from './context/Name';

const App = () => {
  return (
    <div>
    <h1>Context api</h1>
    <CounterContextProvider>

    <Counter />
    <NameCtxProvider>
    <A />
    </NameCtxProvider>
    </CounterContextProvider>
      
    </div>
  )
}

export default App;
