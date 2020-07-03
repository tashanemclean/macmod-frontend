import { combineReducers } from 'redux';
import {reducer as form } from 'redux-form';

import headerNavbar from './headernavbarReducer';
import subNavbar from './subnavbarReducer';
import user from './userReducer';
import shop from './shopReducer';
import page from './pageReducer';
import options from './filterReducer';
import brands from './brandReducer';
import resources from './resourceReducer';
import promotions from './promotionsReducer';
import contacts from './contactsReducer';
import orders from './orderHistoryReducer';
import phasecontent from './phasePageReducer';

const rootReducer = combineReducers({
  form,
  headerNavbar,
  subNavbar,
  user,
  shop,
  page,
  options,
  brands,
  resources,
  promotions,
  contacts,
  orders,
  phasecontent
})

export default rootReducer