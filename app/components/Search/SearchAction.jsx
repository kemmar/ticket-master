import AppDispatcher from '../../dispatcher/AppDispatcher';
import { GET_ITEMS } from '../../constants/AppConstants';


export default {
  getItems(search) {
    AppDispatcher.dispatch({
      actionType: GET_ITEMS,
      search: search.value
    });
  }
};
