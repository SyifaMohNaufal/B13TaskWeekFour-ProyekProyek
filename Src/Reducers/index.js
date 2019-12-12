import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import authReducer from './AuthReducer';
import userReducer from './UserReducers';

const reducers = {
  authReducer,
  userReducer,
  form: formReducer,
};

const appReducer = combineReducers(reducers);

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGGED_OUT_SUCCESS') {
    state = {};
  }

  return appReducer(state, action);
};

export default rootReducer;
