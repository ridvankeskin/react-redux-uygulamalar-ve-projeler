export const setLoading = () => ({
  type: "SET_LOADING",
});

export const setProducts = (payload) => ({
  type: "SET_PRODUCTS",
  payload,
});

export const setError = (payload) => ({
  type: "SET_ERROR",
  payload,
});
