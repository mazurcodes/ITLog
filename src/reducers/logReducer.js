import {
  SET_LOADING_LOGS,
  LOGS_ERROR,
  GET_LOGS,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
  SEARCH_LOGS,
  CLEAR_LOGS
} from "../actions/types";

const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null,
  search: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false
      };
    case ADD_LOG:
      return {
        ...state,
        logs: [...state.logs, action.payload],
        loading: false
      };
    case DELETE_LOG:
      const newLogs = state.logs.filter(log => log.id !== action.payload);
      const newSearch = state.search !== null ? state.search.filter(log => log.id !== action.payload) : null;
      return {
        ...state,
        logs: newLogs,
        search: newSearch,
        loading: false
      };
    case UPDATE_LOG:
      const updatedLogs = state.logs.map(log =>
        log.id === action.payload.id ? action.payload : log
      );
      const updatedSearch = state.search !== null ? state.search.map(log =>
        log.id === action.payload.id ? action.payload : log
      ) : null;
      return {
        ...state,
        logs: updatedLogs,
        search: updatedSearch,
        loading: false
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
        loading: false
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case SEARCH_LOGS:
      return {
        ...state,
        search: action.payload,
        loading: false
      };
    case CLEAR_LOGS:
      return {
        ...state,
        search: null
      };
    case SET_LOADING_LOGS:
      return {
        ...state,
        loading: true
      };
    case LOGS_ERROR:
      console.log(action.payload);
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
