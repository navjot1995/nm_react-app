import {createStore} from 'redux';

import {stateUpdate} from './reducer';

const store = createStore(stateUpdate);

export default store;