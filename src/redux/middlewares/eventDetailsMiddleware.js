import axios from 'axios';
import { GET_EVENT_DETAILS } from '../actions/types';
import { fetchEventDetails } from '../actions/creators';

const eventDetailsMiddleware = (store) => (next) => (action) => {
  console.log('Je suis le middleware, et je laisse passer cette action: ', action);

  switch (action.type) {
    case GET_EVENT_DETAILS: {
      console.log('Je suis le middleware, et j execute cette action: ', action);
      axios.get(`http://localhost:3000/events/${action.id}`)
        .then((response) => {
          store.dispatch(fetchEventDetails(response.data.result.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
    default:
      next(action);
  }
};

export default eventDetailsMiddleware;
