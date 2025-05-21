import { Product } from "../interface";

export const getProducts = async (page = 0):Promise<Product[]> => {

     try {
    const response = await fetch(`http://localhost:3000/products?page=${page}&size=10`);
    if (!response.ok) {
      throw new Error('Error fetching products');
    }
    const data = await response.json();
    return data;  // data es del tipo ProductResponse
  } catch (error) {
    throw new Error('Networking error');
  }
}
