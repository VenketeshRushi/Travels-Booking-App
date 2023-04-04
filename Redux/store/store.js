import {
  applyMiddleware,
  combineReducers,
  // compose,
  legacy_createStore,
} from "redux";
import thunk from "redux-thunk";
import { filterReducer } from "../filter/filter.reducer";
import { ticketReducer } from "../ticket/ticket.reducer";

const rootReducer = combineReducers({
  filter: filterReducer,
  ticket: ticketReducer,
});

// const createCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  applyMiddleware(thunk)
  // createCompose(applyMiddleware(thunk))
);
