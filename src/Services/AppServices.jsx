import apiRequest from "./Api";

export const GetAllProducts = async () => {
  return await apiRequest("GET", "Product/GetallProducts");
};
