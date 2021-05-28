import React from 'react';
import {Provider} from 'react-redux';

import {Router} from './src/navigation/Router';
import {store} from './src/store';


export const App = () => {
    return(
        <Provider store = {store}>
            <Router/>
        </Provider>
    );
};
