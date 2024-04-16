import instance from "./instance";

export const getSingleProductRequest = async (id: string) => {
  try {
    const response = await instance({
      url: `/api/product/${id}`,
      method: "GET",
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const addProductRequest = async (data: FormData) => {
  try {
    const response = await instance({
      url: "/api/product/add",
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data,
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getAllProductsRequest = async () => {
  try {
    const response = await instance({
      url: "/api/product",
      method: "GET",
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const editProductRequest = async (data: FormData) => {
  try {
    const response = await instance({
      url: "/api/product/edit",
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data,
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const markAsFavouriteRequest = async (
  productId: string,
  userId: string
) => {
  try {
    const response = await instance({
      url: "/api/product/favourite",
      method: "POST",
      data: {
        productId,
        userId,
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};
