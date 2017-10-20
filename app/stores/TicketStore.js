import BaseStore from './BaseStore';
import AppDispatcher from '../dispatcher/AppDispatcher';
import TicketApi from '../service/TicketApi'

import {
  ITEMS_UPDATED,
  ITEMS_GET_SUCCESS,
  GET_ITEMS
} from '../constants/AppConstants';

class TicketStore extends BaseStore {

  emitChange() {
    this.emit(ITEMS_UPDATED);
  }

  addChangeListener(callback) {
    this.on(ITEMS_UPDATED, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(ITEMS_UPDATED, callback);
  }
}

let store = new TicketStore();

AppDispatcher.register((action) => {
  switch(action.actionType) {
    case GET_ITEMS:
      TicketApi.findTicket({
        search: action.search,
        ticketStore: store
      });
      break;
    default:
  }
});

export default store;
