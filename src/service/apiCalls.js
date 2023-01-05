import axios from "axios";

export const loginCall = async (userCredential, dispatch) => {
  try {
    const res = await axios.post(
      "http://localhost:3330/api/auth/login",
      userCredential
    );
    const action = { type: "SIGN_IN", value: { user: res.data } };
    dispatch(action);
    localStorage.setItem("user", JSON.stringify(res.data));
    return "SUCCESS";
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
    console.log("Error :: ", err);
    return "ERROR";
  }
};

export const addProduct = async (product) => {
  try {
    const res = await axios.post("http://localhost:3330/api/product/add", {
      product: product,
    });
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getProducts = async () => {
  try {
    const res = await axios.get("http://localhost:3330/api/product/all");
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getProductsByCategory = async (category) => {
  try {
    const res = await axios.get(`http://localhost:3330/api/product/category`, {
      params: {
        category,
      },
    });
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getProductById = async (id) => {
  try {
    const res = await axios.get(`http://localhost:3330/api/product/one`, {
      params: {
        id,
      },
    });
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getCategories = async () => {
  try {
    const res = await axios.get("http://localhost:3330/api/category/all");
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const addCategory = async (category) => {
  try {
    const res = await axios.post(
      "http://localhost:3330/api/category/add",
      {
        category: category,
      }
      // {
      //   headers: {
      //     accept: "application/json",
      //     "Content-Type": "multipart/form-data",
      //   },
      // }
    );
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
};
