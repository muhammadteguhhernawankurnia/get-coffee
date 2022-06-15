const initialState = {
  product: {},
  isLoading: true,
  isError: false,
  err: null,
};

const productReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCT_DETAIL_PENDING":
      return { ...prevState, err: null, isLoading: true };
    case "GET_PRODUCT_DETAIL_FULFILLED":
      return {
        ...prevState,
        isLoading: false,
        product: action.payload,
      };
    case "GET_PRODUCT_DETAIL_REJECTED":
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        err: action.payload,
      };
    default:
      return prevState;
  }
};

export default productReducer;
