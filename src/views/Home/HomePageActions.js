import axios from "axios";
const BASE_URL = "https://corebiz-test.herokuapp.com/api/v1";
export const types = {
  GET_PRODUCTS_REQUEST: "GET_PRODUCTS_REQUEST",
  GET_PRODUCTS_SUCCESS: "GET_PRODUCTS_SUCCESS",
  GET_PRODUCTS_FAILURE: "GET_PRODUCTS_FAILURE",

  SUBSCRIBE_REQUEST: "SUBSCRIBE_REQUEST",
  SUBSCRIBE_SUCCESS: "SUBSCRIBE_SUCCESS",
  SUBSCRIBE_FAILURE: "SUBSCRIBE_FAILURE",

  SUBSCRIBE_CLEAR: "SUBSCRIBE_CLEAR",
};

export const getProducts = () => async (dispatch) => {
  dispatch({ type: types.GET_PRODUCTS_REQUEST });

  try {
    const response = await axios.get(`${BASE_URL}/products`);

    dispatch({
      type: types.GET_PRODUCTS_SUCCESS,
      payload: { products: response.data },
    });
  } catch (e) {
    dispatch({
      types: types.GET_PRODUCTS_FAILURE,
      payload: {
        message: e.message,
      },
    });
  }
};

export const postNewsletter =
  ({ name, email }) =>
  async (dispatch) => {
    dispatch({ type: types.SUBSCRIBE_REQUEST });

    try {
      await axios.post(`${BASE_URL}/newsletter`, {
        name,
        email,
      });

      dispatch({
        type: types.SUBSCRIBE_SUCCESS,
        payload: {},
      });
    } catch (e) {
      dispatch({
        types: types.GET_PRODUCTS_FAILURE,
        payload: {
          message: e.message,
        },
      });
    }
  };

export const clearNewsletter = () => async (dispatch) => {
  dispatch({ type: types.SUBSCRIBE_CLEAR, payload: {} });
};
