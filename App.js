import React from 'react'
import { Provider } from 'react-redux';
import AppContainer from './app/containers/appContainer'
import store from './store';



export default App = () => (
    <Provider store={store}>
        <AppContainer />
    </Provider>
)