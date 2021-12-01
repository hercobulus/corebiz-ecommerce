import { types } from "./HomePageActions";

const INITIAL_STATE = {
  isLoading: false,
  error: null,
  products: [],
  subscribed: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_PRODUCTS_REQUEST:
      return { ...state, isLoading: true, error: null, products: [] };
    case types.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        products: action.payload.products,
      };
    case types.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
        products: [],
      };
    case types.SUBSCRIBE_REQUEST:
      return { ...state, subscribed: false, isLoading: true, error: null };
    case types.SUBSCRIBE_SUCCESS:
      console.log({
        ...state,
        subscribed: true,
        isLoading: false,
        error: null,
      });
      return { ...state, subscribed: true, isLoading: false, error: null };
    case types.SUBSCRIBE_FAILURE:
      return {
        ...state,
        subscribed: false,
        isLoading: false,
        error: action.payload.message,
      };
    case types.SUBSCRIBE_CLEAR:
      console.log({
        ...state,
        subscribed: false,
        isLoading: false,
        error: false,
      });
      return {
        ...state,
        subscribed: false,
        isLoading: false,
        error: false,
      };
    default:
      return state;
  }
};

export default reducer;
